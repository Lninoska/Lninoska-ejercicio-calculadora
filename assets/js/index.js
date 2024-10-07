function categoria() {
    return prompt ("Ingrese a la categoria del producto")
}
var categoriaseleccionada = categoria()



function ropa() {
    let cantidad = Number(prompt("Ingrese la cantidad de productos"));
    let preciounidad = Number (prompt("Ingrese el precio unitario"))
    let totalsindescuento = cantidad * preciounidad;
    let descuentoropa = 5;

    for (let i = 0; i < cantidad; i++) {
        let montodescuento = (totalsindescuento * descuentoropa)/100;
        let preciofinal = totalsindescuento - montodescuento;
        alert("Su precio total de su compra es "  + preciofinal)
        }
    }



function electronica() {
    let cantidad = Number (prompt("Ingrese la cantidad de productos"))
    let preciounidad = Number (prompt("Ingrese el precio unitario"))
    let descuentoelectronica = 0;

    let sindescuento = cantidad * preciounidad;
    alert("Su precio total de su compra es " + preciounidad)
    if (cantidad >= 2) {
        descuentoelectronica = 10;

        for ( let i = 0;i <  cantidad; i++) {
            let montodescuento = (sindescuento * descuentoelectronica)/100;
            let preciofinal = sindescuento - montodescuento;
            alert("Su precio total de su compra es " + preciofinal)
        }
    }
}



if (categoriaseleccionada === "ropa") {
    ropa()
}
else if (categoriaseleccionada === "electronica") {
    electronica()
}
