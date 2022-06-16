////// Obtengo productos para el HTML desde mi archivo json

const url = "../json/productos.json";
fetch (url)
    .then (info => info.json()) 
    .then (productos => {agregarProductosAlDom(productos)});

const agregarProductosAlDom = (productos) => {
    for (const producto of productos) {

        let div = document.createElement("div");
        
        div.innerHTML = 
        `<div class="card">
            <h3 class="card-title">${producto.type}</h3>
            <img class="card-img" src="${producto.img}" alt="${producto.id}">
            <p>$<strong>${producto.price}</strong></p>
            <button class="sumarCarrito btn btn-secondary">Añadir</button>
        </div>`;
    
        contenedorProductos.append(div);
        }

        let botones = document.querySelectorAll (".sumarCarrito");

        botones.forEach (boton => {
            boton.addEventListener("click", sumarCarrito)
            console.log ("click")
        })
}