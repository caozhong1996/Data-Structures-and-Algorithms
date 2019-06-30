// 假设你的手里有9张牌，1,2,3,4,5,6,7,8,9
// 找出 [][][] + [][][] = [][][] 的所有排列组合


let a = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let b = [0, 0, 0, 0, 0, 0, 0, 0, 0]
n = 9

function dsf (step) {
  if (step === n) {
    let num1 = parseInt(`${a[0]}${a[1]}${a[2]}`)
    let num2 = parseInt(`${a[3]}${a[4]}${a[5]}`)
    let total = parseInt(`${a[6]}${a[7]}${a[8]}`)
    if (num1 + num2 === total) {
      console.log(`${num1} + ${num2} === ${total}`)
    }
    return
  }
  for (let i = 0; i < n; i++) {
    if (b[i] === 0) {
      a[step] = i + 1
      b[i] = 1
      dsf(step + 1)
      b[i] = 0
    }
  }
}
dsf(0)