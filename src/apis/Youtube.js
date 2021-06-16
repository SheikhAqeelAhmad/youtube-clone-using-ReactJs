import axiox from 'axios';
const KEY ="AIzaSyCpGtKYW1wGHwkf4qWFX0-X62LE1DNKl6Y";

export default axiox.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params:{
part:'snippet',
maxResults:5,
key:KEY
} 
});