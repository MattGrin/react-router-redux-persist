import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as myActions from '../actions/count'

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    Links:
                    <ul>
                        <li><Link to="/count">count</Link></li>
                        <li><Link to="/display">display</Link></li>
                    </ ul>
                </header>
            </div>
        )
    }
}

const mapState = (state) => ({
    count: state.count
})

const mapDispatch = (dispatch) => ({
    actions: bindActionCreators(myActions, dispatch)
})

export default connect(mapState, mapDispatch)(Home)