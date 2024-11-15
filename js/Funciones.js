/*================== CARGAR EL DOM (INICIO) =================*/
window.addEventListener('load', inicio);
/*================== CARGAR EL DOM (FINAL) =================*/

/*===============================================================*/

/*================== DECLARAR SISTEMA Y INICIAR (INICIO) =================*/
let sistema = new Sistema();

let radios = ['caraMuyMal', 'caraMal', 'caraNormal', 'caraBien', 'caraMuyBien'];
let imgCalificacion = "caraMuyBien.JPG";

function inicio() {

    /*\ |*| COLORES |*| \*/
    let bgActual = ["primario", "secundario", "terciario"];
    document.getElementById('idBtnCambioColor').onclick = () => {
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
    /*\ |*| COLORES |*| \*/

    /*\ |*| CALIFICACIONES |*| \*/
    document.getElementById('caraMuyBien').checked = true;

    for (let x = 0; x < radios.length; x++) {
        document.getElementById(radios[x]).onclick = () => {
            check(radios[x], radios);
        };
    }
    /*\ |*| CALIFICACIONES |*| \*/

    /*\ |*| LISTAS DE ARTISTAS |*| \*/
    let lista1 = document.getElementById('idListaArtistasUno');
    let lista2 = document.getElementById('idListaArtistasDos');

    document.getElementById('idBtnPaseDerecho').onclick = () => {
        pasajeArtistasListas(lista1, lista2);
    };

    document.getElementById('idBtnPaseIzquierdo').onclick = () => {
        pasajeArtistasListas(lista2, lista1);
    };
    /*\ |*| LISTAS DE ARTISTAS |*| \*/

    /*\ |*| REGISTRO ARTISTA |*| \*/
    document.getElementById('idBtnRegistroArtista').onclick = (event) => {
        event.preventDefault();
        registroArtista();
    }
    /*\ |*| REGISTRO ARTISTA |*| \*/

    /*\ |*| REGISTRO EXPOSICION |*| \*/
    document.getElementById('idBtnRegistroExposicion').onclick = (event) => {
        event.preventDefault();
        registroExposicion();
    };
    /*\ |*| REGISTRO EXPOSICION |*| \*/

    /*\ |*| REGISTRO VISITA |*| \*/
    document.getElementById('idBtnRegistroVisita').onclick = (event) => {
        event.preventDefault();
        registroVisita();
    };
    /*\ |*| REGISTRO VISITA |*| \*/

}
/*================== DECLARAR SISTEMA Y INICIAR (FINAL) =================*/

/*===============================================================*/

/*================== CAMBIO DE COLOR (INICIO) =================*/

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

/*================== CAMBIO DE COLOR (FINAL) =================*/

/*===============================================================*/

/*================== CREAR MODALES (INICIO) =================*/

function cerrarModal() {
    let modal = document.getElementById('modal_info');
    window.onclick = event => {
        if (event.target == modal) {
            modal.remove();
        }
    }

    document.querySelector('.modal__cerrar').onclick = () => {
        modal.remove();
    };
}

function modal(titulo, contenido) {
    let body = document.getElementById('idBody');
    let modal = document.createElement('div');
    modal.id = 'modal_info';
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal__container radio shadow">
            <div class="modal__title">
                <h2 class="modal__title--texto">${titulo}</h2>
                <button class="modal__cerrar shadow">x</button>
            </div>
            ${contenido}

        </div>
    `;
    body.appendChild(modal);
    cerrarModal();
}

/*================== CREAR MODALES (FINAL) =================*/

/*===============================================================*/

/*================== CHECK DE CALIFICACIÓN (INICIO) =================*/

function check(check, arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`${arr[i]}Lbl`).classList.remove('imgCheck');
    }
    document.getElementById(`${check}Lbl`).classList.add('imgCheck');

    if (check == "caraMuyBien") {
        imgCalificacion = "caraMuyBien.JPG";
    } else if (check == "caraBien") {
        imgCalificacion = "caraBien.JPG";
    } else if (check == "caraNormal") {
        imgCalificacion = "caraNormal.JPG";
    } else if (check == "caraMal") {
        imgCalificacion = "caraMal.JPG";
    } else if (check == "caraMuyMal") {
        imgCalificacion = "caraMuyMal.JPG";
    }
}

/*================== CHECK DE CALIFICACIÓN (FINAL) =================*/

/*===============================================================*/

/*================== CARGAR LISTA (INICIO) =================*/

function cargarLista(list) {
    document.getElementById('idListaArtistasDos').innerHTML = ``;
    let selectListArtistas = document.getElementById('idListaArtistasUno');
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
        modal("¡Advertencia!", msg);
    } else {
        return true;
    }
}

function registroArtista() {
    let nombre = document.getElementById('idNombreArtista');
    let edad = document.getElementById('idEdadArtista');
    let estilo = document.getElementById('idEstiloArstista');
    if (validarRegistroArtista(nombre.value, edad.value, estilo.value)) {
        let artista = new Artista(nombre.value, edad.value, estilo.value);
        sistema.addArtista(artista);

        nombre.value = "";
        edad.value = "";
        estilo.value = "";
        cargarLista(sistema.getArtistas());
    }
}

/*================== REGISTRO ARTISTA (FINAL) =================*/

/*===============================================================*/

/*================== LISTAS DE ARTISTAS SELECIONADOS (INICIO) =================*/

function pasajeArtistasListas(listaA, listaB, select = true) {
    const seleccionados = [];

    for (let i = 0; i < listaA.options.length; i++) {
        const opt = listaA.options[i];
        if(select){
            if (opt.selected) {
                seleccionados.push(opt);
            }
        }else{
            seleccionados.push(opt)
        }
    }

    for (let i = 0; i < seleccionados.length; i++) {
        listaB.appendChild(seleccionados[i]);
        seleccionados[i].selected = false;
    }
}

/*================== LISTAS DE ARTISTAS SELECIONADOS (FINAL) =================*/

/*===============================================================*/

/*================== RECORRER LISTA DE ARTISTAS SELECIONADOS (INICIO) =================*/

function recorrerListaArtistasSelecionados() {
    let arrArtistas = [];
    let select = document.getElementById('idListaArtistasDos');
    // RECORRE LOS OPTION EN EL SELECT MIENTRA LOS COMPARA CON LOS ARTISTAS EN EL AREGLO "listArtistas" (INICIO)
    for (let i = 0; i < select.options.length; i++) {
        sistema.getArtistas().forEach(artista => {
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
        modal("¡Advertencia!", msg);
    } else {
        return true;
    }
}

function registroExposicion() {
    let titulo = document.getElementById('idExpoTitulo');
    let fecha = document.getElementById('idExpoFecha');
    let descripcion = document.getElementById('idExpoDescripcion');
    let arrArtistas = recorrerListaArtistasSelecionados();
    let lista1 = document.getElementById('idListaArtistasUno');
    let lista2 = document.getElementById('idListaArtistasDos');
    if (validarRegistroExposicion(titulo.value, fecha.value, descripcion.value, arrArtistas)) {
        let exposicion = new Exposicion(titulo.value, fecha.value, descripcion.value, arrArtistas);
        sistema.addExposicion(exposicion);
        exposicionesEnVisitas();

        titulo.value = "";
        fecha.value = "";
        descripcion.value = "";
        pasajeArtistasListas(lista2, lista1, false);
    }
}

/*================== REGISTRO EXPOSICIÓN (FINAL) =================*/

/*===============================================================*/

/*================== EXPOSICIÓN EN VISITAS (INICIO) =================*/

function optionExposicion(exposicion){
    let option = document.createElement('OPTION');
    option.textContent = exposicion.getTitulo();
    option.value = sistema.getExposiciones().indexOf(exposicion);
    return option;
}

function exposicionesEnVisitas() {
    let exposiciones = document.getElementById('idVisitaExpo');
    let expoTabla = document.getElementById('idExpisicionesTabla');
    
    exposiciones.innerHTML = '';
    expoTabla.innerHTML = '';

    sistema.getExposiciones().forEach(exposicion => {
        exposiciones.appendChild(optionExposicion(exposicion));
        expoTabla.appendChild(optionExposicion(exposicion));
    });
}

/*================== EXPOSICIÓN EN VISITAS (FINAL) =================*/

/*===============================================================*/

/*================== REGISTRO VISITAS (INICIO) =================*/

function validarRegistroVisitas(exposicion, nombre, comentario, calificacion) {
    let msg = "";
    let alera = false;
    if (exposicion == "") {
        msg += `<p class="alerta">Debe elegir una exposición</p>`;
        alera = true;
    }
    if (nombre == "") {
        msg += `<p class="alerta">El nombre es obligatorio</p>`;
        alera = true;
    }
    if (comentario == "") {
        msg += `<p class="alerta">Debe comentar algo</p>`;
        alera = true;
    }

    if (alera) {
        modal("¡Advertencia!", msg);
    } else {
        return true;
    }
}

function registroVisita() {
    let exposicion = document.getElementById('idVisitaExpo');
    let nombre = document.getElementById('idVisitaNombre');
    let comentario = document.getElementById('idVisitaComentario');
    let calificaciones = document.querySelectorAll("[name='calif']");
    let visitaGuiada = document.getElementById('idVisitaGuiada');
    let guiada = 'NO';
    let calificacion = '';

    calificaciones.forEach(cal => {
        if (cal.checked) {
            calificacion = `${cal.id}`;
        }
    });

    if (visitaGuiada.checked) { guiada = 'SI'; }

    if (validarRegistroVisitas(exposicion.value, nombre.value, comentario.value)) {
        let visita = new Visita(sistema.getExposiciones()[exposicion.value], nombre.value, comentario.value, calificacion, guiada);
        sistema.addVisita(visita);
        agregarComentario();

        nombre.value = "";
        comentario.value = "";
        visitaGuiada.checked = false;
        check("caraMuyBien", radios);
    }
}

/*================== REGISTRO VISITAS (FINAL) =================*/

/*===============================================================*/

/*================== COMENTARIOS EN TABLA (INICIO) =================*/

function agregarComentario() {
    let body = document.getElementById('idTablaComentarios');
    body.innerHTML = '';

    sistema.getVisitas().forEach(visita => {
        let tr = document.createElement('TR');
        tr.classList.add('table_tr', 'cap-primario');
        tr.innerHTML = `
            <td class="cap-primario table__td" data-titulo="Titulo: ">${visita.getExposicion().getTitulo()}</td>
            <td class="cap-primario table__td" data-titulo="Más datos: ">
                <input data-expo="${sistema.getVisitas().indexOf(visita)}" type="button" value="Ampliar" class="table__btn__ampliar btn btn-primario">
            </td>
            <td class="cap-primario table__td" data-titulo="Nombre: ">${visita.getNombre()}</td>
            <td class="cap-primario table__td" data-titulo="Comentario: ">${visita.getComentario()}</td>
            <td class="cap-primario table__td" data-titulo="Guiada: ">${visita.getGuiada()}</td>
            <td class="cap-primario table__td" data-titulo="">
                <img src="img/${visita.getCalificacion()}.JPG" alt="${visita.getCalificacion()}">
            </td>
        `;

        body.appendChild(tr);
        ampliarInformacionObras();
    });
}

/*================== COMENTARIOS EN TABLA (FINAL) =================*/

/*===============================================================*/

/*================== FORMATEAR LA FECHA (INICIO) =================*/

function formatoFecha(fecha) {
    let date = new Date(fecha);
    let dia = date.getDate(); 
    let mes = date.getMonth() + 1;
    let año = date.getFullYear();

    dia = (dia < 10) ? '0' + dia : dia; // ES UN IF DE UNA LINEA "(CONDICION)" "?" -> SI PASA LA CONDICIÓN ":" -> SINO
    mes = (mes < 10) ? '0' + mes : mes;
    return dia + '/' + mes + '/' + año;
}

/*================== FORMATEAR LA FECHA (FINAL) =================*/

/*===============================================================*/

/*================== INFORMACIÓN DE EXPOSICIÓN (INICIO) =================*/

function ampliarInformacionObras() {
        let btnsAmpliar = document.querySelectorAll('.table__btn__ampliar')
        btnsAmpliar.forEach(btn => {
            btn.onclick = () => {
                let index = btn.dataset.expo;
                let exposicion = sistema.getVisitas()[index].getExposicion();
                let msg = `
                    <p class="modal__texto"><span class="modal__texto--span">Fecha: </span>${formatoFecha(exposicion.getFecha())}</p>
                    <p class="modal__texto"><span class="modal__texto--span">Descripción: </span>${exposicion.getDescripcion()}</p>
                    <p class="modal__texto"><span class="modal__texto--span">Artistas:</span></p>
                `;
                msg += tablaArtistasExpocision(exposicion);
                modal('Información de la Exposición', msg);
            };
        });
}

function tablaArtistasExpocision(exposicion) {
    let msg = `
        <table class="table-expo">
            <thead>
                <tr class="table-expo__head">
                    <th class="table-expo__th">Nombre</th>
                    <th class="table-expo__th">Edad</th>
                    <th class="table-expo__th">Estilo</th>
                </tr>
            </thead>
            <tbody>
    `;
    exposicion.getArtistas().forEach(artista => {
        msg += `
            <tr class="table-expo__tr">
                <td class="table-expo__td">${artista.getNombre()}</td>
                <td class="table-expo__td">${artista.getEdad()}</td>
                <td class="table-expo__td">${artista.getCaracteristicasEstilo()}</td>
            </tr>
        `;
    });

    msg += `
            </tbody>
        </table>
    `;
    return msg;
}

/*================== INFORMACIÓN DE EXPOSICIÓN (FINAL) =================*/

