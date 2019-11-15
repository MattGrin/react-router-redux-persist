import React, { Component } from 'react'
import { connect } from 'react-redux'

class Display extends Component {
    render() {
        const { count } = this.props

        return (
            <div style={{ width: "300px", marginLeft: "200px" }} >
                { count.number }
            </div>
        )
    }
}

const mapState = (state) => ({
    count: state.count
})

export default connect(mapState, {})(Display)