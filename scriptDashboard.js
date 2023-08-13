document.addEventListener('click', (e) => {
    const sidebar = document.querySelectorAll('.texto')
    if (e.target.classList.contains('texto')){
        for (let i of sidebar){
            if(i.classList.contains('click')){
                i.classList.remove("click")
            }
        }
        e.target.classList.add('click')
    }
    if (e.target.hasAttribute('href')){
        e.preventDefault()
        return carregaPagina(e.target.getAttribute('href'))
    }
})

function carregaPagina(href){
    fetch(href)
    .then(response => {
        if (response.status !== 200){
            throw new Error('ERRO 404')
        }
        return response.text()
    })
    .then(html => carregaResultado(html))
}

function carregaResultado(html){
    const resultado = document.querySelector('.mainContent')
    resultado.innerHTML = html
}
