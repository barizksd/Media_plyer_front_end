import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"



export const videoAddApi = async(reqBody)=>{
    return await commonApi('POST', `${serverurl}/videos`,reqBody)
}

export const allVidosApi = async()=>{
    return await commonApi('GET',`${serverurl}/videos`,)
}

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE', `${serverurl}/Videos/${id}`,{})
}

export const VideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST', `${serverurl}/History`,reqBody)
}

//api to get all video from history 
export const getallVideoHistory = async()=>{
    return await commonApi('GET',`${serverurl}/History`)
}

//api to delete vido from history 
export const deleteVideoHistoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/History/${id}`,{})
}

export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/category`,reqBody)
}