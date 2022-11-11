import axios from "axios"

const API_KEY = 'gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY
    }
})

export default instance