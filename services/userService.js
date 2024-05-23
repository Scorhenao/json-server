const URLbase= "http://localhost:3000";

export async function getUsuarios(){
    let response = await fetch(`${URLbase}/usuarios`);
    const data = await response.json();
    return data;
}

export async function getUsuarioById(id) {
    let response = await fetch(`${URLbase}/usuarios/${id}`);
    const data = await response.json();
    return data;
}

export async function agregarUsuarios(user){
    let response = await fetch(`${URLbase}/usuarios`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

//actualizar 
export async function updateUser(id,user) {
    await fetch(`${URLbase}/users/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(user)
    });
}

//borrar
export async function deleteUser(id) {
    await fetch(`${URLbase}/users/${id}`,{
        method: 'DELETE'
    });
}