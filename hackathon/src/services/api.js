import axios from 'axios'
const BASE_URL = 'https://sandboxhackathonapi.herokuapp.com/api'

const signup = async (form) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/users`, form)
        return data
    } catch (error) {
        return error
    }
}

const login = async (username, password) => {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {
        username: username,
        password: password
    })
    return data
}

export {
    signup,
    login,
    BASE_URL
}
