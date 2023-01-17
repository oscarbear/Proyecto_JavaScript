alert("Bienvenido al portal de clientes");

let menu = parseInt(prompt("1.Registro\n2.Consultar\n3.Eliminar\n4.Salir"));

const listaClientes = [];
let clientesFiltro = new Array();


class Registro{
    constructor(nombre,nip,celular){
        this.nombre = nombre;
        this.nip = nip;
        this.celular = celular;
    }
};

let continuar;


while (menu <= 4) {
    switch (menu) {
        case 1:
            do {
                let nombreRegistro = prompt(`Ingrese el nombre del cliente a registrar...`);
                let nipRegistro = prompt(`Ingrese el nip del cliente ${nombreRegistro} a registrar...`);
                let celularRegistro = prompt(`Ingrese el celular del cliente ${nombreRegistro} a registrar...`)
                let clienteNuevo = new Registro(nombreRegistro,nipRegistro,celularRegistro);
                listaClientes.push(clienteNuevo)
                continuar = confirm("Ingresar otro cliente?");
            } while (continuar);
            menu = parseInt(prompt("1.Registro\n2.Consultar\n3.Eliminar\n4.Salir"));
            break;
        case 2:
            do {
                // const clientesRegistrados = listaClientes.map(function(element){
                //     return `${element.nombre}\n${element.nip}\n${element.celular}\n`;
                // })

                let datosClientes = "";
                let datosClientesFiltro = "";

                const clientesRegistrados = listaClientes.map((element) => 
                `${element.nombre}\n${element.nip}\n${element.celular}\n`)

                for (let i in clientesRegistrados) {
                    datosClientes += `${parseInt(i)+1}\n${clientesRegistrados[i]}\n`;
                };

                alert(`A continuación se muestran todos los clientes registrados..\n${datosClientes}`)

                let seleccionFiltro = parseInt(prompt(`Debe elegir bajo que parametro hacer el filtro\n1.Nombre\n2.Nip\n3.Celular`));

                let datosFiltrar = prompt(`Ingrese el caracter por el cual quiere filtrar...`);

                switch (seleccionFiltro) {
                    case 1:
                        const filtro = listaClientes.filter((filtrarElemento) => filtrarElemento.nombre.includes(datosFiltrar));
                        for (let x in filtro) {
                            datosClientesFiltro += `${parseInt(x)+1}\n${filtro[x]["nombre"]}\n${filtro[x]["nip"]}\n`;
                        };
                        break;
                    case 2:
                        const filtro2 = listaClientes.filter((filtrarElemento) => filtrarElemento.nip.includes(datosFiltrar));
                        for (let y in filtro2) {
                            datosClientesFiltro += `${parseInt(y)+1}\n${filtro2[y]["nombre"]}\n${filtro2[y]["nip"]}\n`;
                        }; 
                        break;
                    case 3:
                        const filtro3 = listaClientes.filter((filtrarElemento) => filtrarElemento.celular.includes(datosFiltrar));
                        for (let z in filtro3) {
                            datosClientesFiltro += `${parseInt(z)+1}\n${filtro3[z]["nombre"]}\n${filtro3[z]["nip"]}\n`;
                        };                
                        break;
                
                    default:
                        break;
                }

                alert(`A continuación se muestran todos los clientes de acuerdo al filtro..\n${datosClientesFiltro}`)

                continuar = confirm("Desea hacer otro filtro?");
                
            } while (continuar);


            menu = parseInt(prompt("1.Registro\n2.Consultar\n3.Eliminar\n4.Salir"));
            break

        case 3:
            do {
                let datosClientes = "";

                let clientesInicial = listaClientes.length;

                const clientesRegistrados = listaClientes.map((element) => 
                `${element.nombre}\n${element.nip}\n${element.celular}\n`)

                for (let i in clientesRegistrados) {
                    datosClientes += `${parseInt(i)+1}\n${clientesRegistrados[i]}\n`;
                };

                alert(`A continuación se muestran todos los clientes registrados..\n${datosClientes}`)

                let datosEliminar = prompt(`Ingrese el nombre del cliente que quiere eliminar...`);

                const index = listaClientes.map(buscar => buscar.nombre).indexOf(datosEliminar);

                if (index != (-1)) {
                    listaClientes.splice(index,1)
                };


                if (clientesInicial != listaClientes.length) {
                    alert(`Cliente ${datosEliminar} eliminado correctamente`)
                } else {
                    alert(`No se encontro al cliente ${datosEliminar} por lo cual no se elimino ningún registro`)
                }


                continuar = confirm("Desea eliminar otro cliente?");

            } while (continuar);

            menu = parseInt(prompt("1.Registro\n2.Consultar\n3.Eliminar\n4.Salir"));
            break
        default:
            alert("Nos vemos en una proxima ;)...")
            menu = 5;
            break;
    }
};
