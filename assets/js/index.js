import '.././css/style.css'; //todo: this inside the index.js entrypoint
import { fetchUrl } from './api';

window.onload = function(){
    let fruityViceData = fetchUrl("https://www.fruityvice.com/api/fruit/all");
    console.log(fruityViceData);
};
