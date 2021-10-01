var images = ['https://www.essemundoenosso.com.br/wp-content/uploads/2017/06/festa-junina-de-sao-luis-6-740x493.jpg.webp',
'https://www.essemundoenosso.com.br/wp-content/uploads/2017/06/festa-junina-de-sao-luis-10-740x493.jpg.webp',
'https://www.essemundoenosso.com.br/wp-content/uploads/2017/06/festa-junina-de-sao-luis-7-740x493.jpg.webp',
'https://www.essemundoenosso.com.br/wp-content/uploads/2017/06/festa-junina-de-sao-luis-8-740x493.jpg.webp'];

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