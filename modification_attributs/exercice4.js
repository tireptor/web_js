var paragraph = document.getElementById('myP');
var child = paragraph.lastChild; // On prend le dernier enfant

while (child) {

    if (child.nodeType === Node.ELEMENT_NODE) { // C'est un élément HTML
        alert(child.firstChild.data);
    } else { // C'est certainement un nœud textuel
        alert(child.data);
    }

    child = child.previousSibling; // À chaque tour de boucle, on prend l'enfant précédent

}