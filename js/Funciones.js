/*================== IMPORTACIONES (INICIO) =================*/
import Artista from './Clases.js';
import Exposicion from './Clases.js';
import Visita from './Clases.js';
/*================== IMPORTACIONES (FINAL) =================*/

/*===============================================================*/

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
    for(let i = 0; i < arr.length; i++){
        document.getElementById(`${arr[i]}Lbl`).classList.remove('imgCheck');
    }
    document.getElementById(`${check}Lbl`).classList.add('imgCheck');

    if(check == "califMuyBien"){
        imgCalificacion = "CaraMuyBien.JPG";
    }else if(check == "califBien"){
        imgCalificacion = "CaraBien.JPG";
    }else if(check == "califNormal"){
        imgCalificacion = "CaraNormal.JPG";
    }else if(check == "califMal"){
        imgCalificacion = "CaraMal.JPG";
    }else if(check == "califMuyMal"){
        imgCalificacion = "CaraMuyMal.JPG";
    }
}

for (let x = 0; x < radios.length; x++) {
    document.getElementById(radios[x]).onclick = () => {
        check(radios[x], radios);
    };
}

/*================== CHECK DE CALIFICACIÓN (FINAL) =================*/