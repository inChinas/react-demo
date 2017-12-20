import React, { Component, createFactory } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import styles from './hello.css'

class hello extends Component {
    constructor(props, context){
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <h1 className={styles.title}>hello world</h1>
        )
    }
}

export default hello