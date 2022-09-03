function showHero(e) {
    e.preventDefault()
    let img = document.createElement("img")
    let nome = document.getElementById("nome").value.toLowerCase()

    let Universo = document.getElementById("Universo").value

    let Rep = document.getElementById("Rep").value
    console.log(Rep)
    let Dibas = document.getElementById("Dibas")

    for (i = 0; i < Rep; i++) {
        // console.log(nome)
        // console.log(Universo)
        // Dibas.innerHTML += nome
        if (Universo == "dc") {
   
            if (nome == "batman") {
            img.src="img/batman.gif"
            console.log(img)
            Dibas.appendChild(img.cloneNode(true))
             Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            
            
            }
            if (nome == "flash") { 
                img.src="img/flash.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
            if (nome == "lanterna") {
                Dibas.innerHTML += nome
            }
            if (nome == "superman") {
                img.src="img/superman.gif"
            console.log(img)
            Dibas.appendChild(img.cloneNode(true))
             Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
            if (nome == "rorschach") {
                img.src="img/ror.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
           
        }
        
        else if (Universo == "marvel") {
            if (nome == "thor") { 
                img.src="img/thor.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
            if (nome == "hulk") {
                img.src="img/hulk.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
            if (nome == "miranha") {
                img.src="img/Miranha.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
                
            }
            if (nome == "deadpool") {
                img.src="img/deadpool.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
            if (nome == "pantera") {
                img.src="img/pantera.gif"
                console.log(img)
                Dibas.appendChild(img.cloneNode(true))
                 Dibas.innerHTML +=`<p class='nomeHeroi'>${nome}</p>`
            }
           
        }
        
        else{
            
            
        }
    }

}