import { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: '/api/getMockData',
        method: 'get',
        response: ()=> {
            return 'hello mock data'
        }
    }
] as MockMethod[]