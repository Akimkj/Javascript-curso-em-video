var agora = new Date()
var hora = agora.getHours()

var corDeFundoMain = window.document.getElementById("imagemdoDia")
var textoHoras = window.document.getElementById("mensagemHoraDoDia")

textoHoras.innerText = `Agora são ${hora} horas`
if (hora >= 0 && hora <= 12) {
    window.document.corDeFundoMain.style.backgroundImage = URL("Amanhecer01.jpg")
}
