
let addBtn = document.querySelector("#addBtn");
let task_list = document.querySelector("#task_list");
let input = document.querySelector("#input_menu");

addBtn.addEventListener("click", function () {
    var para = document.createElement("p");
    var keeper = input.value;
    para.innerText = input.value;
    input.value = "";
    if (keeper.length > 0) {
        task_list.prepend(para);
    }

    para.addEventListener("click", function () {
        para.style.textDecoration = "line-through";
        para.style.opacity = "0.7";
    });
    para.addEventListener("dblclick", function () {
        
        task_list.removeChild(para);
        alert("task removed");
    });
});
