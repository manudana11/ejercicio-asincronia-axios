console.log('Hola caracola');

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Imprimir por consola la lista (array) de usuarios.

axios.get(API_URL)
.then((res) => console.log('ejercicio 1', res.data))
.catch((err) => console.log(err));

// Imprimir por consola solo el nombre de los usuarios.

axios.get(API_URL)
.then((res) => {
    res.data.forEach(user => {
        console.log('ejercicio 2', user.name);
    })
})
.catch((err) => console.log(err));

// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.

let users = [];

axios.get(API_URL)
.then((res) => users = res.data)
.catch((err) => console.log(err))

console.log(users);

// Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.

const showUsers = () => {
    console.log(users);
}

// Crea un botón que cuando lo cliques ejecute la función que habías creado

const btn = document.getElementById('consola');
btn.addEventListener('click', (e) => {
    showUsers();
})

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

btn.addEventListener('click', (e) => {
    const usersPart = document.getElementById('usersName');
    for (let i = 0; i < users.length; i++) {
        const domUsers = document.createElement('div');
        domUsers.innerHTML = `
        <div>
            <h5 class="card-title">${users[i].name}</h5>
        </div>`;
        usersPart.appendChild(domUsers);
    }
})

// Recuerda que para estos ejercicios deberás utilizar Axios.

// Extras

// 1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?

// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:


// Imprimir por consola la lista de razas de todos los perros.
// Imprimir por consola una imagen random de una raza.
// Imprimir por consola todas las imágenes de una raza concreta.

// Recuerda que para estos ejercicios deberás utilizar Axios. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.

// *Extra ¿Y si ahora te pidiéramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.
