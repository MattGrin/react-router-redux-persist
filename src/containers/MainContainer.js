import React, { Component } from 'react'
import { Route } from 'react-router'
import {Counter, Home, Display} from '../components'

export default class MainContainer extends Component {
    render() {
        return (
            <div>
              <Route exact path="/" component={ Home }/>
              <Route path="/count" component={ Counter }/>
              <Route path="/display" component={ Display }/>
            </div>
        )
    }
}
