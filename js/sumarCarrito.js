let carrito = [];

////////Desde el Index, sumar productos al carrito

function sumarCarrito (e){

    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    let index = carrito.findIndex (producto => producto.id == e.target.parentNode.children[1].alt)

    let id = e.target.parentNode.children[1].alt;
    let nombre = e.target.parentNode.children[0].innerText;
    let precio = e.target.parentNode.children[2].children[0].innerText;
    let imagen = e.target.parentNode.children[1].src;

    // libreria
    Swal.fire({
        imageUrl: imagen,
        imageHeight: 200,
        title: 'Genial!',
        text: `Agregaste el diseño ${nombre} a un precio de $ ${precio}.`,
        imageAlt: nombre,
        color: 'rgb(161, 159, 159)',
        confirmButtonColor: 'rgb(233, 170, 191)',
    })

    //acá suma en la cantidad si se selecciona más de un mismo item
    if (index == -1){
        const producto = new Productos (id, nombre, precio, imagen);
        carrito.push(producto);
    } else {
        carrito[index].cantidad += 1;
    }

    localStorage.setItem ("carrito", JSON.stringify(carrito))
}