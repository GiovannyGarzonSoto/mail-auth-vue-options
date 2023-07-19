import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://mail-auth-api-node-ts-production.up.railway.app/api/'
})

export default authApi