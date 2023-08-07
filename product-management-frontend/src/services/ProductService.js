import axios from 'axios'

const BASE_URL = "http://localhost:9001/api/products";

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

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(BASE_URL + "/update/" + id, product);
        return response.data;
    } catch (error) {
        console.error('Error update data', error);
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(BASE_URL + "/delete/" + id);
        return response.data;
    } catch (error) {
        console.error('Error delete data', error);
    }
}