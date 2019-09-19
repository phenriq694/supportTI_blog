function nextButton() {
    let img = document.getElementById('git_image')
    let txt = document.getElementById('tutorial')

    img.src = `../server/images/macPreparo/${gifs[i]}`
    txt.innerHTML = text[i] 

    i++
}

const gifs = ["01.PNG", "1.PNG", "02.PNG"]
const text = ["Clique no botão 'Option'.", "Selecione a linguagem."]
let i = 0