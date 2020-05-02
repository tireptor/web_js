var query = document.querySelector('#menu .item span'),
    queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML); // Affiche : "Élément 1"
var lengthQuery = queryAll.length;
alert(lengthQuery); // Affiche : "2"
var strQueryAll;
for (var i = 0;i <= lengthQuery;i++){
	console.log(queryAll[1].innerHTML);
}
alert(strQueryAll);
//alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML);