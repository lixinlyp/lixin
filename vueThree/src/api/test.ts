import axios from 'axios'
export async function getMockData() {
    return axios.get("/api/getMockData").then((res) => {
        return res
    })
}
