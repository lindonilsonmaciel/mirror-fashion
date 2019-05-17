var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner(){
    bannerAtual = (bannerAtual + 1)%2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);

/*
CÓDIGO PARA PARAR/CONTINUAR A MUDANÇA DAS IMAGENS

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

function pausar(){
    if(controle.className == 'pause'){
        clearInterval(timer);
        controle.className = 'play';
    }else{
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }
    return false;
};
*/