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
        msg += "- El nombre es obligatorio\n";
        alera = true;
    }
    if (edad == "") {
        msg += "- La edad es obligatoria\n";
        alera = true;
    }
    if (estilo == "") {
        msg += "- El estilo es obligatorio\n";
        alera = true;
    }

    if (alera) {
        alert(msg);
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

