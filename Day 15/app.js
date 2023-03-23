// determine calc
const sum_btn = document.getElementById("sum-button")
const result = document.getElementById("calculated-sum")
const input = document.getElementById("user-number")
let sum = 0

function addDetermine() {
    console.log(input.value)
    for(let i=0 ;i<=input.value ; i++) {
        sum = sum+i
    }
    result.textContent = sum
    result.style.display = "block"
    sum = 0
}

sum_btn.addEventListener("click",addDetermine)

//highlight
const anchorElement = document.querySelectorAll("a")
const highlights = document.getElementById('calcbtn')
function highlight() {
    for(const anchor of anchorElement) {
        anchor.style.backgroundColor = "blue"
    }
}
highlights.addEventListener('click',highlight)