// 计算某一时间与当前时间的倒计时
function transTime(timestamp) {
    var result = ''
    if (timestamp >= 86400) {
        var days = Math.floor(timestamp / 86400)
        timestamp = timestamp % 86400
        result = days + '天'
        /* if (timestamp > 0) {
            result += ''
        } */
    }
    if (timestamp >= 3600) {
        var hours = Math.floor(timestamp / 3600)
        timestamp = timestamp % 3600
        if (hours < 10) {
            hours = '0' + hours
        }
        result += hours + ':'
    } else {
        result += '00:'
    }
    if (timestamp >= 60) {
        var minutes = Math.floor(timestamp / 60)
        timestamp = timestamp % 60
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        result += minutes + ':'
    } else {
        result += '00:'
    }
    var secends = Math.floor(timestamp)
    if (secends < 10) {
        secends = '0' + secends
    }
    result += secends
    return result
}
function leftTimer(timestamp) {
    var timer = setInterval(() => {
        var time = transTime(timestamp)
        console.log('倒计时: ', time)
        if (timestamp == 0) {
            clearInterval(timer)
        } else {
            timestamp = timestamp - 1
        }
    }, 1000)
}
var now = new Date().getTime()
// var prev = new Date('2019-03-21 00:00').getTime()
var prev = new Date('2019-06-11 00:00').getTime()
leftTimer((prev - now)/1000)
// leftTimer(10)