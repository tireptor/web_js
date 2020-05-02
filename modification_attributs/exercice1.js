var div = document.getElementById('myDiv');
var divListClass = document.querySelector('h1');
alert(div.textContent);
var divTitle = document.getElementById('Title1');
alert(divTitle.textContent);
divTitle.textContent = 'Mon nouveau super titre !';
divTitle.className = 'blue';
alert("Après le bleu, on passe au rouge !");
divTitle.className = 'red';
alert("On repasse au bleu !");
document.getElementById('Title1').className = 'blue';
// Ajoute une nouvelle classe
alert("Attention, changement par le code");
divListClass.classList.add('new-class');
var result = '';
for (var i = 0; i < divListClass.classList.length; i++) {
    result += '.' + divListClass.classList[i] + '\n';
}
alert(result);