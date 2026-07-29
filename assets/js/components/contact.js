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




<a class="contact-item"
href="https://wa.me/59170662404"
target="_blank"
rel="noopener noreferrer">

<i class="fa-brands fa-whatsapp"></i>

<span>

WhatsApp:
+591 70662404

</span>

</a>





<a class="contact-item"
href="mailto:contacto@cineramatvbo.com">

<i class="fa-solid fa-envelope"></i>

<span>

contacto@cineramatvbo.com

</span>

</a>




<a class="contact-item"
href="https://www.cineramatvbo.com/"
target="_blank"
rel="noopener noreferrer">

<i class="fa-solid fa-globe"></i>

<span>

www.cineramatvbo.com

</span>

</a>




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
