const selector = document.getElementById("sk_ejercicio");

selector.addEventListener("change",function() {
    const selector_valor = this.value;
    if (selector_valor == "z") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Sotano de la prepa</h1>
            <p>En esta seccion estaran mis ejercicios de la escuela, usa el selector de arriba para ver los ejercicios</p>`;
    }
    if (selector_valor == "a") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Hola salon de programacion</h1>
            <h2>Hola, a las 5 nos vamos</h2>
            <h3>texto en h3</h3>
            <p>Esta es mi pagina web</p>`;
    }
    if (selector_valor == "b") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Formulario de ejemplo</h1>
            <h2>Texto con h2</h2>
            <h3>Texto con h3, texto mas pequeño</h3>
            <form>
                <!--caja de texto-->
                <label>Nombre del estudiante reprobado:</label>
                <input type="text" name="nombreestudiante">
                <br><br>

                <label>Edad del estudiante:</label>
                <input type="number" name="edad">
                <br><br>

                <label>Semestre actual:</label>
                <select name="semestre">
                    <option value="">seleccione</option>
                    <option value="1">1er semestre</option>
                    <option value="2">2do semestre</option>
                    <option value="3">3er semestre</option>
                    <option value="4">4to semestre</option>
                    <option value="5">5to semestre</option>
                    <option value="6">6to semestre</option>
                    <option value="7">7mo semestre</option>
                    <option value="8">8vo semestre</option>
                    <option value="9">9no semestre</option>
                    <option value="10">10mo semestre</option>
                </select>
                <br><br>

                <label>Turno:</label>
                <input type="radio" name="turno" value="matutino"> Matutino
                <input type="radio" name="turno" value="vespertino"> Vespertino
                <br><br>

                <label>Genero:</label>
                <input type="radio" name="genero" value="masculino"> Masculino
                <input type="radio" name="genero" value="femenino"> Femenino
                <br><br>

                <input type="submit" value="Enviar informacion">
            </form>`;
    }
    if (selector_valor == "c") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Formulario de alumno</h1>
            <form>
                <label>Nombre:</label>
                <input type="text" name="nombreestudiante">
                <br><br>

                <label>Apellido 1:</label>
                <input type="text" name="apellido1">
                <br><br>

                <label>Apellido 2:</label>
                <input type="text" name="apellido2">
                <br><br>

                <label>Fecha de nacimiento:</label>
                <input type="date" name="nacimiento">
                <br><br>

                <label>Calle:</label>
                <input type="text" name="calledom">
                <br><br>

                <label>Colonia:</label>
                <input type="text" name="coloniadom">
                <br><br>

                <label>Num. Exterior:</label>
                <input type="number" name="exteriordom">
                <br><br>

                <label>Tipo de sangre:</label>
                <select name="sangretip">
                    <option value="">seleccione</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">AB+</option>
                    <option value="6">AB-</option>
                    <option value="7">O+</option>
                    <option value="8">O-</option>
                </select>
                <br><br>

                <input type="submit" value="Enviar informacion">
            </form>`;
    }
    if (selector_valor == "d") {
        document.getElementById("ejercicio_s").innerHTML = `<img src="skul_a.jpg" alt="imagen de escuela" width="50%" height="50%">
            <h1>Formulario de alumno</h1>
            <form>
                <img src="skul_c.png" alt="alumno" width="3%" height="3%">
                <label>Nombre del alumno:</label>
                <input type="text" name="nombreestudiante">
                <br><br>

                <label>Apellido 1:</label>
                <input type="text" name="apellido1">
                <br><br>

                <label>Apellido 2:</label>
                <input type="text" name="apellido2">
                <br><br>

                <label>Fecha de nacimiento:</label>
                <input type="date" name="nacimiento">
                <br><br>

                <label>Calle:</label>
                <input type="text" name="calledom">
                <br><br>

                <label>Colonia:</label>
                <input type="text" name="coloniadom">
                <br><br>

                <label>Num. Exterior:</label>
                <input type="number" name="exteriordom">
                <br><br>

                <label>Tipo de sangre:</label>
                <img src="skul_b.jpg" alt="tipo de sangre" width="5%" height="5%">
                <select name="sangretip">
                    <option value="">seleccione</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">AB+</option>
                    <option value="6">AB-</option>
                    <option value="7">O+</option>
                    <option value="8">O-</option>
                </select>
                <br><br>

                <input type="submit" value="Enviar informacion">
            </form>`;
    }
    if (selector_valor == "e") {
        document.getElementById("ejercicio_s").innerHTML = `<img src="skul_a.jpg" alt="imagen de escuela" width="50%" height="50%">
            <hr>
            <h1>Formulario de alumno</h1>
            <form>
                <img src="skul_c.png" alt="alumno" width="3%" height="3%">
                <label>Nombre del alumno:</label>
                <input type="text" name="nombreestudiante">
                <br><br>

                <label>Estudiante regular:</label>
                <input type="checkbox" name="regular">
                <br><br>

                <label>Edad del estudiante:</label>
                <input type="number" name="edad">
                <br><br>

                <label>Fecha de nacimiento:</label>
                <input type="date" name="nacimiento">
                <br><br>

                <label>Tipo de sangre:</label>
                <img src="skul_b.jpg" alt="tipo de sangre" width="5%" height="5%">
                <select name="sangretip">
                    <option value="">seleccione</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">AB+</option>
                    <option value="6">AB-</option>
                    <option value="7">O+</option>
                    <option value="8">O-</option>
                </select>
                <br><br>

                <label>Turno:</label>
                <input type="radio" name="turno" value="m"> Matutino
                <input type="radio" name="turno" value="v"> Vespertino
                <input type="radio" name="turno" value="n"> Nocturno
                <br><br>

                <label>Genero:</label>
                <input type="radio" name="genero" value="masculino"> Masculino
                <input type="radio" name="genero" value="femenino"> Femenino
                <br><br>

                <input type="submit" value="Enviar informacion">
            </form>`;
    }
    if (selector_valor == "f") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Informacion de empleado</h1>
            <form>
                <label>Nombres:</label>
                <input type="text" name="nombre_dom">
                <br><br>
                <label>Apellidos:</label>
                <input type="text" name="apelli_dom">
                <br><br>
                <label>Fecha de nacimiento:</label>
                <input type="date" name="fecha_s">
                <br><br>
                <label>Telefono:</label>
                <input type="tel" name="telefon_s">
                <br><br>
                <label>Correo:</label>
                <input type="text" name="Correo_dom">
                <br><br>
                <label>Calle:</label>
                <input type="text" name="calle_dom">
                <br><br>
                <label>Numero exterior:</label>
                <input type="number" name="num_ex">
                <br><br>
                <label>Colonia:</label>
                <input type="text" name="col_dom">
                <br><br>
                <label>Codigo postal:</label>
                <input type="number" name="cod_dom">
                <br><br>
                <label>Genero:</label>
                <input type="radio" name="genero" value="masculino"> Masculino
                <input type="radio" name="genero" value="femenino"> Femenino
                <br><br>
                <label>Empleado activo:</label>
                <input type="checkbox" name="muri_S">
                <br><br>
                <input type="submit" value="Enviar informacion">
            </form>`;
    } 
    if (selector_valor == "g") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Durango</h1>
            <h2>Caldillo duranguense</h2>
            <img src="skul_d.jpg" class="img1skul">
            <p>El caldillo duranguense es un emblemático platillo del norte de México, originario del estado de Durango. Consiste en un caldo sustancioso hecho a base de carne de res (fresca o seca), jitomate, cebolla, ajo, comino y el toque característico de chiles poblanos o "chiles pasados" (chiles chilacas secos).</p>
            <br>
            <h2>Flora y fauna</h2>
            <img src="skul_e.jpg" class="img1skul">
            <p>- Zonas áridas y semidesérticas: Abundan especies xerófilas como nopales, agaves (sotol), matorrales espinosos y diversos tipos de cactus.</p>
            <p>- Mamíferos: Oso negro (cuya población se ha recuperado en años recientes), lobo mexicano, puma, lince rojo, venado cola blanca, coyote, coatí y mapache.</p>
            <p>- Aves: Águila real, águila pescadora y cabeza blanca, guajolote salvaje, halcón peregrino, y el pato tepalcate.</p>
            <br>
            <h2>Plaza de armas</h2>
            <img src="skul_f.jpg" class="img1skul">
            <p>La Plaza de Armas es el epicentro social y cultural del Centro Histórico de Durango. Ubicada frente a la Catedral Basílica Menor, funciona como un punto de reunión tradicional donde locales y visitantes disfrutan de la música en vivo, el descanso bajo sus árboles y la arquitectura colonial de la zona.</p>
            <p> Es muy común encontrar músicos y tríos tocando serenatas tradicionales al caer la tarde, además de una amplia oferta de cafeterías y restaurantes en sus alrededores.</p>
            <br>`;
    } 
    if (selector_valor == "h") {
        document.getElementById("ejercicio_s").innerHTML = `<div class="body_s">
                <h1>Bienvenido a mi sitio web</h1>
                <p>Aqui vemos los trabajos realizados por mi en el tercer parcial:</p>
                <p>Selecciona una pagina:</p>
                <ul>
                    <li><a href="ejercicio1.html">Pagina 1</a></li>
                    <li><a href="ejercicio2.html">Pagina 2</a></li>
                    <li><a href="ejercicio3.html">Pagina 3</a></li>
                    <li><a href="ejercicio4.html">Pagina 4</a></li>
                    <li><a href="ejercicio5.html">Pagina 5</a></li>
                    <li><a href="ejercicio6.html">Pagina 6</a></li>
                </ul>
                <nav class="nav_s">
                    <a href="index.html">Inicio</a> |
                    <a href="info.html">informacion de pagina</a> |
                    <a href="contacto.html">contacto</a>
                </nav>
            </div>`;
    }
    if (selector_valor == "i") {
        document.getElementById("ejercicio_s").innerHTML = `<div class="body_s">
                <h1 class="sombra_s">Durango</h1>
                <p>El estado de Durango se ubica en el noroeste de México. Su capital es Victoria de Durango, fundada en 1563, famosa por su historia minera y su gran legado cinematográfico. El territorio destaca por sus impresionantes paisajes de la Sierra Madre y su arquitectura colonial.</p>
                <p class="pcolor_s">Población: ~1.8 millones de habitantes en el estado; cerca de 660,000 en su capital.</p>
                <div class="nota">
                    <h2 id="celeskul">Celebracion:</h2>
                    <p>Feria Nacional de Durango (FENADU): Se celebra durante el mes de julio para conmemorar el aniversario de la fundación de la ciudad (el 4 de julio). Es la fiesta más grande del estado e incluye palenques, conciertos de artistas nacionales, exposiciones ganaderas, muestras gastronómicas y juegos mecánicos.</p>
                </div>
                <br>
                <div class="nota">
                    <h2>Turismo:</h2>
                    <p>Sierra Madre Occidental: Ideal para el turismo de aventura, ecoturismo y senderismo, ofreciendo paisajes boscosos y cascadas espectaculares.</p>
                </div>
            </div>`;
    }
    if (selector_valor == "j") {
        document.getElementById("ejercicio_s").innerHTML = `<div class="body_s">
                <h1>Escudo de Durango</h1>
                <a href="https://www.durango.gob.mx/">
                    <img src="skul_g.png" alt="escudo de durango" class="periodico_s">
                </a>
                <p id="outline_s">El escudo de armas de Durango está inspirado en el de la provincia vasca de Vizcaya, España, fue otorgado en 1621 por el rey de España Felipe IV al conceder el título de ciudad a la Villa de Durango, está inspirado en el que fue escudo de armas desde el siglo XV hasta el XIX de la provincia de Vizcaya en España.</p>
                <p>En la parte interior posee los siguientes elementos: un árbol de roble de color café con follaje abundante en un vivo color verde, dos lobos en actitud de atacar o correr, dos ramas de palma color verde a manera de guirnalda en ambos lados del escudo, mismas que van enlazadas por sus tallos con un moño de color rojo en la parte inferior. Todo lo anterior está enmarcado en un armazón color bronce, con una corona real de color amarillo oro en la parte superior, la cual está adornada con piedras azules en sus arcos verticales y piedras en formas de rombo incrustradas en su base, alternadas en rojo y azul; al interior de la corona se encuentra un forro rojo vivo, la parte alta de la corona se remata con una esfera que representa el globo terráqueo y al final, una cruz latina refleja la colonia Española, y juntos simbolizan indudablemente la fe católica en el mundo.</p>
                <p>Como detalles específicos, se tiene el campo de plata que significa la lealtad, pureza e integridad de todo los pobladores, al mantenerse unidos como hermanos. El roble simboliza buenas vibras y energías en el campo de batalla para lograr una gran victoria. Los lobos son símbolo de señorío y sus presas representan el botín de las guerras.</p>
                <p>El fondo azul inmortaliza el cielo de Durango y simboliza pureza e integridad. El marco del escudo es símbolo de protección y valor en la lucha, por ultimo, la palma y el laurel son señal de una gran victoria, gloria y honor.</p>
            </div>`;
    }
    if (selector_valor == "k") {
        document.getElementById("ejercicio_s").innerHTML = `<div class="body_s">
                <header>
                    <h1>Noticias de Durango</h1>
                </header>
                <main>
                    <section>
                        <h2>Noticia reciente</h2>
                        <article>
                            <h3>Abril de 2026, el más caluroso en México desde 1953; Durango concentró los mayores contrastes</h3>
                            <div class="columnas_s">
                                <div class="columna_s">
                                    <p> <mark> Abril de 2026 se convirtió en el más cálido registrado en México desde 1953, año en que comenzaron a realizarse mediciones más precisas de temperatura. </mark> Además, Durango destacó a nivel nacional al registrar los dos contrastes térmicos más extremos durante ese mes.</p>
                                    <p>Víctor Hugo Randeles, titular del Departamento de Meteorología e Hidrología de la Comisión Nacional del Agua (Conagua) en Durango, informó que, con base en datos del Servicio Meteorológico Nacional (SMN), la temperatura promedio nacional durante abril alcanzó los 23.8 grados centígrados.</p>
                                </div>
                                <div class="columna_s">
                                    <p>Este registro posiciona a abril de 2026 como el mes de abril más caluroso desde que existen mediciones precisas en el país. El antecedente más cercano ocurrió en 2020, cuando la temperatura promedio nacional fue de 23.7 grados centígrados.</p>
                                    <p>El promedio histórico de temperatura para un mes de abril en México es de 22.3 grados centígrados.</p>
                                    <p>Durante ese mismo mes también se presentaron dos fenómenos climáticos inusuales: una temperatura máxima y una mínima atípicas para abril.</p>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
                <footer>
                    <h4>26 de noviembre de 2026</h4>
                </footer>
            </div>`;
    }
    if (selector_valor == "l") {
        document.getElementById("ejercicio_s").innerHTML = `<div class="contenedor_s">
                <nav class="menu_s">
                    <h2 class="fix_s1">Menu</h2>
                    <a href="infoo.html" target="contenido_s">Inicio</a>
                    <a href="ejercicio11.html" target="contenido_s">Pagina 1</a>
                    <a href="ejercicio22.html" target="contenido_s">Pagina 2</a>
                    <a href="ejercicio33.html" target="contenido_s">Pagina 3</a>
                    <a href="ejercicio44.html" target="contenido_s">Pagina 4</a>
                    <a href="ejercicio55.html" target="contenido_s">Pagina 5</a>
                    <a href="ejercicio66.html" target="contenido_s">Pagina 6</a>
                </nav>
                <div class="contenido_s">
                    <iframe name="contenido_s" src="infoo.html"></iframe>
                </div>
            </div>`;
    }
})