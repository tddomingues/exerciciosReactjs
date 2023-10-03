/*
Para lidar com ações assíncronas no Redux, você precisa usar middleware, como o redux-thunk: applyMiddleware(thunk)
*/
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import rootReducer from "./root-reducer"

//criando o store para armazenar o root e poder utiliza-lo nas aplicações
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store