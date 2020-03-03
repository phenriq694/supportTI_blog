function nextButton() {
    let img = document.getElementById('git_image')
    let txt = document.getElementById('tutorial')

    img.src = `../server/videos/${gifs[i]}`
    txt.innerHTML = text[i] 

    i++
}

const gifs = ["1.mp4", "2.mp4", "3.mp4"]
const text = ["Clique no botão 'Option'.", "Selecione a linguagem."]
let i = 0