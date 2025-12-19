document.getElementById("addButton").onclick = function () {
    const btn = document.createElement("button");
    btn.textContent = "Hello World";
    document.getElementById("container").appendChild(btn);
}