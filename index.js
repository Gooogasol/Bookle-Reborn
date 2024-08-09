function loadTemplate(nameTamplate, namePos) {
    fetch(nameTamplate)
        .then((res)=>res.text())
        .then((data)=>{
            document.querySelector(namePos).innerHTML = data
        })
}

window.addEventListener('load',()=>{
    loadTemplate('../template/head.hbs','head')
    loadTemplate('../template/header.hbs','header')
    loadTemplate('../template/footer.hbs','footer')
})

