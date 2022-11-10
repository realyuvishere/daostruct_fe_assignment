import axios from "axios"

const API_KEY = 'gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

// const url = "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true"

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY
    }
})

export default instance