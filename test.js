//匿名函式
var sum = function (a, b) {
    return a + b
};

alert(sum(10, 20));

//自訂義funtion
/*function add(){

}
add();*/

function getUserName() {
    const name = document.getElementById("userName").value;
    showMessage(name);
}
function showMessage(name) {
    document.getElementById("resultUser").textContent = name + "，安安您好!";
}