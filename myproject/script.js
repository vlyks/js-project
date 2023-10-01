const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    if (event.code.toLowerCase() === 'space') {
        setRandCol()
    }
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type

    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]

        console.log(node)
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if (type === 'copy') {
        copyClip(event.target.textContent)
        alert('Цвет скопирован в буфер обмена!')
    }
})

function genRC() {

    const cCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += cCodes[Math.floor(Math.random() * cCodes.length)]
    }
    return "#" + color
}

function copyClip(text) { 
    return navigator.clipboard.writeText(text)
}


function setRandCol() {
    // const colors = []
    cols.forEach((col) => {
        const LockCheck = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const mainColor = chroma.random()  

        if (LockCheck) {
            return 
        }


        text.textContent = mainColor
        col.style.background = mainColor

    })
}

setRandCol()