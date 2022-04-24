import log from './log.js'

log("Closure", "Start")

// https://stackoverflow.com/a/111111/8105942
function foo() {
  const secret = Math.trunc(Math.random() * 100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}

const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`

log("Closure", "End")

log("Block Scope", "Start")
try {
  // 這種直接寫大括弧的內容在程式中不代表任何意義，僅為有效的程式碼，示意用
  {
    let me = "scope"
    console.log(me)
  }
  console.log(me) // This will throw undefined error
} catch(e) {
  console.log(e)
}

try {
  // 如果剛剛的範例中以 var 來宣告，則會發現在大括弧外一樣可以取用變數，因為 var 不是區塊作用域，而是函式作用域。
  {
    var me = "scope"
    console.log(me)
  }
  console.log(me) // output: "scope"
} catch(e) {
  console.log(e)
}

log("Block Scope", "End")