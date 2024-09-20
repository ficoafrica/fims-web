import axios from 'axios';
import { env } from '../environment/environment';

const authFetch = axios.create({
  baseURL: env.baseURL,
  headers: {
    Authorization: localStorage.getItem('access')
      ? 'Bearer ' + localStorage.getItem('access')
      : null,
    Accept: 'application/json',
    "Content-Type": 'application/json'
  }
})

authFetch.interceptors.response.use((response) => {
  return response
  }, 
  async (error)=>{
    const originalRequest = error.config;

    if(typeof error.response === 'undefined'){
      alert('Server/Network error occured');
      return Promise.reject(error);
    }

    if(error.response.status === 401 && originalRequest.url === 'token/refresh/'){
      console.log('Duplicate Request Terminated')
      return Promise.reject(new Error('Terminating Duplicate Requests'));
    }

    if(error.response.data.detail === "Authentication credentials were not provided." && error.response.status === 401 && error.response.statusText === 'Unauthorized'){
      try{
        authFetch.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access');
        originalRequest.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access');
        return await authFetch(originalRequest);
      } catch (err) {
        console.log(err);
      }
      }

    if(error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized' && originalRequest.url !== 'token/refresh/'){
      console.log(originalRequest.url)
      const refreshToken = localStorage.getItem('refresh');
      
      if(refreshToken){
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]))
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp)

        if (tokenParts.exp > now) {
          try {
            const response = await authFetch.post('token/refresh/', { refresh: refreshToken });
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);

            authFetch.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
            originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
            return await authFetch(originalRequest);
          } catch (err) {
            console.log(err);
          }
        } else{
          console.log('Refresh token is expired', tokenParts.exp, now);
          window.location.href = '/auth/signin'
        }
      } else{
        console.log('Refresh token not available.');
        window.location.href = '/auth/signin'
      }
    }

    return Promise.reject(error)
  }
)

export default authFetch