// let headerTitle = document.getElementById('main-header');
// headerTitle.style = "border-bottom : solid 3px black";
// //console.log("hello world");
// let addItem = document.getElementsByClassName('title');
// //console.log(addItem);
// addItem[0].style.fontWeight="bold";
// addItem[0].style.color ="green";
// // let items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // items[2].style.backgroundColor ="green";
// // for(let i=0; i< items.length;i++){
// //     items[i].style.fontWeight = "bold";
// // }
// // let li = document.getElementsByTagName('li');
// // console.log(items);
// // li[2].style.backgroundColor ="green";
// // for(let i=0; i< li.length;i++){
// //     li[i].style.fontWeight = "bold";
// // }

// //query selector

// // let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor ="green";
// // let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.display ="none";

// let items = document.querySelectorAll('.list-group-item');
//  items[1].style = 'color : green';
//  for(let i=0; i< items.length;i=i+2){
//     items[i].style.backgroundColor = 'green';
//  }


let itemList = document.querySelector('#items');
//paraent element
itemList.parentElement.style.background ='#f4f4f4';
//first child
console.log('1st child',itemList.firstChild);
//last child
console.log('last child',itemList.lastChild);
//firstElementChild
itemList.firstElementChild.style.color='red';
//lastElementChild
itemList.lastElementChild.style.color='blue';
// next sibling
console.log('next sibling',itemList.nextSibling);
// nextElementSibling
console.log('next sibling',itemList.nextElementSibling);
// previous sibling
console.log('previous sibling',itemList.nextSibling);
// previousElementSibling
console.log('previous element sibling',itemList.previousElementSibling);
itemList.previousElementSibling.textContent="hello";

//createElement
let newDiv = document.createElement('div');
console.log(newDiv);
//add class
newDiv.className='cl';
//add id
newDiv.id='nId';
//set attribute
newDiv.setAttribute('title' , 'newdiv');
//create text node;
let newDivText = document.createTextNode('hello world');
// text append to the div
newDiv.appendChild(newDivText);

//add to the dom
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px'
//insertBefore any item
container.insertBefore(newDiv , h1);
let liNode = document.createElement('li');
console.log(liNode);
liNode.className='list-group-item';
liNode.textContent='hello world';
let list = document.querySelector('#items');
let firstItem = document.querySelector('#items').firstElementChild
console.log(firstItem)
list.insertBefore(liNode , firstItem);







