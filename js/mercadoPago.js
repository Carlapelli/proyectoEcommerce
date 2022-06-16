//////// Api de mercadoPago para poder realizar el pago del monto total.

let btnMercadoPago = document.querySelector (".mercadoPago");

const pagarMercadoPago = async () =>{

    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    const productosToMap = carrito.map (Element =>{
        let nuevoElemento = {
            title: Element.nombre,
            description: "",
            picture_url: "",
            category_id: "",
            quantity: Element.cantidad,
            currency_id: "ARS",
            unit_price: parseInt(Element.precio)
        }
        return nuevoElemento
    })

    let response= await fetch ("https://api.mercadopago.com/checkout/preferences",{
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-5431694035018806-061410-eb48fe9ac3f79cab0da878839b4ffc6b-16458347"
        },

        body: JSON.stringify({
            items: productosToMap
        })
    })
    let data = await response.json ()
    console.log (data)
    window.open (data.init_point, "_blank")
}

btnMercadoPago.addEventListener("click", pagarMercadoPago)