import axios from 'axios';

const KEY = 'AIzaSyAalgGhwXcpcbN049C2Wx-rWCu6r6DHFtw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part :'snippet',
        type : 'video',
        maxResults : 5,
        key : KEY

    }
})

