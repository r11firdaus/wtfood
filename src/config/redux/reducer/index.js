// import { foodAPI } from "../../api"

const initState = {
  popup: false,
  isLoading: false,
  isLogin: false,
  meal: [],
  spinner: false
}

// kumpulan instruksi utk mengubah store
const reducer = (state = initState, action) => {
  if (action.type === 'CHANGE_POPUP') {
    return {
      ...state,
      popup: action.value
    }
  }
  if (action.type === 'CHANGE_LOADING') {
    if (state.isLoading) {
      return {
        ...state,
        isLoading: false
      }
    }
    return {
      ...state,
      isLoading: action.value
    }
  }
  if (action.type === 'CHANGE_ISLOGIN') {
    return {
      ...state,
      isLogin: action.value
    }
  }
  if (action.type === 'CHANGE_SPINNER') {
    return {
      ...state,
      spinner: action.value
    }
  }
  if (action.type === 'LOAD_API') {
    return {
      ...state,
      meal: action.value
    }
  }
  
  return state;
}

export default reducer;