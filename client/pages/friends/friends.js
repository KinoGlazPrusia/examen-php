import * as api from '../../js/utils/api.js'
import setupFriendList from '../../js/friends/friendList.js'
import setupSuggestedFriends from '../../js/friends/suggestedFriends.js'

document.addEventListener("DOMContentLoaded", async () => {
     /* CHEQUEJEM SI L'USUARI ESTÀ LOGUEJAT, SINO, EL TORNEM A LA PÀGINA DE LOGIN */
     const userIsLoggedIn = await api.isLoggedIn()
     if (!userIsLoggedIn) {
         location.replace('/examen-php/')
     }

     setupLogout()
     setupGoBack()
     setupUserCard()
     setupFriendList()
     setupSuggestedFriends()
})

function setupGoBack() {
    const goBackBtn = document.querySelector('.go-back')
    goBackBtn.onclick = () => location.replace('/examen-php/client/pages/home/home.html')
}

function setupUserCard() {
    const userName = document.querySelector('.user-name')
    const userUsername = document.querySelector('.user-username')

    api.getUserInfo().then(response => {
        userName.textContent = `${response.message.name} ${response.message.lastname}`
        userUsername.textContent = '@' + response.message.username
    })
}

function setupLogout() {
    const logoutBtn = document.querySelector('.logout')
    logoutBtn.onclick = () => {
        api.logout().then(response => {
            if (response.status === 200) {
                location.replace('/examen-php/')
            }
        })
    }
}