import axios from 'axios'

const BASE_URL = "http://localhost:9000/api/products";

export const getProducts = async () => {
    try {
        const response = await axios.get(BASE_URL + "/all");
        return response.data;
        
        
    } catch (error) {
        console.error('Error fetching data', error);
    }
}