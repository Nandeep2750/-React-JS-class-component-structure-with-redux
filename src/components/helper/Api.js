import axios from "axios";
import { toast } from 'react-toastify';

import {API_BASEURL} from '../config/constants'
const METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
};

// CHECK BELOW FOR SAMPLE DATA TO BE PASSED
class Api {
    
    constructor() {
        this.baseURL = API_BASEURL;
    }
    
    // URL FOR API
    // REFER SAMPLE JSON AT BOTTOM FOR DATA VALUES
    get(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.GET, url, data)
            .then(response => {
                resolve(response);
            }).catch(error => {
                // console.log("🚀 ~ file: Api.js ~ line 37 ~ Api ~ returnnewPromise ~ error", error)
            });
        });
    }
    
    post(url, data) {
        //console.log('API HANDLER', data)
        return new Promise((resolve, reject) => {
            this.api(METHOD.POST, url, data)
            .then(response => {
                resolve(response);
            }).catch(error => {
                // console.log("🚀 ~ file: Api.js ~ line 50 ~ Api ~ returnnewPromise ~ error", error)
            });
        });
    }
    
    put(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.PUT, url, data)
            .then(response => {
                resolve(response);
            }).catch(error => {
                // console.log("🚀 ~ file: Api.js ~ line 62 ~ Api ~ returnnewPromise ~ error", error)
            });
        });
    }
    
    delete(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.DELETE, url, data)
            .then(response => {
                resolve(response);
            }).catch(error => {
                // console.log("🚀 ~ file: Api.js ~ line 74 ~ Api ~ returnnewPromise ~ error", error)
            });
        });
    }
    
    api(method, url, data) {
        return new Promise((resolve, reject) => {
            let axiosConfig = {};
            axiosConfig.method = method;
            axiosConfig.url = this.baseURL + url;
            axiosConfig.headers =  this.setHeaders(data);
            if (data) {
                if (data.params) axiosConfig.params = data.params;
                if (data.data) axiosConfig.data = data.data;
            }
            axios(axiosConfig)
            .then(response => {
                let obj = {}
                // console.log("🚀 ~ file: Api.js ~ line 80 ~ Api ~ returnnewPromise ~ response", response)
                if (response.status && parseInt(response.status) === 204) {
                    obj = {
                        'status': response.status,
                        'message': "No Content",
                        'data': null,
                    };
                }else{
                    obj = {
                        'status': response.status,
                        'message': response.data.message,
                        'data': (response.data ? (response.data) : {} ),
                    };
                }
                resolve(obj);
            })
            .catch(error => {
                // console.log("🚀 ~ file: Api.js ~ line 93 ~ Api ~ returnnewPromise ~ error", error)
                // console.log("🚀 ~ file: Api.js ~ line 93 ~ Api ~ returnnewPromise ~ error.response", error.response)
                if(error.response && error.response.data){
                    let obj = {}
                    if( parseInt(error.response.status) === 400 ){
                        obj = {
                            'status': error.response.status,
                            'message': (error.response.data.error),
                        };
                    }else if( parseInt(error.response.status) === 404 ){
                        obj = {
                            'status': error.response.status,
                            'message': (error.response.data.message),
                        };
                    }else{
                        obj = {
                            'status': error.response.status,
                            'message': (error.response.data.message),
                        };
                    }

                    resolve(obj);
                }else
                {
                    toast.error('Opps!! something went wrong.');        
                }
            });
        });
    }
    
    setHeaders(data) {
        let headers = {};
        headers["accept-language"] = "en";
        if (data) {
            if (data.headers)
            for (var key in data.headers)
            if (data.headers.hasOwnProperty(key))
            headers[key] = data.headers[key];
        }
        return headers;
    }
}

export default Api;