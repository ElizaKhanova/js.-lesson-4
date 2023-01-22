let text = document.getElementById ('text');
console.log (text);
let reg = /( |<([^>]+)>)/ig; // пока не разобралась, как делать :(
let result = text.replace(reg,'');
console.log(result);
    