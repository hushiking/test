setTimeout((res) => {
  console.log(res)
}, 0, '1秒后执行')
console.log('立即执行')

function sleep(time) {
  console.log('执行sleep1')
  return new Promise(async (resolve, reject) => {
    console.log('执行sleep2')
    await new Promise(resolve => { // resolve 单词写错成 reslove 又是不一样的结果
      setTimeout(res => {
        console.log(res)
        resolve(res)
      }, time, 'done')
    })
    console.log('执行sleep3') // 不执行该行
  }) // Promise 函数必须 resolve 才能继续向下执行
}

async function excuteSleep() {
  console.log('立即执行sleep')
  await sleep(5000) // sleep 函数 return 的 Promise 没有 resolve 结果, 无法向下继续执行
  console.log('async同步执行')
}
excuteSleep()
console.log('执行')

// 结果
// 立即执行
// 立即执行sleep
// 执行sleep1
// 执行sleep2
// 执行
// 1秒后执行
// done
// 执行sleep3