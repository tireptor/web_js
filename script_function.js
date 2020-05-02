var a = 15;
var b = 20;
var delta = 0;
function addition (a,b){
	return a + b;
}
function sayHello (){
	alert('Hello world !');
}
function calcul (){
	var delta = 90;
	alert ('Dans la fonction calcul , delta = '+delta);
}
alert(addition(a,b));
sayHello();
calcul();
alert('Hors de la fonction il vaut : '+delta);
