document.getElementById("#btnExperiencia")


document.querySelector("#btnExperiencia").onclick = function () {
    const experiencia = document.querySelector("#experiencia");
        experiencia.style.display = "block";
    const formacion = document.querySelector("#formacion");
        formacion.style.display = "none";
    const contacto = document.querySelector("#contacto");
        contacto.style.display = "none";

}

document.querySelector("#btnFormacion").onclick = function () {
    const experiencia = document.querySelector("#experiencia");
        experiencia.style.display = "none";
    const formacion = document.querySelector("#formacion");
        formacion.style.display = "block";
    const contacto = document.querySelector("#contacto");
        contacto.style.display = "none";
}

document.querySelector("#btnContacto").onclick = function () {
    const experiencia = document.querySelector("#experiencia");
        experiencia.style.display = "none";
    const formacion = document.querySelector("#formacion");
        formacion.style.display = "none";
    const contacto = document.querySelector("#contacto");
        contacto.style.display = "block";
}