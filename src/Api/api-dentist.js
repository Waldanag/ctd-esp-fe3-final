import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllDentists = async () => {
    try {
        const res = await axios(`${API_URL}/users`);
        return res.data;
    } catch (error) {
        console.error("Error fetching all dentists:", error);
        throw error;
    }}

export const getDentistById = async (id) => {
    try {
        const res = await axios(`${API_URL}/users/${id}`);
        return res.data;
    } catch (error) {
        console.error(`Error fetching dentist with ID ${id}:`, error);
        throw error;
    }
}