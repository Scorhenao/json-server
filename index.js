import { getUsuarios, getUsuarioById, agregarUsuarios, updateUser, deleteUser } from './services/userService.js';
import { getPostsByUserId } from './services/postService.js';


const usuarios = await getUsuarios();
console.log(usuarios);

const usuario = await getUsuarioById(1);//lit accediendo a un usuario
console.log(usuario);

const postByUser = await getPostsByUserId(1);
console.log(postByUser);


function updateUserDOM(params) {
    const { id, nombre, apellido, email, password } = params;
}

function deleteUserDOM(params) {
    const { id } = params;
}



const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const form = document.getElementById('formulario');
console.log(form)

let nombre;
let edad; 

form.addEventListener("submit", async(event) =>{
    event.preventDefault()
    nombre = nombreInput.value;
    edad = edadInput.value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);

})

localStorage.getItem("nombre");
localStorage.getItem("edad");

const pNombre = document.createElement('p');
pNombre.textContent = localStorage.getItem("nombre");

const pEdad = document.createElement('p');
pEdad.textContent = localStorage.getItem("edad");

//manipulacion de dom
const dtoUsuario = {
    nombre: "",
    apellido:"",
    clan: "",
    edad: 25
}


const btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click', async () => {
    await agregarUsuarios(dtoUsuario);
});

let cellButtonActions = null;
let buttonEdit = null;
let buttonDelete = null;

async function rederUsers () {
    const usuarios = await getUsuarios();
    const populateTableBody = (data) =>{
        const tbody = document.getElementById('tbody');
        tbody.innerHTML ='';
        
        data.forEach(item =>{
            const row = document.createElement('tr');
            row.className = "table-dark";
            Object.values(item).forEach(value =>{
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            const cellButtonActions = document.createElement('td');
            const buttonEdit = document.createElement('button');
            buttonEdit.textContent = "Edit";
            buttonEdit.className = "btn btn-warning";

            const buttonDelete = document.createElement('button');
            buttonDelete.textContent = "Delete";
            buttonDelete.className = "btn btn-danger";

            cellButtonActions.appendChild(buttonEdit);
            cellButtonActions.appendChild(buttonDelete);

            row.appendChild(cellButtonActions);
            
            tbody.appendChild(row);
        });
    }
    populateTableBody(usuarios);
}


await rederUsers();
//async siempre debe tener awais ci

//ejemplo de lo que hace json
/* const usuarios = [
    {id: 1, nombre:'Juan', apellido:'marin', clan:'Juan', edad:25},
    {id: 2, nombre:'Pablo', apellido:'Juan', clan:'Juan', edad:24},
    {id: 3, nombre:'David', apellido:'Juan', clan:'Juan', edad:26},
    {id: 4, nombre:'Cristo', apellido:'Rey', clan:'Juan', edad:23}
];

const populateTableBody = (data) =>{
    const tbody = document.getElementById('tbody');
    tbody.innerHTML ='';

    data.forEach(item =>{
        const row = document.createElement('tr');
        row.className = "table-dark";
        Object.values(item).forEach(value =>{
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}

populateTableBody(usuarios);

const thead = document.querySelector("thead");

const populateClassThead = (element) =>{
    element.forEach(trs => {
        trs.className = "table-primary"
    });
    
}

populateClassThead(thead); */