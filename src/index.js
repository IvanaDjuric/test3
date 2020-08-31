import {showHeader} from './components/header.js'
import {pastShipsShow} from './components/pastShips.js'
import {selectMenu} from './components/select.js'

document.getElementById('header').appendChild(showHeader())
document.getElementById('app1').appendChild(selectMenu)
document.getElementById('app').appendChild(pastShipsShow())
