var ageUser = parseInt(prompt('Quel âge avez vous ?'));
if (isNaN(ageUser)) {
	alert('Arrête petit coquinous, je te vois !');
} else if (ageUser >= 60) {
	alert('Tu te fait vieux quand même !');
} else if (ageUser > 17){
	alert('Tu es majoritairement majeur !');
} else {
	alert('Espèce de mineur !');
}

