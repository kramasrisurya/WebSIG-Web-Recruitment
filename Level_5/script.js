function addTask() {
          
    let input = document.getElementById("todo-input");
    let list = document.getElementById("todo-list");

    if (input.value !== "") {
        let li = document.createElement("li");
        li.innerText = input.value;

        let deleteBtn = document.createElement("span");
        deleteBtn.innerText = " ✕";
        deleteBtn.style.color = "red";
        deleteBtn.style.cursor = "pointer";

        deleteBtn.onclick = function() {
                li.remove();
            };

        li.appendChild(deleteBtn);
        list.appendChild(li);   

        input.value = "";
    }
}