import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'


import Hello from './containers/hello'


ReactDOM.render(
    <AppContainer>
        <Hello />
    </AppContainer>,
    document.getElementById('root')
)

// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}