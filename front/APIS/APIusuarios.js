const urlUsuarios = "http://localhost:4000/api/usuarios";

export const nuevoUsuario = async(usuario)=>{
    try {
        await fetch(urlUsuarios, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = "AgregarUsuario.html";
}

export const obtenerUsuario = async()=>{
    try {
        const resultado = await fetch(urlUsuarios);
        const usuario = await resultado.json();
        return usuario;
    } catch (error) {
        console.log(error);
    }
}