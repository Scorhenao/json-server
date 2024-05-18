const URLbase= "http://localhost:3000";

export async function getUsuarios(){
    let response = await fetch(`{URLbase}/usuarios`);
    const data = await response.json();
    console.log(data);
    return data;
}

