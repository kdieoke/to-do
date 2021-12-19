let list = [];


function request(){
let req = document.getElementById("request").value; 

//Null check 
if(req == null || req == "") return;

//Run 
list.push(req)
console.log(list)
updateList(req);
}


function updateList(req){

//Redraw
document.getElementById("list").innerHTML = "";
document.getElementById("request").value = "";


for(let i = 0; i < list.length; i++){
document.getElementById("list").innerHTML += "<li>" + list[i] + " <button onclick='deleteOne(" + i + ")'>X</button> </li>";}
}



function deleteOne(i){
console.log("DELETED :: " + list[i])
list.splice(i, 1);
updateList();
}

function terminateList(){

list.splice(0, list.length);
console.log(list);
updateList();

}

function addEnterFunction(){
document.addEventListener("keydown", (e) => {
if(e.key == "Enter") request();
console.log(e.key)} )
}