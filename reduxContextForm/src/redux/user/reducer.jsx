import UserActionTypes from "./action-types"

const initialState = {
    user: null,
}

//action é um objeto com type (obrigatório) e payload
//ao despachar o userReducer será executado
//é melhor usar o switch
const userReducer = (state = initialState, action) => {
    if(action.type === UserActionTypes.LOGIN) {
        return {...state, user: action.payload}
    }

    if(action.type === UserActionTypes.LOGOUT) {
        return {...state, user: null}
    }

    return state
}

export default userReducer