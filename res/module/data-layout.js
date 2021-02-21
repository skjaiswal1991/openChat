import axios from 'axios'
import CONSTENT from './api.endpoint.Constent'

class dataLayout{

    constructor(){

    this.axiosUser = axios.create({
        baseURL:CONSTENT.BASE_URL
    }) 
    this.axiosUser.defaults.headers.post["Content-Type"] =
      "application/json"; // for POST
    this.axiosUser.defaults.headers.patch["Content-Type"] =
      "application/json";
    this.axiosUser.defaults.headers.patch["Access-Control-Allow-Origin"] =
      "*";
    }

    getUserlist ()
    {
        return new Promise((resolved,reject)=>{
            this.axiosUser
                .post('/getuserlist/')
                .then((Response)=>{
                    resolved(Response)
                })
                .catch((error)=>{
                    reject(error)
                })

        })

    }

    getUserMsg (Object)
    {
        return new Promise((resolved,reject)=>{
            this.axiosUser
                .post('/getMsg/',Object)
                .then((Response)=>{
                    resolved(Response)
                })
                .catch((error)=>{
                    reject(error)
                })

        })

    }


}

export default new dataLayout()