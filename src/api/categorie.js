import axios from "axios";

const BASE_URL ="http://127.0.0.1:8000/api/categories"

axios.post(BASE_URL, {
    headers: {
        'Authorization': `Bearer ` + localStorage.getItem('usertoken')
    }
})

async function getCategories()
{
    return await axios.get(BASE_URL);
}

async function getCategorie(id)
{
    return await axios.get(BASE_URL+'/'+id);
}

async function postCategorie(data)
{
    return await axios.post(BASE_URL, data);
}
// eslint-disable-next-line no-undef


export {getCategories, getCategorie, postCategorie}
