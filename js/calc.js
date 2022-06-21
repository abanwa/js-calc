
let num1;
let num2;
let sign;

num1 = prompt("Enter first number")

if (!isNaN(num1)){
	 sign = prompt("Enter a sign");
} else {
	document.writeln("Enter a valid number");
	exit();
}

if (sign == "-" || sign == "+" || sign == "*" || sign == "/" || sign == "%"){
	 num2 = prompt("Enter second number");
} else {
	document.writeln("Invalid operator");
	exit();
}

if(isNaN(num2)){
	document.writeln("Enter a valid number");
	exit();
}

switch(sign){
	case '+':
		let sum = num1 + num2;
		document.write(`The answer is ${sum}`);
		break;
	case '-':
		let sub = num1 - num2;
		document.write(`The answer is ${sub}`);
		break;
	case '*':
		let mult = num1 * num2;
		document.write(`The answer is ${mult}`);
		break;
	case '/':
		let div = num1 / num2;
		document.write(`The answer is ${div}`);
		break;
	case '%':
		let rem = num1 % num2;
		document.write(`The answer is ${rem}`);
		// break;
}

