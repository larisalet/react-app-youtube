import axios from 'axios'

const KEY = 'AIzaSyAbYpo3Q6h4-rlig2yRXdUpXm0ePEt2WwI';

 export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
 });