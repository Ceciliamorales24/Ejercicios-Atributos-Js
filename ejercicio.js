/*
    eso es lo mismo que hacer esto
    const a = document.getElementById("#todoAdd");
    a.addEventListener('click');
*/

/* 
        ¡EXPLICACIÓN!
    1.Creo una lista vacia
    2.A mi función addToList le paso un parametro vacio.
    3. Es mejor usar querySelector donde le paso mi id #todoName
    el cual es parte de mi primer input. Cuando hago .value llamo a ese valor
    que le paso por parametro.
    4. Dentro de mi ul llamo al elemento todoList del ul en el html. Pero
    es mejor usar querySelector.
    5. Creo el elemento "li". y después creo una nueva variable const = text
    donde voy a crear un text Node y le paso por paramento el (textValue, que es 
    la const que creee al pricipio). Hago esto porque sino no puedo llamar al appendChild.
    6. Es necesario crear eventos para cada acción de lo que quiero hacer.
*/
const list = [];
const crearBoton2 = () => {
    let button2 = document.createElement("input");
    // creo un buton input sin caracteristicas
    button2.setAttribute("type", "checkbox");
    // le paso las caracteristicas un type que va a a tener un checkbox
    button2.addEventListener("change", (event) => {
        // evento es decir la tarea que va a cumplir.
        if (button2.checked) {
            return button2.nextSibling.classList.add("tachado")
            // creo una clase, llamada tachado que va hacer referencia al siguiente
            // hermano de button2. Despues tengo que meter al hermano dentro li.
        }
        else {
            button2.nextSibling.classList.remove("tachado");
            // el target elimina la clase si ya esta marcado.
        }
    });
    return button2;
};

const crearBotonBorrar = () => {
    let button = document.createElement("button");
    button.innerHTML = "borrar";
    button.addEventListener("click", (event) => {
        const button = event.target;
        const li = button.parentElement;
        li.remove();
    })
    return button;
};

const addToList = () => {
    const textValue = document.querySelector("#todoName").value;
    let contenedor = document.createElement("span")
    // creo un let que contiene un span que hace referencia a la tarea/texto.
    contenedor.innerHTML = textValue;
    // hace referencia a la tarea
    let nuevoBoton2 = crearBoton2();
    // llamo a la funcion que esta creada por fuera.
    const ul = document.querySelector("#todoList");
    // list.forEach(({ id, value }) => {    
    //destructuring. evito tener que poner id.tal cosa y value.tal cosa
    const li = document.createElement("li");
    //al li le paso un nodo de texto porque sino no puedo acceder al appendChild.
    let nuevoBoton1 = crearBotonBorrar();
    li.appendChild(nuevoBoton1);
    li.appendChild(nuevoBoton2); //pusheea al button 2 dentro de li.
    li.appendChild(contenedor); //pushea el contenedor span con la tarea/texto.
    // li.appendChild(button); //pusheea el boton de eliminar en el caso de que esto no este fuera de una funcion aparte
    ul.appendChild(li);
    document.querySelector("#todoName").value = "";
    // esto hace que el texto del input desaparezca.

    // ul.appendChild(`<li>${element.value}</li>`) 
    //template literals. concatenar string con variables.    

    //ul que tenga un li, checkbok, remove. Ul le tengo que mandar li que contenga checkbox y removebotton y texto.
    // });
};


/**
 * Adds a new todo to the list
 */
/*const addTodo = () => {
    document.getElementById("todoAdd");
    const value = document.getElementById("todoName").value;
    if (value) {
        const element = { id: list.length, value }
        list.push(element);
        addToList(element);
        // console.log(list)
    } else {
        alert("Debes ingresar un valor para un nuevo todo")
    }
}*/


// errror cuando el usuario no completo el input
