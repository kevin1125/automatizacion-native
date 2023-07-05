import AsyncStorage from '@react-native-async-storage/async-storage'

const fecher = async (url: string, token: string) => {
  return await fetch(url, {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      "Authorization":token
    },
  });
}

export const useFetchWithAuth = async (url: string) => {

  url=  "http://149.56.97.9:8083/api/"+url+"/";
  const token = await AsyncStorage.getItem("token") || "";
  let data;
  let error;
  try{
    const response = await fecher(url, token)
    if (response.ok){
      data = await response.json();
      
    }else {
      
      error = "Servidor: "+ ((await response.json()).trace);
    }
  }catch (e){
    error = "Programa: "+e;
  }

  return {
    data,
    error
  }

}
