
function addtoList() {
    var taskname = document.getElementById("taskinput").value;
    var tododiv = document.getElementById("mytodo");

    var newtodoItem = document.createElement('div');
    var todoname = document.createElement('li');

    var deletebtn = document.createElement('i');
    deletebtn.classList.add('fa-solid');
    deletebtn.classList.add('fa-delete-left');



    todoname.innerHTML = taskname;
    newtodoItem.appendChild(todoname);
    newtodoItem.appendChild(deletebtn);

    tododiv.appendChild(newtodoItem);

    // mine 
    document.getElementById('taskinput').value = "";


}

var tododiv = document.getElementById('mytodo');

tododiv.addEventListener("click", deleteitem);


function deleteitem(event) {
    const elements = event.target;
    
    if(elements.classList[0] === 'fa-solid'){
        elements.parentElement.remove();
        
    }

}


var input = document.getElementById("taskinput");


input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        document.getElementById("btn-click").click();
    }
});