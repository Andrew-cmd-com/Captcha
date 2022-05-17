function random_str(len) {
    let str = "";
    for (let i = 0; i < len; i++) {
        let r = Math.round(Math.random());
        if (r == 0) {
            str += String.fromCharCode((Math.floor(Math.random() * 10) + 48));
        } else if (r == 1) {
            str += String.fromCharCode((Math.floor(Math.random() * 26) + 65));
        }
    }
    return str;
}

let generated = random_str(10);

document.getElementById("captcha").innerHTML = generated;

document.getElementById("captcha_form").onsubmit = function(event) {
    if (document.getElementById("textbox").value == generated)
        alert("верно");
    else 
        alert("неверно");
    return false;
}