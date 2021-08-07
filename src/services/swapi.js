import axios from 'axios'

const BASE_ENDPOINT ="https://swapi.dev/api/"

const PLANETS_ENDPOINT = `${BASE_ENDPOINT}/planets/`
const PEOPLE_ENDPOINT = `${BASE_ENDPOINT}/people/`
const STARSHIP_ENPOINT = `${BASE_ENDPOINT}/starships/`


let getPlanets = (name) => {
    return axios.get(`${PLANETS_ENDPOINT}`, {
        params: { name }
    }).then(response =>{
        return response.data
    })
}

let getPeople = ({ name, gender, birth_year }) => {
    return axios.get(`${PEOPLE_ENDPOINT}`, {
        params: { name: name, gender, birth_year }
    }).then(response =>{
        return response.data
    })
}

let getStarships = () => {
    return axios.get(`${STARSHIP_ENPOINT}`, {
        params: {}
    }).then(response =>{
        return response.data
    })
}

// console.log(search(1));

// getPlanets();
// getPeople();
// getStarships();


export  {
    getPlanets,
    getPeople,
    getStarships
}