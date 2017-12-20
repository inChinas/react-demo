import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const configureStore = () => {

    const middlewares = [historyMiddleware,thunkMiddleware]

    const enhancers = [applyMiddleware(...middlewares)]
    
    const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

    
}

export default configureStore
