
export async function fetchApiUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        console.log("DADOS FETCHAPIUSERS:",data)

        return data
    } catch(error){
        console.log("erro no fetch", error)
    }
 
}

