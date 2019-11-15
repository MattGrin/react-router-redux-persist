import React from 'react'
import { connect } from 'react-redux'
import {increase, decrease} from '../actions/count'

class Counter extends React.Component {
    render() {
        const { count, increase, decrease } = this.props;
        return (
            <div>
                changes:
                {count.number}
                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>
            </div>
        )
    }
}

const mapState = (state) => ({
    count: state.count
});

export default connect(mapState, {increase, decrease})(Counter);