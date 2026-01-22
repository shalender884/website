import { baseUrl } from "../base";

export const signUp= async (data:any)=>{
    const response =await baseUrl.post("register",data)
    return response.data
    
}
