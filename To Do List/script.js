function f1() {
    const textarea = document.createElement("textarea")
    const button = document.createElement("button")
    textarea.setAttribute("palceholder", "Enter Text")
    textarea.setAttribute("id", "txt-a1")
    button.setAttribute("id", "btn1")
    button.innerText = "Enter"
    document.getElementById("add").append(textarea, button);
}
let click = false;
let clickCount = 0;
document.getElementsByClassName("hover")[0].addEventListener("click", () => {
    click = true;
    if (click == true && clickCount < 1) {
        f1()
    }
    clickCount++;
    let i = 1;
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
        i++;
    })
})