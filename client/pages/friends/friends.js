import * as api from '../../js/utils/api.js'

document.addEventListener("DOMContentLoaded", async () => {
     /* CHEQUEJEM SI L'USUARI ESTÀ LOGUEJAT, SINO, EL TORNEM A LA PÀGINA DE LOGIN */
     const userIsLoggedIn = await api.isLoggedIn()
     if (!userIsLoggedIn) {
         location.replace('/examen-php/')
     }

     setupLogout()
     setupSearchBar()
     setupFriendList()
})

/* COMPONENT DE LLISTA D'AMICS */
function setupFriendList() {
    api.getFriends()
        .then(response => {
            handleResponse(response)
        })
}

/* COMPONENT SEARCHBAR */
function setupSearchBar() {
    const searchInput = document.querySelector('.searchbar input')
    searchInput.oninput = (e) => handleInput(e)
}

function handleInput(e) {
    const filter = document.querySelector('.filter-select').value
    const filterValue = document.querySelector('.searchbar-input').value

    api.getFriends({filter: filter, value: filterValue})
        .then(response => {
            handleResponse(response)
        })
}

function handleResponse(data) {
    const friendListHTML = document.querySelector('.friend-list')
    friendListHTML.innerHTML = ''
    const friends = data.message

    friends.forEach(friend => {
        const friendCardHTML = `
            <div class="user-card friend">
                <img src=${friend.image} alt="Foto de perfil del usuario" class="user-image">
                <span class="user-name">${friend.name}</span>
                <span class="user-username">${friend.lastname}</span>
            </div>
        `
        friendListHTML.innerHTML += friendCardHTML
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