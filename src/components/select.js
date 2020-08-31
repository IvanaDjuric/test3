import {getShips} from './source.js'

import {draw} from './draw.js'

export const selectMenu = document.createElement('select')
document.getElementById('app1')

const option1 = document.createElement('option')
option1.textContent = '-'
selectMenu.appendChild(option1)

const option2 = document.createElement('option')
option2.textContent = 'active'
const option3 = document.createElement('option')
option3.textContent = 'false'
selectMenu.append(option2,option3)


const div2 = document.createElement('div')
div2.className = 'ships-list'

selectMenu.addEventListener('change', (e) => {
    e.preventDefault()

    div2.innerHTML = ''

    getShips().then(res => {
        res.data.forEach((el) => {
            if (selectMenu.value == 'active') {
                div2.appendChild(draw(el.image))
                document.getElementById('app1').append(div2)
            } else{
                div2.appendChild(draw(el.image))
                document.getElementById('app1').append(div2)
            }
        })
        return div2
    })
})