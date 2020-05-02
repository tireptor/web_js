var contentEntry = prompt ('Quel age avez vous ?');
var ageUser = parseInt (contentEntry);
if (isNaN(ageUser)) {
	alert("Tu n'as pas saisie un nombre");
} else if ( ageUser <= 0){
	alert("Espèce de menteur, ma grand mère aussi à moins de 1 an !. ");
} else if ( ageUser <= 17){
	alert("Vous n'êtes pas encore majeur. ");
} else if ( ageUser <= 49){
	alert("Vous êtes majeur mais pas encore senior. ");
} else if ( ageUser <= 59){
	alert(" Vous êtes senior mais pas encore retraité.");
} else if ( ageUser <= 120){
	alert(" Vous êtes retraité, profitez de votre temps libre !");
} else {
	alert("Vous n'avez pas saisie un age !");
}