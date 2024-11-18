import axios from "axios";

 export const commonAPI = async (httpMethod,url,reqBody)=>{
const reqConfig = {
    method:httpMethod,
    url,
data:reqBody,
headers:{
"Content-Type":"application/json"
}
}
console.log(reqConfig);

return await axios(reqConfig).then((result)=>{
    return result
}
).catch((err)=>{
    return err
})
}