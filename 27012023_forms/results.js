const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const password = urlParams.get('pw');


document.getElementById('myDiv').innerHTML=`Your name is ${firstName} and your secret password is ${password}`;