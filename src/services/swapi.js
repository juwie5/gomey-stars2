import axios from 'axios'

const BASE_ENDPOINT ="https://swapi.dev/api/"

const PLANETS_ENDPOINT = `${BASE_ENDPOINT}/planets/`
const PEOPLE_ENDPOINT = `${BASE_ENDPOINT}/people/`
const STARSHIP_ENPOINT = `${BASE_ENDPOINT}/starships/`


let getPlanets = () => {
    return axios.get(`${PLANETS_ENDPOINT}`, {
        params: {}
    }).then(response =>{
        return response.data
    })
}

let getPeople = () => {
    return axios.get(`${PEOPLE_ENDPOINT}`, {
        params: {}
    }).then(response =>{
        return response.data
    })
}

let getStarships = (search) => {
    return axios.get(`${STARSHIP_ENPOINT}`, {
        params: {search}
    }).then(response =>{
        return response.data
    })
}

// let shipFilter = (param)=> {
//     return axios.get(`${STARSHIP_ENPOINT}/`,{
//         params: {param}
//     }).then(reponse =>{
//         return reponse.data
//     })
// }



export  {
    getPlanets,
    getPeople,
    getStarships,
}