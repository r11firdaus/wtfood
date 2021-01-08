export const actionUserName = (name) => dispatch => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_NAME', value: name})
    }, 2000);
}

export const actionChangeLoading = () => dispatch => {
    dispatch({type: 'CHANGE_LOADING', value: true})
}