let click_count = 0
let symbol_click_count = 0
function On_Click_Clear() {
    document.querySelector(".result").innerHTML = ""
    symbol_click_count = 0
}
document.querySelector("#clear").addEventListener("click", On_Click_Clear)
function On_Click_Number(i) {
    document.querySelector(".result").innerHTML += document.getElementsByClassName("number")[i].innerHTML
}
let arr_numbers = Array.from(document.getElementsByClassName("number"))
arr_numbers.forEach((ele, i) => {
    ele.addEventListener("click", () => {
        On_Click_Number(i)
    })
})
let arr_symbols = Array.from(document.getElementsByClassName("img-utility"))
arr_symbols.pop()
arr_symbols.forEach((ele) => {
    ele.onclick = (eve) => {
        if (symbol_click_count < 1) {
            document.getElementsByClassName("result")[0].append(eve.currentTarget.parentElement.value)
            symbol_click_count++
        }
    }
})
function On_Click_Equals() {
    let ans = eval(document.querySelector(".result").innerText)
    document.querySelector(".result").innerHTML = ans
    symbol_click_count = 0
}
document.getElementsByClassName("img-utility")[4].addEventListener("click", On_Click_Equals)