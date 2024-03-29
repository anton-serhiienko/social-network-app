import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "33f2f5d0-34de-488e-aea1-de81ee51cd56"
    }
});

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                    return response.data;
                }
            )
    }
}

export const followAPI = {
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)

    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
    }
}

export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
    },
    authLogIn(email, password, rememberMe=false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    authLogOut(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/` , {status})
    }
}
