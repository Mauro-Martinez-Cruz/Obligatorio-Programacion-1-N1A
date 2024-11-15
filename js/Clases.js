/*===================== ARTISTA (INICIO) =====================*/

class Artista {

    constructor(nombre, edad, caracteristicasEstilo) {
        this.nombre = nombre;
        this.edad = edad;
        this.caracteristicasEstilo = caracteristicasEstilo;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getCaracteristicasEstilo() {
        return this.caracteristicasEstilo;
    }

}

/*===================== ARTISTA (FINAL) =====================*/

/*===============================================================*/

/*===================== EXPOSICION (INICIO) =====================*/

class Exposicion {

    constructor(titulo, fecha, descripcion, artistas) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.artistas = artistas;
    }

    getTitulo() {
        return this.titulo;
    }

    getFecha() {
        return this.fecha;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getArtistas() {
        return this.artistas;
    }

}

/*===================== EXPOSICION (FINAL) =====================*/

/*===============================================================*/

/*===================== VISITA (INICIO) =====================*/

class Visita {

    constructor(exposicion, nombre, comentario, calificacion, guiada) {
        this.exposicion = exposicion;
        this.nombre = nombre;
        this.comentario = comentario;
        this.calificacion = calificacion;
        this.guiada = guiada;
    }

    getExposicion() {
        return this.exposicion;
    }

    getNombre() {
        return this.nombre;
    }

    getComentario() {
        return this.comentario;
    }

    getCalificacion() {
        return this.calificacion;
    }

    getGuiada() {
        return this.guiada;
    }

}

/*===================== VISITA (FINAL) =====================*/

/*===============================================================*/

/*===================== SISTEMA (INICIO) =====================*/

class Sistema {

    constructor() {
        this.listaArtista = [];
        this.listaExposicion = [];
        this.listaVisita = [];
    }

    addArtista(artista) { 
        this.listaArtista.push(artista); 
    }
    
    addExposicion(exposicion) { 
        this.listaExposicion.push(exposicion); 
    }

    addVisita(visita) { 
        this.listaVisita.push(visita); 
    }


    getArtistas() { 
        return this.listaArtista; 
    }

    getExposiciones() { 
        return this.listaExposicion; 
    }

    getVisitas() { 
        return this.listaVisita; 
    }

}

/*===================== SISTEMA (FINAL) =====================*/