alert("Bienvenido, a continuacion seleccione la opcion que desea realizar")

let seleccion = parseInt(prompt((`1. Registro de productos
2. Registro de compras
3. Salir`))); 


let lista_productos = [];

let producto_cliente = new Array();
let precio_producto = new Array();
let total_venta = new Array();
let descuento_cliente = new Array();
let cliente_nombre = new Array();
let cantidad_producto = new Array();
let total_compra = new Array();
let iva = new Array();
let exento = new Array();
let numero_sorteo = new Array();

function resultado_final(cantidad_elegida,precio_cantidad) {


    if (cantidad_elegida>=5 && cantidad_elegida <=10) {
        return  ((cantidad_elegida*precio_cantidad)*0.08);
        
    } else if (cantidad_elegida>=11 && cantidad_elegida <=20) {
        return ((cantidad_elegida*precio_cantidad)*0.16);
    } else if (cantidad_elegida>=21){
        return ((cantidad_elegida*precio_cantidad)*0.25);
    }else{
        return 0
    }
    };


function calculo_iva(cantidad_ele,precio_can,exento_iva){
    switch (exento_iva) {
        case 2:
            return ((cantidad_ele*precio_can)*0.19)
            break;
        default:
            return 0
            break;
    }
};

function numero_aleatorio(numero_minimo,numero_maximo,numero_cliente,nombre) {
    let ganador = parseInt(Math.random()*(numero_maximo-numero_minimo)+numero_minimo);
    if (numero_cliente==ganador) {
        return `Apreciado cliente ${nombre} ha sido ganador de una Sanduchera :D, Felicidades!!!`;
        
    } else {
        return `Apreciado cliente ${nombre} no ha sido el ganador en esta oportunidad :(, el numero ganador era ${ganador}`;
        
    }
};

let continuar;

while (seleccion != 3) {
    switch (seleccion) {
        case 1:
            alert("Bienvenido al sistema de registro de productos");
            var menu = "";
            const inicial = lista_productos.length;
            class producto_registro{
                constructor(producto,precio,cantidad){
                    this.nombre = producto;
                    this.precio = precio;
                    this.cantidad = cantidad;
                }
                calculo_total(){
                    return this.precio*this.cantidad;
                }
            };
            do {
                let nombre_prod = prompt("Ingrese el nombre del producto...");
                let precio_prod = parseInt(prompt(`Ingrese el precio de ${nombre_prod}...`));
                let cantidad_prod = parseInt(prompt(`Ingrese la cantidad de ${nombre_prod}...`));
            
                let nuevo_producto = new producto_registro(nombre_prod,precio_prod,cantidad_prod);
            
                lista_productos.push(nuevo_producto);
            
                let calculo = nuevo_producto.calculo_total();
            
                alert(`El valor total en producto de ${nombre_prod} es de ${calculo}`)
            
            
                continuar = confirm("Ingresar otro producto?");
                
            } while (continuar);

            lista_productos.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                  return 1;
                }
                if (a.nombre < b.nombre) {
                  return -1;
                }
                
                return 0;
              });
    
            for (let i in lista_productos) {
                menu += ` ${parseInt(i)+1} - ${lista_productos[i]["nombre"]}, `;
            };
            
            let final = lista_productos.length;
            
            alert(`A continuacion obervara la lista de productos actualizada y ordenada (A-Z)
            ${menu}
            Productos al inicio: ${inicial}
            Productos al final: ${final}
            Productos agregados ${final-inicial}`)
    
            seleccion = parseInt(prompt((`  1. Registro de productos
        2. Registro de compras
        3. Salir`)));
    
            break;
        case 2:
            var menu = "";
            for (let ii in lista_productos) {
                menu += ` ${parseInt(ii)+1} - ${lista_productos[ii]["nombre"]}, `;
            };
            alert("Bienvenido al sistema de compras");

            do {
                cliente_nombre.push(prompt("Escriba el nombre del cliente..."));
                alert("A continuación el número del producto...");
            
                let seleccion = parseInt(prompt(`${menu}`));
            
                cantidad_producto.push(prompt(`Escriba la cantidad de ${lista_productos[seleccion-1]["nombre"]}`));
                exento.push(parseInt(prompt("El cliente esta excento del iva? 1.Si - 2.No")));
                numero_sorteo.push(parseInt(prompt("Ingrese un numero entre 1 y 10 para el sorteo")));
            
            
                alert(` Producto registrado: ${lista_productos[seleccion-1]["nombre"]} 
                Precio Unitario: ${lista_productos[seleccion-1]["precio"]}`);
            
                producto_cliente.push(lista_productos[seleccion-1]["nombre"]);
                precio_producto.push(lista_productos[seleccion-1]["precio"]);
            
                continuar = confirm("Ingresar otra compra?");
            
            } while (continuar);
            
            for (let index = 0; index < cliente_nombre.length; index++) {
                iva.push(calculo_iva(cantidad_producto[index],precio_producto[index],exento[index]));
                descuento_cliente.push(resultado_final(cantidad_producto[index],precio_producto[index]));
                total_compra.push((precio_producto[index]*cantidad_producto[index])-descuento_cliente[index]+iva[index]);
            
            };  
            
            
            alert("Estimado usuario el resumen de las compras son:")
            
            for (let final = 0; final < cliente_nombre.length; final++) {
                alert(`Cliente N° ${final+1}
                Nombre: ${cliente_nombre[final]}, 
                Producto: ${producto_cliente[final]},
                Precio Unitario: ${precio_producto[final]},
                Cantidad: ${cantidad_producto[final]},
                Descuento: ${descuento_cliente[final]},
                Iva: ${iva[final]},
                Total: ${total_compra[final]},
                Resultado Sorteo: ${numero_aleatorio(1,11,numero_sorteo[final],cliente_nombre[final])}`);
            };

            seleccion = parseInt(prompt((` 1. Registro de productos
        2. Registro de compras
        3. Salir`)));
            
            break;
        default:
            break;
    }
        
};
