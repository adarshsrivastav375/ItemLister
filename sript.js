let headerTitle = document.getElementById('main-header');
headerTitle.style = "border-bottom : solid 3px black";
//console.log("hello world");
let addItem = document.getElementsByClassName('title');
//console.log(addItem);
addItem[0].style.fontWeight="bold";
addItem[0].style.color ="green";
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor ="green";
// for(let i=0; i< items.length;i++){
//     items[i].style.fontWeight = "bold";
// }
let li = document.getElementsByTagName('li');
// console.log(items);
li[2].style.backgroundColor ="green";
for(let i=0; i< li.length;i++){
    li[i].style.fontWeight = "bold";
}
