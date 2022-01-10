import axios from "axios";

const BASE_URL ="http://127.0.0.1:8000/api/messages?page=1"

axios.post(BASE_URL, {
    headers: {
        'Authorization': `Bearer ` + localStorage.getItem('usertoken')
    }
})

async function getMessages()
{
    return await axios.get(BASE_URL);
}

async function getMessage(id)
{
    return await axios.get(BASE_URL+'/'+id);
}

async function postMessage(data)
{
    return await axios.post(BASE_URL, data);
}

export {getMessages, getMessage, postMessage}
