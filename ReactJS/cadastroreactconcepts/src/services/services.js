import axio from "axios"

// define

const apiPort = "3000"

//define o endereço paea apis local
const localApi = `http://localhost:${apiPort}`

// define o endereço para apis externas
const externalApi = null

const api = axio.create({
    baseURL: localApi
}) 

export default api