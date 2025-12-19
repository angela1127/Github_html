document.getElementById("addButton").onclick = function () {
    const btn = document.createElement("button");
    btn.textContent = "耶";
    document.getElementById("container").appendChild(btn);
}