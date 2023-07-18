import axios from 'axios'

const authApi = axios.create({
    // baseURL: 'https://mail-auth-api-node-ts-production.up.railway.app/api'
    // baseURL: 'https://ad0f-200-83-84-81.ngrok-free.app/api'
    baseURL: 'http://localhost:3665/api'
})

export default authApi