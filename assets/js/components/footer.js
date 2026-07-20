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

<a href="#">
Inicio
</a>

</li>


<li>

<a href="#">
Noticias
</a>

</li>


<li>

<a href="#">
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


<a href="#">

<i class="fa-brands fa-facebook"></i>

</a>



<a href="#">

<i class="fa-brands fa-youtube"></i>

</a>




<a href="#">

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