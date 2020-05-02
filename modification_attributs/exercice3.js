var paragraph = document.getElementById('myP');
var first = paragraph.firstChild;
var last = paragraph.lastChild;
var children = paragraph.childNodes;
for (var i = 0, c = children.length; i < c; i++) {
    if (children[i].nodeType === Node.ELEMENT_NODE) { // C'est un élément HTML
        alert(children[i].firstChild.data);
    } else { // C'est certainement un nœud textuel
        alert(children[i].data);
    }
}