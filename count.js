const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "10 oct 2024"

function Count(){
    const DataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (DataLancamento - hoje)/1000;
    const diatotal = Math.floor(segtotal / 60 / 60 / 24); 
    const horatotal = Math.floor(segtotal / 60 / 60) % 24;
    const minutotal = Math.floor(segtotal / 60 ) % 60;
    const segundototal = Math.floor(segtotal) % 60;

    dia.innerHTML = diatotal
    hora.innerHTML = fomatotempo(horatotal)
    minuto.innerHTML = fomatotempo(minutotal)
    segundo.innerHTML = fomatotempo(segundototal)
}

function fomatotempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}
Count();
setInterval(Count, 1000)