var elementHtml = document.querySelector("#myP a");
var queryAll    = document.querySelectorAll("#myP a");
var child       = elementHtml.innerHTML;
var childLength = queryAll.length;
//var child       = elementHtml.innerHTML;
alert(child);
for (i=0;i<=childLength;i++){
    alert(queryAll[i].innerHTML);
}
