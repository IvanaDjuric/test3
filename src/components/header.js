import {getCompInfo} from './source.js'

export const showHeader = () => {
    const headerDiv = document.createElement('div')

    getCompInfo().then(res => {
        const nameF = document.createElement('p')
        nameF.textContent = `Company name: ${res.data.name}`
        nameF.style.color = 'white'
        headerDiv.append(nameF)

        const founderF = document.createElement('p')
        founderF.textContent = `Founder: ${res.data.founder}`
        founderF.style.color = 'white'
        headerDiv.append(founderF)

        const yearFounded = document.createElement('p')
        yearFounded.textContent = `Founded: ${res.data.founded}`
        headerDiv.append(yearFounded)
    })

    return headerDiv
}