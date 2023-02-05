export const homeController = async (req,res)=>{
    try {
        return res.status(200).sendFile('home.html', {root: 'statics'});    
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}