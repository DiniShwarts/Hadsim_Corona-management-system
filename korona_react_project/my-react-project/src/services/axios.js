import axios from 'axios'


const axiosInstans = axios.create({ baseURL: 'http://localhost:4000'})

// middleWare
axiosInstans.interceptors.request.use((req) => {
    console.log('middleware');
    return req
})

export default axiosInstans