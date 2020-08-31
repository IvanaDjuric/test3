import axios from 'axios'

export const getShips = () => {
    return axios.get("https://api.spacexdata.com/v3/ships")
}

export const getCompInfo = () => {
    return axios.get("https://api.spacexdata.com/v3/info")
}