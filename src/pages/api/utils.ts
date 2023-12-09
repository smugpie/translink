import { API_URL } from './constants';

const fetchData = function(requestType: string, params: URLSearchParams) {
    console.log(params.toString())
    console.log(`${API_URL}${requestType}?${params.toString()}`)
    return fetch(
        `${API_URL}${requestType}?${params.toString()}`, {
        headers: {
            'X-API-TOKEN': import.meta.env.API_KEY
        }
    }
  )    
} 

export { fetchData }