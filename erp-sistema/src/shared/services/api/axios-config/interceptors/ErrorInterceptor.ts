import {AxiosError} from 'axios'

export const  errorInterceptor = (error:AxiosError)=>{
    if(error.message ==='Netework Error'){
        return Promise.reject(new Error('Erro de conexão'));
    }
    if(error.response?.status ===401){
        // return Promise.reject(new Error('Erro de conexão'));
    }
    return Promise.reject(error)
}