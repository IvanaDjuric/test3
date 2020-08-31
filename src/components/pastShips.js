import {getShips} from './source.js'
import {draw} from './draw.js'

export const pastShipsShow = () => {
    const div1 = document.createElement('div')
    div1.className = 'ships-list'

    getShips().then(res => {
        res.data.forEach(el => {
            div1.appendChild(draw(el))
        })
    })
    return div1
}