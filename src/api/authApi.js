import axios from 'axios'

const authApi = axios.create({
    // baseURL: 'https://mail-auth-api-node-ts-production.up.railway.app/api/'
    baseURL: 'https://faad-200-83-84-81.ngrok-free.app/api'
})

export default authApi