
export async function fetchApiUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        console.log("DADOS FETCHAPIUSERS:", data)

        return data
    } catch (error) {
        console.log("erro no fetch", error)
    }

}

export async function fetchApiUserProfile(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return await response.json();
    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}
export async function fetchApiUsersPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        return await response.json();
    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}
export async function fetchApiUsersComments() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        return await response.json();
    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}
export async function fetchApiUsersAlbums() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        return await response.json();
    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}
export async function fetchApiUsersAlbumsPhotos() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        return await response.json();
    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}
export async function fetchApiLogin() {
    try {
        const response = await fetch(`https://67be079f321b883e790ee0ed.mockapi.io/api/v1/users`);
        return await response.json();
    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}