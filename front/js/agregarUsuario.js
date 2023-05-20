
import { obtenerUsuario} from "../APIS/APIusuarios.js";

document.addEventListener("DOMContentLoaded",()=>{
    getUsuarios()
})

async function getUsuarios(){
    const usuarios = await obtenerUsuario();
    const Usuarios = document.querySelector('#Usuarios');
    console.log(usuarios);
    let html = "";
    usuarios.forEach(usuario => {
        const {id_usuario, nombre_usuario, cargo} = usuario;
        html +=`
            <tr>
                <td>${nombre_usuario}</td>
                <td>${cargo}</td>
                <td><a href="" data-usuario="${id_usuario}" idUsuario=${id_usuario} >Editar<a/></td>
                <td><a href="#" data-usuario="${id_usuario}">Eliminar</a></td>
            </tr>
        `
        Usuarios.innerHTML = html;
    });
}