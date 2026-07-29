class AdsSection extends HTMLElement {


connectedCallback(){


const publicidad=[


{

imagen:"assets/img/publicidad/banner1.jpg",

texto:"Publicidad Empresa 1"

},


{

imagen:"assets/img/publicidad/banner2.jpg",

texto:"Publicidad Empresa 2"

},


{

imagen:"assets/img/publicidad/banner3.jpg",

texto:"Publicidad Empresa 3"

}



];



this.innerHTML=`


<section class="ads-section">


<div class="container">



<div class="ads-title">


<h2>

Nuestros Auspiciadores

</h2>


<p>

Espacios publicitarios CineramaTV

</p>


</div>





<div class="ad-banner">


<video
autoplay
muted
loop
playsinline
preload="metadata"
aria-label="Publicidad CineramaTV">

<source
src="assets/video/video-banner-condor.webm"
type="video/webm">

<source
src="assets/video/video-banner-condor.mp4"
type="video/mp4">

</video>


</div>




<br><br>




<div class="ads-grid">



${publicidad.map(ad=>`


<div class="ad-card">


<img

src="${ad.imagen}"

alt="${ad.texto}"

>


<span>

${ad.texto}

</span>


</div>



`).join("")}



</div>



</div>


</section>


`;


}


}


customElements.define(

"ads-section",

AdsSection

);
