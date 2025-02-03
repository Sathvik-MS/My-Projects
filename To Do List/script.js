// This code is very hard to understand
// Its better you ingnore it
let click = false;
let clickCount = 0;
let i = 1;
function verify_check(k) {
    document.getElementById(`list-container${k}`).firstElementChild.addEventListener("click", () => {
        if (document.getElementById(`list-container${k}`).firstElementChild.checked) {
            let success_div = document.createElement("div")
            success_div.setAttribute("class", "show_success")
            success_div.innerText = "Task Completed!"
            document.getElementById(`list-container${k}`).append(success_div);
            console.log(document.getElementById("inp1").checked);
            document.getElementById(`list-container${k}`).
                k++;
        }
        document.getElementById(`list-container${k}`).firstElementChild.checked = true
    })
}
// Function which operates when Add is clicked
function On_Click_Add() {
    const textarea = document.createElement("textarea")
    const button = document.createElement("button")
    textarea.setAttribute("id", "txt-a1")
    button.setAttribute("id", "btn1")
    button.innerText = "Enter"
    document.getElementById("add").append(textarea, button);
    document.getElementById("btn1").addEventListener("click", () => {
        let input = document.createElement("input")
        let div = document.createElement("div")
        let span = document.createElement("span")
        div.setAttribute("id", `list-container${i}`)
        span.innerText = document.getElementById("txt-a1").value
        span.setAttribute("id", "txt1")
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "inp1");
        document.getElementsByClassName("lists")[0].append(div);
        if (document.getElementById("txt-a1").value !== "") {
            document.getElementById(`list-container${i}`).append(input, span);
        }
        verify_check(i);
        i++;
    })
}
// Function which operates when Delete is clicked
function On_Click_Delete() {
    const textarea = document.createElement("textarea")
    const button = document.createElement("button")
    textarea.setAttribute("id", "txt-a2")
    button.setAttribute("id", "btn2")
    button.innerText = "Enter"
    document.getElementById("delete").append(textarea, button);
    document.getElementById("btn2").addEventListener("click", () => {
        let arr = (Array.from(document.getElementsByClassName("lists")[0].children))
        arr.forEach((ele) => {
            if (ele.children[1].innerText == textarea.value) {
                ele.remove();
            }
        })
    })
}
document.getElementsByClassName("hover")[0].addEventListener("click", () => {
    click = true;
    if (click == true && clickCount < 1) {
        On_Click_Add()
    }
    clickCount++;
})
document.getElementsByClassName("hover")[1].addEventListener("click", () => {
    let click1 = true
    let click1_count = 0;
    if (click1 == true && click1_count < 1) {
        On_Click_Delete()
    }
    click1_count++
})