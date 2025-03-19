function Saludar()
{
    alert("No saben programar");
}

function Saludar2()
{
    alert("mama huevo");
}

document.addEventListener("DOMContentLoaded",function()
{
document.getElementById("mi_boton").addEventListener("click", function()
{
Saludar();
Saludar2();
});


});

