var game = true
var um = document.querySelector('.um');
var dois = document.querySelector('.dois');
var tres = document.querySelector('.tres');
var quatro = document.querySelector('.quatro');
var cinco = document.querySelector('.cinco');
var seis = document.querySelector('.seis');
var sete = document.querySelector('.sete');
var oito = document.querySelector('.oito');
var nove = document.querySelector('.nove');
var Linha = document.querySelector('img').style;

var v = "X"

function cli(a){
    if (game){
            switch (a){
        case 1:
            um.innerHTML = v;
            break;
        case 2:
            dois.innerHTML = v;
            break;
        case 3:
            tres.innerHTML = v;
            break;
        case 4:
            quatro.innerHTML = v;
            break;
        case 5:
            cinco.innerHTML = v;
            break;
        case 6:
            seis.innerHTML = v;
            break;
        case 7:
            sete.innerHTML = v;
            break;
        case 8:
            oito.innerHTML = v;
            break;
        case 9:
            nove.innerHTML = v;
            break;
    }
    verificar();  
    }
    
}

function voz(a){
    if (a == 'X'){
        var audio = new Audio('x.mp3');
        audio.play();
    }else{
        var audio = new Audio('o.mp3');
        audio.play();
    }
}
    
function verificar(){ 
    if (um.textContent == dois.textContent && dois.textContent == tres.textContent){
        if (um.textContent == "X" || um.textContent == "O"){
            Linha.display = 'grid'
            Linha.top = '80px' 
            game = false
            voz(um.textContent)
        }
    }
    if(quatro.textContent == cinco.textContent && cinco.textContent == seis.textContent){
        if (quatro.textContent == "X" || quatro.textContent == "O"){
            Linha.display = 'grid'
            Linha.top = '290px'
            game = false
            voz(quatro.textContent)
        }
    }
    if (sete.textContent == oito.textContent && sete.textContent == nove.textContent){
        if (sete.textContent == "X" || sete.textContent == "O"){
            Linha.display = 'grid'
            Linha.top = '480px'
            game = false
            voz(sete.textContent)
        }
    }
    if (um.textContent == quatro.textContent && quatro.textContent == sete.textContent){
        if (quatro.textContent == "X" || quatro.textContent == "O"){
            Linha.display = 'grid';
            Linha.top = '280px';
            Linha.transform = 'rotate(90deg)';
            Linha.right = '200px'
            game = false
            voz(quatro.textContent)
        }
    }
    if (dois.textContent == cinco.textContent && cinco.textContent == oito.textContent){
        if (dois.textContent == "X" || oito.textContent == "O"){
            Linha.display = 'grid';
            Linha.top = '280px';
            Linha.transform = 'rotate(90deg)';
            Linha.right = '15px'
            game = false
            voz(dois.textContent)
        }
    }
    if (tres.textContent == seis.textContent && seis.textContent == nove.textContent){
        if (tres.textContent == "X" || tres.textContent == "O"){
            Linha.display = 'grid';
            Linha.top = '280px';
            Linha.transform = 'rotate(90deg)';
            Linha.right = '-190px'
            game = false
            voz(tres.textContent)
        }
    }
    if (um.textContent == cinco.textContent && cinco.textContent == nove.textContent){
        if (um.textContent == "X" || nove.textContent == "O"){
            Linha.display = 'grid';
            Linha.top = '280px';
            Linha.transform = 'rotate(45deg)';
            game = false
            voz(um.textContent)
        }
    }
    if (tres.textContent == cinco.textContent && cinco.textContent == sete.textContent){
        if (tres.textContent == "X" || tres.textContent == "O"){
            Linha.display = 'grid';
            Linha.top = '280px';
            Linha.transform = 'rotate(135deg)';
            game = false
            voz(tres.textContent)
        }
    }
    v = (v == "X") ? "O" : "X";
}