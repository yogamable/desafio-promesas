// 1.Implementar ES6 para toda la estructura del código
// 2. Crear una función asíncrona para obtener los datos de la URL.
// 3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa.

const fetchData = async()=>{
    try{
        const apiResponse = await fetch ("https://jsonplaceholder.typicode.com/photos");
        const jsondata = await apiResponse.json();
        return jsondata;
    } catch (error){
        console.error("error en la data", error);
    }
}

// 4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.

const mostrarTitulos = async () => {
    const data = await fetchData();
    if (data.length >= 20) {
        data.slice(0, 20).forEach(item => {
            console.log(`Título ${item.id}: ${item.title}`);
        });
    } else {
        console.log("No se encuentran suficientes datos");
    }
}

// 5. Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.

const mensaje = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve ("Información enviada");
    }, 3000);
})

// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.

const recibirMensaje = async () => {
    const mostrarMensaje = await mensaje();
    console.log(mostrarMensaje);
};

mostrarTitulos();
recibirMensaje();
