exports.world = function() {
    console.log('hello world')
}
exports.add = function() {
    console.log('hello add')
}
// module.exports 存在会覆盖原有的 exports; 如果改写为 module.exports.hello = function() {} 就不会覆盖
// 使用 module.exports.hello = function() {} 相当于导出 { world: [Function], add: [Function], hello: [Function] } 这么一个对象
/* module.exports = function() {
    console.log('默认输出')
} */
module.exports.here = 'here'