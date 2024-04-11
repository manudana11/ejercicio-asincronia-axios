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
    console.log('ejercicio 4', users);
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

axios.get('https://dog.ceo/api/breeds/list/all')
.then((res) => console.log('extra 1', res))
.catch((err) => console.log(err));

// Imprimir por consola una imagen random de una raza.

axios.get('https://dog.ceo/api/breeds/image/random')
.then((res) => console.log('extra 2', res.data))
.catch((err) => console.log(err));

// Imprimir por consola todas las imágenes de una raza concreta.

axios.get('https://dog.ceo/api/breed/hound/afghan/images')
.then((res) => console.log('extra 3', res.data)).catch((err) => console.log(err));

// Recuerda que para estos ejercicios deberás utilizar Axios. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.

const btn2 = document.getElementById('imag');
let allImg = [];
axios.get('https://dog.ceo/api/breed/hound/afghan/images')
.then((res) => allImg = res.data.message)
.catch((err) => console.log(err));

console.log(allImg);
//console.log(btn2);
btn2.addEventListener('click', (e) => {
    const imgPerritos = document.getElementById('imagPerr');
    for (let i = 0; i < allImg.length; i++) {
        const domImg = document.createElement('div');
        domImg.innerHTML = `<img src="${allImg[i]}" alt="perritos">`;
        imgPerritos.appendChild(domImg);
    }
})

// *Extra ¿Y si ahora te pidiéramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.
//https://images.dog.ceo/breeds/hound-afghan/n02088094_988.jpg

const btn3 = document.getElementById('razaRand');
const btn4 = document.getElementById('imgRazaRa');
//console.log(btn4);

let allBreed = [];
axios.get('https://dog.ceo/api/breeds/list/all').then((res) => allBreed = Object.keys(res.data.message)).catch((err) => console.log(err));

let allImgRand = [];

btn3.addEventListener('click', (e) => {
    console.log(allBreed);
    const selectBreed = Math.floor(Math.random() * allBreed.length);
    const randomBreed = allBreed[selectBreed];
    console.log(randomBreed);
    const textoRaza = document.getElementById('textRaza');
    textoRaza.innerHTML = `La raza aleatoria es: ${randomBreed}`;
    axios.get(`https://dog.ceo/api/breed/${randomBreed}/images`).then((res) => allImgRand = res.data.message).catch((err) => console.log(err));
    btn4.addEventListener('click', (e) => {
        const fotosPerros = document.getElementById('fotosPerros');
        for (let i = 0; i < allImgRand.length; i++) {
            const imgRandomDog = document.createElement('div');
            imgRandomDog.innerHTML = `<img src="${allImgRand[i]}" alt="perritos">`;
            fotosPerros.appendChild(imgRandomDog);
        }
    })
})

// RECORDATORIO DE QUE HAY QUE PENSAR ANTES DE EDITAR CODIGO

// const btn2 = document.getElementById('imag');

// let allImg = [];
// axios.get(`https://dog.ceo/api/breed/hound/afghan/images`)
// .then((res) => allImg = res.data.message)
// .catch((err) => console.log(err));

// let allBreed = [];
// axios.get('https://dog.ceo/api/breeds/list/all')
// .then((res) => {
//     allBreed = Object.keys(res.data.message);
//     const selectImg = Math.floor(Math.random() * allBreed.length);
//     const randomImg = allBreed[selectImg];
// })
// .catch((err) => console.log(err));

// axios.get(`https://dog.ceo/api/breed/hound/afghan/images`)
// .then((res) => allImg = res.data.message)
// .catch((err) => console.log(err));


// console.log(allImg);
// //console.log(btn2);
// btn2.addEventListener('click', (e) => {
//     const imgPerritos = document.getElementById('imagPerr');
//     for (let i = 0; i < allBreed.length; i++) {
//         const domImg = document.createElement('div');

//         domImg.innerHTML = `
//             <img src="${allImg[i]}" alt="perritos">`;
//         imgPerritos.appendChild(domImg);
//     }
//     console.log('razas', allBreed);
//     console.log('imagenes', allImg)
// })