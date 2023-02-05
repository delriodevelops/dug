import art from "../../utils/ascii.js"
export const getAscii = async (req,res)=>{
    try {
        return res.status(200).json(art)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}
export const postAscii = async (req,res)=>{
    const {ascii}=req.body
    console.log()
    try {
        if(art.some((asci)=>asci===ascii)){
            return res.status(200).json('this ascii already exists')
        } else {
            art.push(ascii)
            return res.status(201).json('this ascii was susccessfully created')
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}