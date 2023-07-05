import { Buffer } from 'buffer';

const fecher = async(url: string, headerAuth: string) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': headerAuth
        }
    })
}



 export const useBasicAuth = async (username: string, password: string) => {
    console.debug(username + " : " + password)
    const headerAuth = 'Basic ' + Buffer.from(username+ ":"+ password).toString("base64");
    let token = "";
    try {


        const response = await fecher("http://149.56.97.9:8083/login", headerAuth);

        if (response.ok){
            
            token = response.headers.get("Authorization") || "";
        }
    } catch (error) {
        
    }

    return {
        token
    }

}