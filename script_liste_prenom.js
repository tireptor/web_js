var nicks = '',
    nick;
	prenoms = [];

while (true) {
    nick = prompt('Entrez un prénom :');

    if (nick) {
        //nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
		prenoms.push(nick);
    } else {
        break; // On quitte la boucle
    }
}
if (prenoms.length > 0){
	nicks = prenoms.join(' ');
	alert(nicks);
} else {
	alert("Rien a afficher !");
}
//alert(nicks); // Affiche les prénoms à la suite