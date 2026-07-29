class FooterComponent extends HTMLElement{


connectedCallback(){


this.innerHTML=`


<footer class="footer">


<div class="container">



<div class="footer-grid">



<!-- INFORMACION -->


<div>


<div class="footer-logo">


<div class="footer-logo-icon">


<i class="fa-solid fa-play"></i>


</div>


<div>


<h3>

CineramaTV

</h3>


<span>

LIVE

</span>


</div>


</div>



<p>

Plataforma digital de transmisión en vivo.
Contenido, noticias y entretenimiento desde Bolivia.

</p>


</div>





<!-- MENU -->


<div>


<h3>

Enlaces

</h3>


<ul class="footer-links">


<li>

<a href="./">
Inicio
</a>

</li>


<li>

<a href="https://www.facebook.com/profile.php?id=61563319227532"
target="_blank"
rel="noopener noreferrer">
Noticias
</a>

</li>


<li>

<a href="https://wa.me/59170662404"
target="_blank"
rel="noopener noreferrer">
Contactos
</a>

</li>


</ul>


</div>





<!-- REDES -->


<div>


<h3>

Síguenos

</h3>


<div class="social-links">


<a href="https://www.facebook.com/profile.php?id=61563319227532"
target="_blank"
rel="noopener noreferrer"
aria-label="Facebook">

<i class="fa-brands fa-facebook"></i>

</a>



<a href="https://www.tiktok.com/@cineramatv11.4?is_from_webapp=1&amp;sender_device=pc"
target="_blank"
rel="noopener noreferrer"
aria-label="TikTok">

<i class="fa-brands fa-tiktok"></i>

</a>



<a href="https://youtube.com/@cineramatv.multimedia?si=LN5MvPlts7qeIAM1"
target="_blank"
rel="noopener noreferrer"
aria-label="YouTube">

<i class="fa-brands fa-youtube"></i>

</a>




<a href="https://www.instagram.com/cineramatv/"
target="_blank"
rel="noopener noreferrer"
aria-label="Instagram">

<i class="fa-brands fa-instagram"></i>

</a>



</div>


</div>



</div>




<div class="footer-bottom">


© 2026 CineramaTV Live

<br>

Todos los derechos reservados.


</div>



</div>


</footer>


`;

}


}


customElements.define(

"site-footer",

FooterComponent

);
