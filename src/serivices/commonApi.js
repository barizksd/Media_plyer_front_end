import axios from "axios"

export const commonApi = async(httpMethod, url, reqBody)=>{

    const reqConfig ={
        method : httpMethod,
        url,
        data:reqBody,
        headers:{"Content-Type" :"application/json"} // its check loacl or no upload content 
    }

   return await axios(reqConfig).then((res)=>{ //based on promis =resolve
    return res
   }).catch((err)=>{ //reject
    return err
   })
}