/*================== CAMBIO DE COLOR (INICIO) =================*/

let bgActual = ["primario", "secundario", "terciario"];

function cambio(color, cambio) {
    let btns = document.querySelectorAll(`.btn-${color}`);
    let fondos = document.querySelectorAll(`.col-${color}`);
    let campos = document.querySelectorAll(`.cap-${color}`);

    btns.forEach(btn => {
        btn.classList.remove(`btn-${color}`);
        btn.classList.add(`btn-${cambio}`);
    });
    fondos.forEach(col => {
        col.classList.remove(`col-${color}`);
        col.classList.add(`col-${cambio}`);
    });
    campos.forEach(cap => {
        cap.classList.remove(`cap-${color}`);
        cap.classList.add(`cap-${cambio}`);
    });
}

document.getElementById("btnCambioColor").onclick = () => {
    let noColor = true;
    for (let i = 0; i < bgActual.length && noColor; i++) {
        let color = document.querySelector(`.col-${bgActual[i]}`);
        if (color != null) {
            noColor = false;
            if (i == (bgActual.length - 1)) {
                cambio(bgActual[i], bgActual[0]);
            } else {
                cambio(bgActual[i], bgActual[i + 1]);
            }
        }
    }
};

/*================== CAMBIO DE COLOR (FINAL) =================*/

/*===============================================================*/

/*================== CREAR MODALES (INICIO) =================*/

function cerrarModalAlerta() {
    let modal = document.getElementById('modalAlertas');
    window.onclick = event => {
        if (event.target == modal) {
            modal.remove();
        }
    }

    document.querySelector('.cerrar-modal').onclick = () => {
        modal.remove();
    };
}

function modalAlerta(titulo, contenido) {
    let body = document.getElementById('body');
    let modal = document.createElement('div');
    modal.id = 'modalAlertas';
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="contenedor_modal radio shadow">
            <div class="titulo-modal">
                <h2 class="titulo-modal-txt">${titulo}</h2>
                <button class="cerrar-modal shadow">x</button>
            </div>
            ${contenido}

        </div>
    `;
    body.appendChild(modal);
    cerrarModalAlerta();
}

/*================== CREAR MODALES (FINAL) =================*/

/*===============================================================*/

/*================== CHECK DE CALIFICACIÓN (INICIO) =================*/

let radios = ['califMuyMal', 'califMal', 'califNormal', 'califBien', 'califMuyBien'];
let imgCalificacion = "CaraMuyBien.JPG";

function check(check, arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`${arr[i]}Lbl`).classList.remove('imgCheck');
    }
    document.getElementById(`${check}Lbl`).classList.add('imgCheck');

    if (check == "califMuyBien") {
        imgCalificacion = "CaraMuyBien.JPG";
    } else if (check == "califBien") {
        imgCalificacion = "CaraBien.JPG";
    } else if (check == "califNormal") {
        imgCalificacion = "CaraNormal.JPG";
    } else if (check == "califMal") {
        imgCalificacion = "CaraMal.JPG";
    } else if (check == "califMuyMal") {
        imgCalificacion = "CaraMuyMal.JPG";
    }
}

for (let x = 0; x < radios.length; x++) {
    document.getElementById(radios[x]).onclick = () => {
        check(radios[x], radios);
    };
}

/*================== CHECK DE CALIFICACIÓN (FINAL) =================*/

/*===============================================================*/

/*================== CARGAR LISTA (INICIO) =================*/

function cargarLista(list) {
    document.getElementById("lista2").innerHTML = ``;
    let selectListArtistas = document.getElementById("lista1");
    selectListArtistas.innerHTML = ``;
    list.forEach(artista => {
        let opt = document.createElement("option");
        opt.value = artista.getNombre();
        opt.textContent = artista.getNombre();
        selectListArtistas.appendChild(opt);
    });
}

/*================== CARGAR LISTA (FINAL) =================*/

/*===============================================================*/

/*================== REGISTRO ARTISTA (INICIO) =================*/

let listArtistas = [];

function validarRegistroArtista(nombre, edad, estilo) {
    let msg = "";
    let alera = false;
    if (nombre == "") {
        msg += `<p class="alerta">El nombre es obligatorio</p>`;
        alera = true;
    }
    if (edad == "") {
        msg += `<p class="alerta">La edad es obligatoria</p>`;
        alera = true;
    } else if (edad < 18) {
        msg += `<p class="alerta">Tiene que ser mayor de edad</p>`;
        alera = true;
    } else if (edad > 120) {
        msg += `<p class="alerta">Exeso de edad</p>`;
        alera = true;
    }
    if (estilo == "") {
        msg += `<p class="alerta">El estilo es obligatorio</p>`;
        alera = true;
    }

    if (alera) {
        modalAlerta("¡Advertencia!", msg);
    } else {
        return true;
    }
}

function registroArtista() {
    let nombre = document.getElementById('nombreArtista');
    let edad = document.getElementById('edadArtista');
    let estilo = document.getElementById('estiloArstista');
    if (validarRegistroArtista(nombre.value, edad.value, estilo.value)) {
        let artista = new Artista(nombre.value, edad.value, estilo.value);
        listArtistas.push(artista);

        nombre.value = "";
        edad.value = "";
        estilo.value = "";
        cargarLista(listArtistas);
    }
}

document.getElementById('btnRegistroArtista').onclick = (event) => {
    event.preventDefault();
    registroArtista();
}

/*================== REGISTRO ARTISTA (FINAL) =================*/

/*===============================================================*/

/*================== LISTAS DE ARTISTAS SELECIONADOS (INICIO) =================*/

let lista1 = document.getElementById('lista1');
let lista2 = document.getElementById('lista2');

function pasajeArtistasListas(listaA, listaB) {
    for (let i = 0; i < listaA.options.length; i++) {
        let opt = listaA.options[i];
        if (opt.selected == true) {
            listaB.appendChild(opt);
        }
    }
}

document.getElementById('btnPaseDerecho').onclick = () => {
    pasajeArtistasListas(lista1, lista2);
};

document.getElementById('btnPaseIzquierdo').onclick = () => {
    pasajeArtistasListas(lista2, lista1);
};

/*================== LISTAS DE ARTISTAS SELECIONADOS (FINAL) =================*/

/*===============================================================*/

/*================== RECORRER LISTA DE ARTISTAS SELECIONADOS (INICIO) =================*/

function recorrerListaArtistasSelecionados() {
    let arrArtistas = [];
    let select = document.getElementById('lista2');
    // RECORRE LOS OPTION EN EL SELECT MIENTRA LOS COMPARA CON LOS ARTISTAS EN EL AREGLO "listArtistas" (INICIO)
    for (let i = 0; i < select.options.length; i++) {
        listArtistas.forEach(artista => {
            if (artista.getNombre() == select.options[i].value) {
                arrArtistas.push(artista);
            }
        });
    }
    // RECORRE LOS OPTION EN EL SELECT MIENTRA LOS COMPARA CON LOS ARTISTAS EN EL AREGLO "listArtistas" (FINAL)
    return arrArtistas;
}

/*================== RECORRER LISTA DE ARTISTAS SELECIONADOS (FINAL) =================*/

/*===============================================================*/

/*================== REGISTRO EXPOSICIÓN (INICIO) =================*/

let listExposiciones = [];

function validarRegistroExposicion(titulo, fecha, descripcion, artistas) {
    let msg = "";
    let alera = false;
    if (titulo == "") {
        msg += `<p class="alerta">El titulo es obligatorio</p>`;
        alera = true;
    }
    if (fecha == "") {
        msg += `<p class="alerta">La fecha es obligatoria</p>`;
        alera = true;
    }
    if (descripcion == "") {
        msg += `<p class="alerta">La descripcion es obligatoria</p>`;
        alera = true;
    }
    if (artistas.length == 0) {
        msg += `<p class="alerta">Seleccione los artistas de la exposición</p>`;
        alera = true;
    }

    if (alera) {
        modalAlerta("¡Advertencia!", msg);
    } else {
        return true;
    }
}

function registroExposicion() {
    let titulo = document.getElementById('formTitl');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descrip');
    let arrArtistas = recorrerListaArtistasSelecionados();
    if (validarRegistroExposicion(titulo.value, fecha.value, descripcion.value, arrArtistas)) {
        let exposicion = new Exposicion(titulo.value, fecha.value, descripcion.value, arrArtistas);
        listExposiciones.push(exposicion);

        titulo.value = "";
        fecha.value = "";
        descripcion.value = "";
        for (let i = 0; i < lista2.options.length; i++) {
            let opt = lista2.options[i];
            lista1.appendChild(opt);
        }
    }
}

document.getElementById('btnRegistroExposicion').onclick = (event) => {
    event.preventDefault();
    registroExposicion();
};

/*================== REGISTRO EXPOSICIÓN (FINAL) =================*/

/*===============================================================*/

/*================== INFORMACIÓN DE EXPOSICIÓN (INICIO) =================*/
let comentarios = 2;

for (let i = 1; i <= comentarios; i++) {
    document.getElementById(`btnPruebaNro${i}`).onclick = () => {
        let msg = `
            <p><span class="des-expo">Fecha: </span>10/03/2024</p>
            <p><span class="des-expo">Descripción: </span>Emociones humanas con uso del color</p>
            <p><span class="des-expo">Artistas:</span></p>
            <table class="tableExposicion">
                <thead>
                    <tr>
                        <td class="tab-head">Nombre</td>
                        <td class="tab-head">Edad</td>
                        <td class="tab-head">Estilo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="br-none">Camila Gonzalez</td>
                        <td class="br-none">27</td>
                        <td class="br-none">Abstracto</td>
                    </tr>
                    <tr>
                        <td class="br-none">Mateo Ruiz</td>
                        <td class="br-none">34</td>
                        <td class="br-none">Impresionismo</td>
                    </tr>
                    <tr>
                        <td class="br-none">Sofia Valenzuela</td>
                        <td class="br-none">29</td>
                        <td class="br-none">Realizmo</td>
                    </tr>
                </tbody>
            </table>
        `;
        modalAlerta('Información de la Exposición', msg);
    };
}

/*================== INFORMACIÓN DE EXPOSICIÓN (FINAL) =================*/

