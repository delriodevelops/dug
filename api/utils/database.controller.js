import { query } from 'express'
import fs from 'fs'
const file = './db.json'


export const db = {
    get: (dir='/') => {
        const splittedPath = dir.split('/')
        
        const fullPath = JSON.parse(fs.readFileSync('db.json'))
        
        let endpoint = splittedPath[splittedPath.length-1]
        let preEndpoint = splittedPath[splittedPath.length-2]
        let restPoint = splittedPath.slice(0,splittedPath.length-1)

        let query = fullPath
        restPoint.forEach((res)=>{
            query = query[res]
        })
        // response = query.find(preEndpoint)
        
        return [splittedPath,fullPath,endpoint,preEndpoint,restPoint,query]

        return JSON.parse(JSON.stringify(JSON.parse(fs.readFileSync('db.json'))+endpoint))
    }
}

console.log(
    db.get('ascii/NSFW/33')
    )