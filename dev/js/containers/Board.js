import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Board extends Component {
     render() {
        return (
             <div id = "board">
                    <button type="button" className="btn btn-success">+</button>
            </div>
        );
    }
}

export default Board;