//as ações do dispatch devem tambem estar em um arquivo separado

import UserActionTypes from "./action-types"

export const loginUser = (payload) => {
    return {
        type: UserActionTypes.LOGIN,
        payload: payload
      }
}

export const logoutUser = () => {
    return {
        type: UserActionTypes.LOGOUT,
      }
}
