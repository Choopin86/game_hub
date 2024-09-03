import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8b15a2a7f639419480a46acae45d9598'
    }
})