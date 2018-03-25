var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world';

var myVariable;
myVariable = 'Sachin'; /*string variable with single quotes*/
myVariable = 10; /*integer variable with no quotes*/
myVariable = true; /*boolean variable with no quotes*/
myVariable = [1,'Dravid', 10, true]; /* array to store multiple vaalues with single refernce.*/
console.log('myVariable value is :'+myVariable[1]);
// everything in JS is an object
myVariable = 4; //assignment
if(myVariable !== 5){
    console.log('if loop entered');
}else{
    console.log('else loop entered')
}
console.log('myVariable value is :'+myVariable);

console.log();
// alert('hello...this is from alert function'+myVariable);
// function in JS is also an object

function multiply(num1,num2){
    var result = num1*num2;
    return result;
}

function sample(){
    alert(multiply(4,5));
}

//console.log('product of 10 and 5 is : '+multiply(10,5));

// document.querySelector('html').onclick = function() {
//     alert("This is HomePage");
// }

// document.querySelector('html').onclick = function() {

//         alert(multiply(4,5));
// }

// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {    // this is similar to the above
//     alert("This is HomePage");
// }; 

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/legoland.jpg'){
        myImage.setAttribute('src','images/legoland_pencil.jpeg');
        alert('show pecil art');
    }else {
        myImage.setAttribute('src','images/legoland.jpg');
        alert('show original photo');
    }
}

var myButton = document.querySelector('button');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my site, '+myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my site, '+storedName;
}


