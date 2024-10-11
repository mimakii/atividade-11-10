function somar() {
    const numero1 = document.querySelector("#numero-1").value
    const numero2 = document.querySelector("#numero-2").value
    const numero3 = document.querySelector("#numero-3").value

    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = `Soma: ${numero1 * numero2 * numero3}`
}

const button = document.querySelector("button")
button.addEventListener("click", somar)