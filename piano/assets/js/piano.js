const partitures = [
    {
        nom: 'La Balanguera',
        notes: ['DO', 'RE', 'MI', 'FA', 'FA', 'SOL', 'SOL', 'LA#', 'LA#']
    },
    {
        nom: 'Happy Birthday',
        notes: ['DO', 'DO', 'RE', 'DO', 'FA', 'MI', 'DO', 'DO', 'RE', 'DO', 'SOL', 'FA']
    },
];

let cerca = [];

const display = document.querySelector('.notas'); 

function Nota(nom, tipus) {
    this.nom = nom;   
    this.tipus = tipus;  
}

function addCerca(nom, tipus) {
    const nota = new Nota(nom, tipus);
    cerca.push(nota);
    console.log(`Nota afegida: ${nom} ${tipus ? '#' : ''}`);
    actualizarNotasVisuales(); 
    cercador(); 
}

function actualizarNotasVisuales() {
    const notasTexto = cerca.map(nota => `${nota.nom}${nota.tipus ? '' : ''}`).join(' '); 
    display.textContent = ` ${notasTexto}`; 
}

function cercador() {
    if (cerca.length === 0) {
        document.getElementById("resultados").innerHTML = "Sense resultats."; 
        console.log("No hi ha notes a cercar.");
        return;
    }

    let foundResults = false;
    let resultadosHtml = ""; 

    partitures.forEach(partitura => {
        const { nom, notes } = partitura;

        let found = false;

        for (let i = 0; i <= notes.length - cerca.length; i++) {
            let match = true;

            for (let j = 0; j < cerca.length; j++) {
                if (notes[i + j] !== cerca[j].nom) {
                    match = false;
                    break;
                }
            }

            if (match) {
                found = true;
                break;
            }
        }

        if (found) {
            resultadosHtml += `${nom}<br>`; 
            foundResults = true;
        }
    });

    const resultadosDiv = document.getElementById("resultados");
    if (foundResults) {
        resultadosDiv.innerHTML = resultadosHtml; 
        console.log("Coincidències trobades:");
        console.log(resultadosHtml);
    } else {
        resultadosDiv.innerHTML = "Sense resultats."; 
    }
}

const pianoKeys = document.querySelectorAll('.key');

pianoKeys.forEach(function(key) {
    key.addEventListener('click', function(event) {
        const whiteKey = key.querySelector('.white-key');
        const blackKey = key.querySelector('.black-key');
        
        let note = '';
        let isSharp = false; 

        if (blackKey && event.target === blackKey) {
            note = blackKey.id; 
            isSharp = true; 
        } else if (whiteKey && event.target === whiteKey) {
            note = whiteKey.id; 
            isSharp = false; 
        }

        if (note !== '') {
            display.textContent += note + ' ';

            addCerca(note, isSharp);
        }
    });
});

const clearButton = document.getElementById('esborrar');
if (clearButton) {
    clearButton.addEventListener('click', function() {
        cerca = [];
        display.textContent = ''; 
        document.getElementById("resultados").innerHTML = "Sense resultats."; 
    });
}
