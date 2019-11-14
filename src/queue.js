const screen = document.querySelector('#screen')
const getNum = document.querySelector('#getNumbers')
const callNum = document.querySelector('#callNumbers')
const nowNum = document.querySelector('#nowNumbers')
const queue = document.querySelector('#queue')

let n = 0
let numbers = []
getNum.onclick = () => {
    n += 1
    numbers.push.call(numbers, n)
    nowNum.innerText = n
    queue.innerText = JSON.stringify(numbers)
}
callNum.onclick = () => {
    if (numbers.length === 0) { return; }
    let m = numbers.shift.call(numbers)
    screen.innerText = `请${m}号取餐`
    queue.innerText = JSON.stringify(numbers)
}
