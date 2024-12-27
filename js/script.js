const buttons = document.querySelectorAll("#imagem-picker li")
const image = document.querySelector("#produto-imagem")

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        e.preventDefault()
        buttons.forEach((btn) =>{
           btn.querySelector(".color").classList.remove("selected") 
        })
        const button = e.currentTarget
        const id = button.getAttribute("id")
        
        button.querySelector(".color").classList.add("selected")
        image.classList.add("changing")
        image.setAttribute("src", `img/iphone_${id}.png`)
        setTimeout(() =>{
            image.classList.toggle("changing")
        }, 400)
    })
})

