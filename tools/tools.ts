import _fs from "fs"


const ReadFileAsync = (path:string) => {
    return new Promise<string>((resolve, reject)=>{
        _fs.readFile(path, {encoding: "utf8"}, (err,data)=>{
            if(err) reject(err);
            else resolve(data)
        })
    })
}

export {ReadFileAsync}