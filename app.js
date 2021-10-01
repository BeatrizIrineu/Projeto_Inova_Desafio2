var images = ['https://servicodados.ibge.gov.br/api/v1/resize/image?maxwidth=600&maxheight=350600&caminho=biblioteca.ibge.gov.br/visualizacao/fotografias/GEBIS%20-%20RJ/MA9819.jpg',
'https://servicodados.ibge.gov.br/api/v1/resize/image?maxwidth=600&maxheight=350&caminho=biblioteca.ibge.gov.br/visualizacao/fotografias/GEBIS%20-%20RJ/MA9966.jpg',
'https://servicodados.ibge.gov.br/api/v1/resize/image?maxwidth=600&maxheight=350&caminho=biblioteca.ibge.gov.br/visualizacao/fotografias/GEBIS%20-%20RJ/MA9993.jpg'];

let i =0
const tam = images.length -1

function slideShow() {
    document.getElementById("image").src=images[i];
    if(i < tam){
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideShow()" , 2000);
}

window.onload = slideShow;