import axios from "axios";

const baseApi = (endpoint = "", queryParametr = "") => axios.get('https://jsonplaceholder.typicode.com/' + endpoint + queryParametr).then(response => response.data);

export const placeholderApi = {
    getPhotos() {
        return baseApi('photos', '?albumId=1')
    },
    getPosts(id:string) {
        return baseApi('posts/', id)
    }
}