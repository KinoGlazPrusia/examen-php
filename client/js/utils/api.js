const POSTS_API = 'https://jsonplaceholder.org/posts'
const USERS_API = 'https://jsonplaceholder.org/users'

/* AUTH */
export async function login(credentials) {
    const url = '/examen-php/server/api/auth/login.php'

    const requestData = new FormData()
    requestData.append('userId', credentials.userId)
    requestData.append('password', credentials.password)
    requestData.append('rememberMe', credentials.rememberMe)
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestData
        })
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } 
    
    catch (error) {
        throw error
    } 
}

export async function isLoggedIn() {
    const url = '/examen-php/server/api/auth/is-logged-in.php'

    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data.status === 200 ? true : false
    } 
    
    catch (error) {
        throw error
    }
}

export async function logout() {
    const url = '/examen-php/server/api/auth/logout.php'

    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function register(form) {
    const url = '/examen-php/server/api/auth/register.php'
    const requestData = new FormData(form)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestData
        })
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

/* USER */
export async function getUserInfo() {
    const url = '/examen-php/server/api/users/user.php'

    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function getUser(id) {
    const url = USERS_API + '/' + id

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error en la solicitud HTTP')
        }
        const data = await response.json()
        return data 
    } catch (error) {
        throw error
    }
}

/* POSTS */
export async function getPostList() {
    const url = POSTS_API

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error en la solicitud HTTP')
        }
        const data = await response.json()
        return data 
    } catch (error) {
        throw error
    }
}

export async function createPost(form) {
    const url = '/examen-php/server/api/posts/create-post.php'
    const requestData = new FormData(form)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestData
        })
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }

}

/* FRIENDS */
export async function getFriends(filter=null) {
    const url = '/examen-php/server/api/friends/get-friends.php'
    const request = filter ? url + `?filter=${filter.filter}&filter-value=${filter.value}` : url

    try {
        const response = await fetch(request)
        if (!response.status === 200) {
            throw new Error('Error en la solicitud HTTP');
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}