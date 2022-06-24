const operator = window.prompt("Enter choice: +, -, /, *, %");
const num1 = window.prompt("Enter first number: ");
const num2 = window.prompt("Enter second number");

if (operator == '+') {
    result = Number(num1) + Number(num2);
    
}  else if(operator == '-') {
    result= Number(num1) - Number(num2);
    
}  else if(operator == '/') {
    result= Number(num1) / Number(num2);
   
} else if(operator == '*') {
    result= Number(num1) * Number(num2);
    
}
else {
    result= Number(num1) % Number(num2);
  
}

alert(num1+operator+num2+'=' + result);
