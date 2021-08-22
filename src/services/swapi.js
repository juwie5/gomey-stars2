import axios from 'axios'

const BASE_ENDPOINT ="https://swapi.dev/api/"

const PLANETS_ENDPOINT = `${BASE_ENDPOINT}/planets/`
const PEOPLE_ENDPOINT = `${BASE_ENDPOINT}/people/`
const STARSHIP_ENPOINT = `${BASE_ENDPOINT}/starships/`


let getPlanets = (search, page) => {
    return axios.get(`${PLANETS_ENDPOINT}`, {
        params: {search, page}
    }).then(response =>{
        return response.data
    })
}

let getPeople = (search, page) => {
    return axios.get(`${PEOPLE_ENDPOINT}`, {
        params: {search, page}
    }).then(response =>{
        return response.data
    })
}

let getStarships = (search, page) => {
    return axios.get(`${STARSHIP_ENPOINT}`, {
        params: {search, page}
    }).then(response =>{
        return response.data
    })
}

export  {
    getPlanets,
    getPeople,
    getStarships,
}