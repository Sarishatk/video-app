import { commonAPI } from "./commonAPI";
import { serverURL } from "./severURL";


// upload video
 export const uploadVideo = async(body)=>{
    
    console.log("this is body",body);
    
    // call post http request to http://localhost:4000 to add video in json server return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,body)

}

// get all videos
  export const getAllvideo = async()=>{ 
// call post http request to http://localhost:4000 to add video  to get videos from json server return response to view component
    return await commonAPI("GET",`${serverURL}/videos`,"")

}
// get single video
export const getAvideo = async(id)=>{
    // call post http request to http://localhost:4000 to add video  to get videos from json server return response to videocard
    return await commonAPI("GET",`${serverURL}/videos`,"")

}
// delete a single video
export const deleteavideo = async(id)=>{
    // call post http request to http://localhost:4000 to add video  to get videos from json server return response to videocard
    return await commonAPI("DELETE",`${serverURL}/videos`,"")

}

