// Ejercicio 1: Imprime el valor de `this` en el contexto global.
console.log(this);
// En un navegador, imprimirá el objeto global `Window`.
// En Node.js, imprimirá el objeto `global`.

console.log('---');

// Ejercicio 2: Crea un objeto con un método y usa `this` para acceder a una propiedad del objeto.
const obj1 = {
    name: 'Alice',
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
obj1.greet();
// Salida: 'Hello, Alice!'

console.log('---');

// Ejercicio 3: Analiza el valor de `this` en una función normal dentro de un método.
const obj2 = {
    name: 'Bob',
    greet() {
        function inner() {
            console.log(this); // ¿Qué imprime esto?
        }
        inner();
    }
};
obj2.greet();
// En modo no estricto, `this` será el objeto global (Window o global).
// En modo estricto, será undefined.

console.log('---');

// Ejercicio 4: Usa una función flecha para heredar el contexto de `this`.
const obj3 = {
    name: 'Charlie',
    greet() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
obj3.greet();
// Salida: 'Charlie'

console.log('---');

// Ejercicio 5: Usa `call` y `apply` para cambiar el contexto de `this`.
function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person1 = { name: 'Dana' };
sayHello.call(person1, 'Hello');
sayHello.apply(person1, ['Hi']);
// Salida:
// Hello, Dana
// Hi, Dana

console.log('---');

// Ejercicio 6: Usa `bind` para crear una nueva función con un `this` fijo.
function introduce() {
    console.log(`I am ${this.name}`);
}

const person2 = { name: 'Emma' };
const boundFunction = introduce.bind(person2);
boundFunction();
// Salida: 'I am Emma'

console.log('---');

// Ejercicio 7: Usa `this` dentro de un constructor para asignar propiedades.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function() {
        console.log(`${this.name} is ${this.age} years old.`);
    };
}
const john = new Person('John', 30);
john.describe();
// Salida: 'John is 30 years old.'

console.log('---');

// Ejercicio 8: Usa `this` dentro de un controlador de eventos.
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', function() {
    console.log(this); // ¿Qué es `this` aquí?
});
// En un controlador de eventos tradicional, `this` apunta al elemento que disparó el evento.
// Salida: <button>Click me</button>

console.log('---');

// Ejercicio 9: Soluciona el problema del `this` cuando pasas un método como callback.
const obj4 = {
    name: 'Frank',
    greet() {
        console.log(this.name);
    }
};

setTimeout(obj4.greet, 1000); // ¿Qué ocurre aquí?
// Solución: Usa `bind` para fijar el valor de `this`.
setTimeout(obj4.greet.bind(obj4), 1000);
// Cuando se pasa obj.greet como callback, el contexto de `this` se pierde.
// Salida: 'Frank' (después de usar bind)

console.log('---');

// Ejercicio 10: Usa `this` dentro de una clase.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
const dog = new Animal('Dog');
dog.speak();
// Salida: 'Dog makes a noise.'
