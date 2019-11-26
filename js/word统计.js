function getWordNum(str) {
  if (str == null) return -1;
  var reg = '//s+'
}

let article = "'During the ITB China 2018 held in Shanghai, COTRI presented the CTW Award 2018 in the Special Individual Recognition category to Mr. David L. Shields,Vice President,Sales of Island Routes Caribbean Adventures. CTW Award is recognized inside and outside China as the most important quality sign for the international Chinese outbound market.'"

// article = article.trim()
// article = article.replace(/[\s/¦‖︴（）【】“”‘’《》()[\]""''«»﹝﹞＜＞〖〗{}〈〉〔〕<>‹›［］「」『』。？！，、；：~@#.?!,\\;:～＠＃%&*+-=<|……·﹪＆＊＋－＝﹤︳^`-]+/g, ' ')
article = article.replace(/[\s&`~\|\\\*^%$#@\<>\?\[\],．:;.!-+=_()/{}&$！\-@~·！@#￥%……&*（）+=——-《》，。？；：、｛｝{}【】]+/g, ' ')
console.log(article)
let arr = article.split(/\s/g)
console.log(arr)
arr = arr.filter(function(v, i) {
  return v != ''
})
console.log(arr)
const words = arr.length
console.log('单词个数: ', words)