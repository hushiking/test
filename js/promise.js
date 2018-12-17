const fs = require('fs');
/**
 * 异步读取文件
 * 
 * @param {any} fileName 文件名
 * @returns promise
 */
const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const gen = function* () {
    const f1 = yield readFile('./excute.js');
    if (f1) {
        console.log(f1.toString());
    }
    // const f2 = yield readFile('/etc/shells');
    // console.log(f2.toString());
};

var g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
