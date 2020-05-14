import {Provider} from "react-redux"
import {createStore} from "redux"
import React from "react"
import reducers from "reducers"

export default ({children,initialState={}}) => {
    return(
        <Provider store={createStore(reducers,initialState)}>
            {children}
        </Provider>
    )
}