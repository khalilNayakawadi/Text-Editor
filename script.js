 let mycolor;
 let words ;
 let letters;
function convertUpper() {
    let textval = document.getElementById("txtarea").value;
    document.getElementById("txtarea").value = textval.toUpperCase();
}

function convertLower()
{
    let textval = document.getElementById("txtarea").value;
    document.getElementById("txtarea").value = textval.toLowerCase();
}

function find()
{
    let textval = document.getElementById("txtarea").value.toLowerCase();
    let findtxt = prompt("enter the text you want to search ").toLowerCase();
    if(textval.includes(findtxt))
    {
        alert(`entered text "${findtxt}" is present in below text`);
    }
    else{
        alert(`entered text "${findtxt}" is not present in below text`);
    }
}

function changeColor()
{
    mycolor = prompt("enter the color you want to apply to text").toLowerCase();
    document.getElementById("txtarea").style.color = mycolor;
}

function alignRight()
{
    
    document.getElementById("txtarea").style.textAlign = "right";
}
function alignLeft()
{
    
    document.getElementById("txtarea").style.textAlign = "left";
}
function alignCenter()
{
    
    document.getElementById("txtarea").style.textAlign = "center";
}
function alignJustify()
{
    
    document.getElementById("txtarea").style.textAlign = "justify";
}

function changeFont()
{
    let myFont = prompt("enter the font family to change styling of text ")
    document.getElementById("txtarea").style.fontFamily = myFont;
}

function findLength()
{
    let textinfo = document.getElementById("len");
    letters = document.getElementById("txtarea").value.length;
    words = document.getElementById("txtarea").value.split(" ").length-1;
    textinfo.innerHTML = `words : ${words} characters ${letters}  `;
}

