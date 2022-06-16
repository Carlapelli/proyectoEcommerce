////////Desde la página Carrito, para ver el detalle de productos seleccionados del index

let carrito = JSON.parse (localStorage.getItem ("carrito"));

//Se agregan productos al carrito y se forma la tabla en la pagina "carrito"

let tbody = document.getElementById ("tbody");

function infoCarrito (infoProductosCarrito){

    for (let producto of infoProductosCarrito){

        let tr = document.createElement ("tr");

        tr.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio * producto.cantidad}</td>
        <td><button id="${producto.id}" class="eliminarItem btn btn-secondary">Eliminar</button></td>
        `
        tbody.appendChild (tr);
    }
}

infoCarrito (carrito);

////// Boton eliminar de cada producto y su función

let botonEliminar = document.querySelectorAll (".eliminarItem");

botonEliminar.forEach (boton => {
    boton.addEventListener ("click", eliminarItem)
} )

function eliminarItem (e){

    let index = carrito.findIndex (producto => producto.id == e.target.id)
    
    if (carrito[index].cantidad != 1) {
        e.target.parentNode.parentNode.children[2].innerText = carrito[index].cantidad -= 1;
        e.target.parentNode.parentNode.children[3].innerText = e.target.parentNode.parentNode.children[2].innerText * e.target.parentNode.parentNode.children[1].innerText

    } else if(carrito[index].cantidad == 1){
        carrito.splice (index,1);
        e.target.parentNode.parentNode.remove();
    }

    localStorage.setItem ("carrito", JSON.stringify(carrito));    
}

//// Boton eliminar total de la compra y su función

let botonEliminarCarrito = document.querySelector (".eliminarCarrito");
botonEliminarCarrito.addEventListener("click", eliminarTotalCarrito)

function eliminarTotalCarrito (e) {
    localStorage.clear(carrito);
    tbody.remove();
}

//// Boton Sumar costo total de la compra y su función

let costoTotal = document.querySelector (".costoTotal");
costoTotal.addEventListener ("click", btnCostoTotal)

function btnCostoTotal (e){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []
    let total = carrito.reduce ((acc,el) => acc + el.precio * el.cantidad,0)

    Swal.fire({
        text:`Su compra tiene un total de $ ${total}`,
        confirmButtonColor: 'rgb(233, 170, 191)',
    })
}

