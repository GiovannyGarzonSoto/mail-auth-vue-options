import axios from 'axios'

const authApi = axios.create({
    // baseURL: 'https://mail-auth-api-node-ts-production.up.railway.app/api'
    baseURL: 'http://localhost:3665/api'
})

export default authApi