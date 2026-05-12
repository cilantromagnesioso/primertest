const selector = document.getElementById("sk_ejercicio");

selector.addEventListener("change",function() {
    const selector_valor = this.value;
    if (selector_valor == "z") {
        document.getElementById("ejercicio_s").innerHTML = `<h1>Sotano de la prepa</h1>
            <p>En esta seccion estaran mis ejercicios de la escuela</p>`
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
        </form>`
    }
})