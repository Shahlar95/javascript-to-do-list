

let main = document.getElementsByClassName("main");
let main2 = document.getElementsByClassName("main2");
let input = document.getElementById("input");
let btn = document.getElementById('btn');
let lists = document.getElementById("list-box");




eventListeners();

function eventListeners() {

    btn.addEventListener("click",addTodo);
    document.addEventListener("DOMContentLoaded",refreshContentblock);
    lists.addEventListener("click",deleteicon);
    
}

// Localin yaradilmasi

function createStorage() {
    let todos;

    if (localStorage.getItem("todos")===null) {//storageden todolari cekmek
        todos = [];
        
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
    
}

// localda yeni elementin yaradilmasi

function newlocalElement(newTodo) {
    let todos = createStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    
   
}


// yeni elementin ekranda yaazilmasi
function addTodo(e) {
    const newElement = input.value;

    if(newElement === ""){

        alert("hec bir element daxil etmemisiniz...");
    }else{


        addlistElement(newElement);
        newlocalElement(newElement);
        

    }
}


// elave olunmush list elementin 
function addlistElement(newTodo) {

    let listElement = document.createElement("li");
    let icon = document.createElement("i");
    icon.className ="fa-solid fa-xmark";
    listElement.append(document.createTextNode(newTodo));
    listElement.appendChild(icon);
    lists.append(listElement);
    

    
    input.value = "";
}


// refreshden sonra localda olan elementlerin ekranda qalmasi

function refreshContentblock() {
    let todos = createStorage();
    todos.forEach(function(todo){

        addlistElement(todo);
    })
}


function deleteicon(e) {

    if(e.target.className === "fa-solid fa-xmark"){

        e.target.parentElement.remove();
        deleteStorage(e.target.parentElement.textContent);
        


    
}

}

// localdan icon vasitsile silmek

function deleteStorage(deletelistelement){

    let selectStroage = createStorage();

    selectStroage.forEach(function(searchelement,index){
        if(searchelement === deletelistelement){

            selectStroage.splice(index,1);
        }

    });

    localStorage.setItem("todos",JSON.stringify(selectStroage));


}













//  listArr.forEach(e=>{
//         let listElement = document.createElement("li");
//         let x=input.value;
//         listElement.textContent =e.x;
//         let icon = document.createElement("i");
//         icon.className ="fa-solid fa-xmark";
//         listElement.append(icon);
//         lists.append(listElement);
        
//          icon.addEventListener("click",()=>{

//             listElement.remove();
            











// btn.addEventListener("click",()=>{

//           let listArr=JSON.parse(localStorage.getItem("lists"));
//           let newobj =  {data:input.value};
//           localStorage.setItem("lists",JSON.stringify([...listArr,newobj]));
      

  

    
//    
           
    
//          })
//     })

//         input.value="";

        
// })






   
   

