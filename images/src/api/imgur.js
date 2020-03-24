import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = 'https://api.imgur.com';

/*
    target url:
    https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
*/

export default {

    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fetchImages(token) {
        const url = `${ROOT_URL}/3/account/me/images`;
        const headers = {
            Authorization: `Bearer ${token}`
        };

        return axios.get(url,{ headers });
    },

    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const url = `${ROOT_URL}/3/image`;
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const formData = new FormData();

            formData.append('image', image);

            return axios.post(url, formData,{ headers });
        });

        return Promise.all(promises);
    }
}