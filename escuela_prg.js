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
})