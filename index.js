//Iteration#1

/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const newUl = document.createElement('ul');

countries.forEach( elem => {

    let newLi = document.createElement('li');
    let textLi = document.createTextNode(elem);
    newLi.appendChild(textLi);

    newUl.appendChild(newLi);
});

document.body.appendChild(newUl);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const toRemove = document.querySelector('.fn-remove-me');

toRemove.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const carsUl = document.createElement('ul');

cars.forEach( elem => {

    let newLi = document.createElement('li');
    let textLi = document.createTextNode(elem);
    newLi.appendChild(textLi);

    carsUl.appendChild(newLi);
});

const printHereDiv = document.querySelector('[data-function="printHere"]');

printHereDiv.appendChild(carsUl);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const images = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

images.forEach( elem => {

    let newDiv = document.createElement('div');
    let imgEl = document.createElement('img');
    let title = document.createElement('h4');

    imgEl.src = elem.imgUrl;
    title.innerText = elem.title;

    newDiv.appendChild(title);
    newDiv.appendChild(imgEl);

    document.body.appendChild(newDiv);

})

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */
const deleteBtn = document.createElement('button');
const btnText = document.createTextNode('Eliminar último div');
deleteBtn.appendChild(btnText);

document.body.appendChild(deleteBtn);

function deleteLastDiv() {
    const allDivs = document.querySelectorAll('div');
    const lastDiv = allDivs[allDivs.length -1];

    if(allDivs.length === 1) {
        return;
    }
    lastDiv.remove();
}

deleteBtn.addEventListener('click', () => deleteLastDiv());

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */
const allDivs = document.querySelectorAll('div');
allDivs.forEach( (elem, index) => {
    if(index > 0) {
        const deleteEachBtn = document.createElement('button');
        const btnEachText = document.createTextNode('Eliminar div');
        
        deleteEachBtn.appendChild(btnEachText);
        deleteEachBtn.classList.add('btn');
        elem.appendChild(deleteEachBtn);

        
    }
});

function deleteDiv(e) {
    e.target.parentNode.remove();
}

const btns = document.querySelectorAll('.btn');

btns.forEach( elem => {
    elem.addEventListener('click', deleteDiv);
});