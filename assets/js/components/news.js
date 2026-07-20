class NewsSection extends HTMLElement {


connectedCallback(){


const noticias=[


{

imagen:"assets/img/noticias/noticia1.jpg",

categoria:"Actualidad",

titulo:"CineramaTV inicia transmisiones online",

texto:"Nueva plataforma digital de televisión en vivo.",

fecha:"Julio 2026"

},



{

imagen:"assets/img/noticias/noticia2.jpg",

categoria:"Tecnología",

titulo:"Nueva infraestructura de streaming",

texto:"Nuestro sistema utiliza vMix y Owncast.",

fecha:"Julio 2026"

},



{

imagen:"assets/img/noticias/noticia3.jpg",

categoria:"Comunidad",

titulo:"CineramaTV llega a más usuarios",

texto:"Una nueva forma de disfrutar televisión.",

fecha:"Julio 2026"

}



];



this.innerHTML=`


<section class="news-section">


<div class="container">


<div class="news-title">


<h2>

Últimas Noticias

</h2>


<p>

Información y novedades de CineramaTV

</p>


</div>



<div class="news-grid">



${noticias.map(noticia=>`



<article class="news-card">


<img

src="${noticia.imagen}"

class="news-image"

alt="${noticia.titulo}"

>



<div class="news-content">


<span class="news-category">

${noticia.categoria}

</span>



<h3>

${noticia.titulo}

</h3>



<p>

${noticia.texto}

</p>



<div class="news-date">


<i class="fa-solid fa-calendar"></i>

${noticia.fecha}


</div>



</div>


</article>



`).join("")}



</div>


</div>


</section>


`;

}


}


customElements.define(

"news-section",

NewsSection

);