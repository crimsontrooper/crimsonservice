import _fs from "fs";
const ReadFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        _fs.readFile(path, { encoding: "utf8" }, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
};
export { ReadFileAsync };
