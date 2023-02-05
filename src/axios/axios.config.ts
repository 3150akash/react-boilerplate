import { AxiosRequestConfig, AxiosResponse } from "axios";
import Axios from "axios-observable";

export const axiosInstance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
})

// Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a request interceptor
export const requestInterceptor = axiosInstance.interceptors.request.use((config:AxiosRequestConfig) => {
    // Do something before request is sent
    return config;
  }, (error : any) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
export const responseInterceptor =axiosInstance.interceptors.response.use( (response: AxiosResponse<any, any>) => {
    // Do something with response data
    return response;
  },  (error: any)  => {
    // Do something with response error
    return Promise.reject(error);
  });

  // export default Axios;

