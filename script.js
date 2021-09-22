var animes = ["https://img1.ak.crunchyroll.com/i/spire4/6d3bd07ec5e5d3e3f3a5f35e50f50dec1628229684_full.jpg", "https://img1.ak.crunchyroll.com/i/spire2/7bfd25202378b53c766c785afb2f13f71629162301_full.jpg", "https://img1.ak.crunchyroll.com/i/spire1/f89ff2b249341673453f22128a1902b41625289265_full.jpg", "https://img1.ak.crunchyroll.com/i/spire2/0a42e961f8a9bc91c76b801b676aacad1601564805_full.jpg", "https://img1.ak.crunchyroll.com/i/spire3/13e61e24687bf44a27b00eb0fc492fd41618007137_full.jpg", "https://img1.ak.crunchyroll.com/i/spire3/75317df259a576c74ea9af92ff38ee7f1626143663_full.jpg", "https://img1.ak.crunchyroll.com/i/spire4/81ba04142373eed44f7e0c2f278b17361626143500_full.jpg", "https://img1.ak.crunchyroll.com/i/spire3/1f4453ef45efd68336de1e008366600b1618987477_full.jpg"]

exibirAnimes()

function exibirAnimes(){
    var exibirAnimes = document.querySelector("#animes")
    exibirAnimes.innerHTML = ""
    for(i = 0; i < animes.length; i++){
        exibirAnimes.innerHTML += `<img src = ${animes[i]} >`
    }
}

function adicionar(){
    var novoAnime = document.querySelector("#urlAnime").value


    if (animes.indexOf(novoAnime) != -1){
        alert("Já adicionado")
    }else{
        animes.push(novoAnime)
    }
    exibirAnimes()
}