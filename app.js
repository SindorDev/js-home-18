const addBtn = document.querySelector("#add-btn");
const showBtn = document.querySelector("#show-btn");
const result = document.querySelector("#result");
const deleteBtn = document.querySelector("#delete-btn");
const sortBtn = document.querySelector("#sort-btn");
function newTodo(info, time) {
    this.id = (Math.floor(Math.random() * 100000)+ 1).toString().padStart(6, "0");
    this.info = info,
    this.time = time
}

const local = JSON.parse(localStorage.getItem("Info")) || []
const AddTodo = () => {
    let info = prompt("Enter your Name");
    let time = new Date().toLocaleTimeString();

    let newObject = new newTodo(info, time)
    local.push(newObject)

    localStorage.setItem("Info", JSON.stringify(local))
}
const showTodo = () => {
    result.innerHTML = ""
    local.forEach(item => {
        result.innerHTML += `
        <div class="group">
            <span>${item.id}</span>
            <h2>${item.info}</h2>
            <span>${item.time}</span>
        </div>
        `
    })
}
const deleteId = () => {
    let delId = prompt("Enter Id: ");

    if(delId) {
        let findIndex = local.findIndex(element => element.id === delId);
        local.splice(findIndex, 1);
        localStorage.setItem("Info", JSON.stringify(local))
    }
}
let sort = false
const sortedShow = () => {
    if(sort === false) {
        sort === true;
        local.sort((a,b) => {
            if(a.time > b.time) {
                return -1
            }
            else {
                return 1
            }
        })
    }
    else {
        if(a.time > b.time) {
            return 1
        }
        else {
            return -1
        }
    }

    showTodo()
}


addBtn.addEventListener("click", AddTodo)
showBtn.addEventListener("click", showTodo);
deleteBtn.addEventListener("click", deleteId);
sortBtn.addEventListener("click", sortedShow);