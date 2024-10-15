import Category from "../component/Category"
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

 


 export const AddVideoApi = async(reqBody)=>{
    return await commonApi(`POST`,`${serverUrl}/videos`,reqBody)
 }

// get all videos
 export const getVideosApi = async()=>{
   return await commonApi('GET',`${serverUrl}/videos`)
 }

// add video history
 export const addVideoHistoryApi = async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/history`,reqBody)
 }

//  api to get video from history
export const getAllVideoHistoryApi = async()=>{
  return await commonApi('GET',`${serverUrl}/history`)
}

// api to delete a video from all video
export const deleteVideosApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

// api to delete video from history
export const deleteHistoryVideoApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}

// api add to categarey
export const addCategoreyApi = async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

// api to get category
export const getAllCategoryApi = async()=>{
  return await commonApi('GET',`${serverUrl}/category`)
}

// add to delete category
export const deleteCategoryApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

// api to add video details to acategory 
export const addVideoToCategoryApi = async(id,reqBody)=>{
  return await commonApi('PUT',`${serverUrl}/Category/${id}`,reqBody)
}
