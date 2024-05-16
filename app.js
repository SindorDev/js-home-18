let FirstName = prompt("Enter Your Name");
let age = prompt("Enter Your Age");
let email = prompt("Enter Your Email");
let phone =  prompt("Enter Your Phone Number");
let country = prompt("Enter Your Country");
let time = new Date().toLocaleTimeString();
let arr = 
{
    name: FirstName,
    age: age,
    email: email,
    phone: phone,
    country: country,
    time:time
};
let array = [

]
array.push(arr)
localStorage.setItem("User", JSON.stringify(array))
document.write(`${arr.name}\n ${arr.age}\n ${arr.email}\n ${arr.phone}\n ${arr.country}\n ${arr.time}`);