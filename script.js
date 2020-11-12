// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

// Funcion que obtiene los usuarios
function getUsers() {

    // Con fetch obtenemos la lista de usuarios que estan dentro del archivo users.json y ademas lo meto dentro del array tenmporal data.
    fetch('users.json').then(response => response.json()).then( data => {console.log(data); // console log para mostrar el array completo 
    
    //Creo una variable con el nombre result donde voy a meter el resultado obtenido de filtrar el array data. 
    const result = data.filter(user => user.money > 500);
    console.log(result); // console log para mostrar los usuarios filtrados. 

    //Realizo un forEach en result y le digo que solo me muestre el nomrbe de los usuarios
    result.forEach(user => console.log(user.name))

    // Solo muestra los 3 nombres en el console log sin los array
    //fetch('users.json').then(response => response.json()).then(data => { const result = data.filter(user => user.money > 500);
    // result.forEach(user => console.log(user.name))}); 
  
  }); 

}  







