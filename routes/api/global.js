require('dotenv').config()

class Global {
    async getToken()  {
        let payload = { 'grant_type': 'client_credentials', 'client_id': process.env.CLIENT_ID , 'client_secret': process.env.CLIENT_SECRET , 'scope': 'public' };
        let request = await axios.post(process.env.ENDPOINT_TOKEN, payload);
        if(request) return request.access_token;
        else return null;
    }
}

module.exports = Global