class ContactSection extends HTMLElement{


connectedCallback(){


this.innerHTML=`


<section class="contact-section">


<div class="container">


<div class="contact-title">


<h2>

Contactos

</h2>


<p>

Comunícate con CineramaTV

</p>


</div>



<div class="contact-grid">



<div class="contact-card">


<h3>

CineramaTV Live

</h3>


<br>



<div class="contact-item">

<i class="fa-solid fa-location-dot"></i>

<span>

La Paz - Bolivia

</span>

</div>




<div class="contact-item">

<i class="fa-brands fa-whatsapp"></i>

<span>

WhatsApp:
+591 XXXXXXXX

</span>

</div>





<div class="contact-item">

<i class="fa-solid fa-envelope"></i>

<span>

contacto@cineramatv.com

</span>

</div>




<div class="contact-item">

<i class="fa-solid fa-globe"></i>

<span>

www.cineramatv.com

</span>

</div>




</div>





<div class="contact-card contact-form">


<h3>

Envíanos un mensaje

</h3>


<br>


<form>


<input

type="text"

placeholder="Nombre"



>



<input

type="email"

placeholder="Correo"



>



<textarea

placeholder="Mensaje">

</textarea>




<button class="btn btn-primary">

Enviar mensaje

</button>



</form>



</div>



</div>



</div>


</section>


`;

}


}



customElements.define(

"contact-section",

ContactSection

);