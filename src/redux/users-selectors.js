export const getStateUsers = (state) => {
    return state.usersPage.users
}
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}