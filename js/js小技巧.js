// doSome参数是一个对象，通过对这个对象解构，得到变量foo，bar，baz。如果解构失败，等于默认值。如果不传参数会报错
function doSome({ foo = 'Hi', bar = 'Yo!', baz = 123 }) {
    console.log(foo, bar, baz)
}
doSome({foo: 'Hello', bar: 'Hey!', baz: 42})
doSome({})
// doSome() // 报错

// 下面为doSelect的参数指定了默认值{}，如果不传参数会传入默认值{}，然后再将其解构为参数默认值
function doSelect({ foo = 'Hi', bar = 'Yo!', baz = 123 } = {}) {
    console.log(foo, bar, baz)
}
doSelect()

const csvFileLine = '1997,John Doe,US,john@doe.com,New York'
console.log(csvFileLine.split(','))
const {2: country, 4: state} = csvFileLine.split(',')
console.log(country, state)

function getWaterState(tempInCelsius) {
    let state
    switch (true) {
        case (tempInCelsius < 0):
            state = 'Solid'
            break
        case (tempInCelsius > 0 && tempInCelsius < 100):
            state = 'Liquid'
            break
        default:
            state = 'Gas'
    }
    return state
}
console.log(getWaterState(20))