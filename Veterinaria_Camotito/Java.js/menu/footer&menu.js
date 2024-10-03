var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "Estilo.css/menu.css";
link.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(link);


const header = document.querySelector("header");
const footer = document.querySelector("footer");


header.innerHTML =
`
            <div class="container-titulo-imagen">
                <section class="container-principal">
                    <div class="imagen">
                        <img src="Imagenes/Logotipo.png" alt="Logotipo"> 
                    </div>  
                    <div class="titulo">
                        <a class="nombre" href="#"><h1>Veterinaria Camotito</h1></a>
                    </div>
                </section>
            </div>
            <nav class="menu">
            <section class="menu-container">    
                <ul id="links-menu"> 
                    <li class="menu-item"><a class="menu-link" href="pgPrincipal.html">Inicio</a></li>
                    <li class="menu-item"><a class="menu-link" href="pgVentas.html">Ventas</a></li>
                    <li class="menu-item"><a class="menu-link" href="pgServicio.html">Servicios</a></li>
                    <li class="menu-item"><a class="menu-link" href="pgSedes.html">Sedes</a></li>
                    <li class="menu-item"><a class="menu-link" href="pgQuienesSomos.html">¿Quienes somos?</a></li>
                </ul>
                <div class="container-buscador">
                    <input type="text" class="buscar-texto"    placeholder="Buscar">
                    <button><a class="menu-link" href="pgVentas.html">Buscar</a></button>
                </div>
            </section>
            <nav>
`;

footer.innerHTML = 
`
            <div class="contenedor-footer">
                <div class="parte-izq">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolor vero dicta nostrum enim ipsa possimus voluptatum dolorum. Expedita porro error ex fugiat recusandae provident iste odit. Nesciunt, ipsam nisi.</p>
                </div>
                <div class="parte-drcha">
                    <div class="logotipo">
                        <img src="Imagenes/Logotipo.png" alt="">
                    </div>
                    <div class="logos-y-title">
                        <div class="title">
                            <h3>Redes Sociales</h3>  
                        </div>
                        <div class="logos">
                            <img src="Imagenes/logo-facebook.jpg" alt="" class="logo">
                            <img src="Imagenes/logo-twitter.png" alt="" class="logo">
                            <img src="Imagenes/logo-youtube.png" alt="" class="logo">
                        </div>
                    </div>  
                </div>
            </div>

`;

    