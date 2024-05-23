const URLbase= "http://localhost:3000";

export async function getPostsByUserId(id) {
    let response = await fetch(`${URLbase}/posts?userId=${id}`);
    const data = await response.json();
    return data;
}//post?userId muestra en otra pagina la bussqueda requerida (query param)
