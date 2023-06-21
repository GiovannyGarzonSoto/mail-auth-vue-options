import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:3665/api'
})

export default authApi