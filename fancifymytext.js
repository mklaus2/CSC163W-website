function bigify(){
    document.getElementById("textedit").style.fontSize = "24pt";
}

function fancify(){
    if(document.getElementById("fancyButton").checked){
        document.getElementById("textedit").style.fontWeight = "bold";
        document.getElementById("textedit").style.color = "blue";
        document.getElementById("textedit").style.textDecoration = "underline";
    }
    else{
        document.getElementById("textedit").style.fontWeight = "normal";
        document.getElementById("textedit").style.color = "black";
        document.getElementById("textedit").style.textDecoration = "normal";
    }
}

function mooify(){
    var str = document.getElementById("textedit").value;
    str = str.toUpperCase();
    str = str.replace(".","-Moo");
    var parts = str.split(" ");
    str = parts.join("_");
    document.getElementById("textedit").value = str;
}