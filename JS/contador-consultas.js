let contador=0;

function incrementar()
{
    const formulario=document.querySelector("form");

    if (formulario.checkValidity())
    {
        contador++;
        document.getElementById("contador").innerText=contador;
    }
}