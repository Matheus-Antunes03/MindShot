let vidas = localStorage.getItem('lifes');
document.getElementById('lifesValue').textContent = vidas;
document.getElementById("escolher").onclick = function() {
    let numero = document.getElementById("campo").value;
    let resposta = Math.floor(Math.random() * 5) + 1;
    if(numero == resposta) {
        window.location.href = "../html/oitava.html";
    } else {
        let tiro = Math.floor(Math.random() * 2);
        if(tiro == 1){
            window.location.href = "../html/errou_tiro7.html"
            let vida = localStorage.getItem('lifes');
            vida --;
            localStorage.setItem('lifes', vida);
            if (vida == 0) {
                window.location.href = "../html/derrota.html"
            }
        } else{
            window.location.href = "../html/errou_sem_tiro7.html"
        }
    }
}