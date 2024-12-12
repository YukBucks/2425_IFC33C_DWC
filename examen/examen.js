
let jsonObj = {
    squadName: "Super hero squad", 
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"]
        },
        {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
            "Million tonne punch", 
            "Damage resistance",
            "Superhuman reflexes"]
        },
        {
        name: "Eternal Flame", 
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"]
        }
    ]
}

let escuadron = jsonObj.squadName;
let ciudad = jsonObj.homeTown;
let fecha = jsonObj.formed;

imprimirTitulo(escuadron, ciudad, fecha);

let nombre;
let edad;
let identidad;
let poderes;
let superHeroe;

for (let member of jsonObj.members) {
    nombre = member.name;
    edad = member.edad;
    identidad = member.secretIdentity;
    poderes= member.powers[0];
    for (let i = 1; i<member.powers.length; i++) {
        poderes = poderes.concat(", ", member.powers[i]);
    }

    imprimirHeroe(nombre, edad, identidad, poderes);
    
}

function imprimirTitulo(escuadron, ciudad, fecha) {
    let titulo = "--------------" + escuadron + "----------------\n"
    + "--------------" + ciudad + " // " +
    + fecha + "--------------";

    console.log(titulo);

}

function imprimirHeroe(nombre, edad, identidad, poderes) {
    superHeroe = "Nombre: " + nombre + "\n" +
    "Edad: " + edad + "\n" + 
    "Identidad secreta: " + identidad + "\n" +
    "Poderes: " + poderes + "\n" + 
    "---------------------------";

    console.log(superHeroe);
}