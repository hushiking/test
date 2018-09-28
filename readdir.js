const fs = require('fs')
const readdir = function (path) { // 读文件函数
    return new Promise((res, rej) => {
        fs.readdir(path, (err, files) => {
            if (err) res(err)
            console.log('files', files)
            res(files)
        })
    })
}
const stat = function (path) { // 确认是否是文件夹
    return new Promise((res, rej) => {
        fs.stat(path, (err, file) => {
            if (err) res(err)
            file.isDirectory() ? res('dir') : res('file') // 返回类型结果
        })
    })
}
const getdirs = async function (filepath) {
    let sendFiles = []
    const files = await readdir(filepath) // 读文件夹
    const promises = files.map(function (file) { // 利用map函数特性，返回值组成新的数组，这儿并没有用async函数，map内并不等待一个stat回来后再进行另一个stat，是同时进行的。
        return stat(filepath + '/' + file)
            .then(res => {
                if (res === 'dir') sendFiles.push(file)
            })
    })
    await Promise.all(promises) // 这儿是异步并发的关键，在这个位置等待所有promise对象resolve。
    // console.log(sendFiles)
    return sendFiles
}
const dir = getdirs('./node_modules/jquery')
console.log('>>>', dir) // async函数运行结果为Promise对象，使用then方法获取返回值
dir.then(v => console.log(v))
