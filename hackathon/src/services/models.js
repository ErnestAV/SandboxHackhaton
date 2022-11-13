import axios from 'axios';
import { BASE_URL } from './api';


const allModels = async () => {
    const { data } = await axios.get(`${BASE_URL}/users/all`)
    return data;
}

export {
    allModels
};