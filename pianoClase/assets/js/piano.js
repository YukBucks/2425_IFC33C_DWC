function Nota(nota, tipus) {
  this.nota = nota;
  this.tipus = tipus;
}

let cerca = [];

function addCerca(nota, tipus, cerca) {
  cerca.push(new Nota(nota, tipus));
}

addCerca("Do", "", cerca);
addCerca("Do", "", cerca);
addCerca("Re", "", cerca);

function Partitura(nombre, melodia) {
  this.nombre = nombre;
  this.melodia = melodia;
}

let partituras = [];

melodiaLaBalaguera = [
  new Nota("Do", ""),
  new Nota("Re", ""),
  new Nota("Mi", ""),
  new Nota("Fa", ""),
  new Nota("Fa", ""),
  new Nota("Sol", ""),
  new Nota("Sol", ""),
  new Nota("La", "#"),
  new Nota("La", "#"),
];

partituraLaBalaguera = new Partitura("La Balaguera", melodiaLaBalaguera);
partituras.push(partituraLaBalaguera);

melodiaHappyBirthday = [
  new Nota("Do", ""),
  new Nota("Do", ""),
  new Nota("Re", ""),
  new Nota("Do", ""),
  new Nota("Fa", ""),
  new Nota("Mi", ""),
  new Nota("Do", ""),
  new Nota("Do", ""),
  new Nota("Re", ""),
  new Nota("Do", ""),
  new Nota("Sol", ""),
  new Nota("Fa", ""),
];

partituraHappyBirthday = new Partitura("Happy Birthday", melodiaHappyBirthday);
partituras.push(partituraHappyBirthday);

function cercador(partituras, cerca) {
  let resultat = [];

  /* for (let i=0; i<partituras.length; i++) {      
        
        for (let j=0; j<partituras.melodia.length; j++){
            let trobat = true;

            console.log(partituras.melodia);

            for (let k=0; k<cerca.length; k++) {

                

                if (partituras.melodia[j+cerca.length] === undefined
                    || partituras.melodia[j].nota !== cerca[j+k].nota 
                    || partituras.melodia[j].tipus !== cerca[j+k].tipus
                ){
                    trobat = false;
                }
                
            }
        }

        if (trobat) {
            resultado.push(partitura);
        }
    } */

  for (let i = 0; i <= partituras.length; i++) {
    for (let j = 0; j <= partituras[i].melodia.length - cerca.length; j++) {
      let trobat = 1;

      for (let k = 0; k < cerca.length; k++) {
        if (
          partituras[i].melodia[j + k].nota !== cerca[k].nota ||
          partituras[i].melodia[j + k].tipus !== cerca[k].tipus
        ) {
          trobat = false;
          break;
        }
      }

      if (trobat) {
        resultat.push(partituras[i]);
      }
    }
  }
}
