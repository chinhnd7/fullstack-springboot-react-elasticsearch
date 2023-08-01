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

export const insertProduct = async (product) => {
    try {
        const response = await axios.post(BASE_URL + "/insert", product);
        return response.data;
    } catch (error) {
        console.error('Error insert data', error);
    }
}

export const viewProduct = async (id) => {
    try {
        const response = await axios.get(BASE_URL + "/find/" + id);
        return response.data;
    } catch (error) {
        console.error('Error view data', error);
    }
}