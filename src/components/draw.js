export const draw = (ship) => {
    //ship.ship_name
    //ship.ship_type
    //ship.active
    //ship.image

    const shipCont = document.createElement('div')
    shipCont.className = 'ships'

    const inn0 = document.createElement('div')
    inn0.className = 'inner-div-0'
    const image = document.createElement('img')
    image.src = ship.image
    inn0.appendChild(image)

    const inn1 = document.createElement('div')
    inn1.className = 'inner-div-1'
    const shipName = document.createElement('span')
    shipName.textContent = ship.ship_name

    const inn2 = document.createElement('div')
    inn2.className = 'inner-div-2'
    const shipType = document.createElement('span')
    shipType.textContent = ship.ship_type

    const inn3 = document.createElement('div')
    inn3.className = 'inner-div-3'
    const shipActive = document.createElement('span')
    shipActive.textContent = ship.active

    shipCont.append(inn0,inn1,inn2,inn3)

    return shipCont
}