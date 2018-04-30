import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Board extends Component {
     render() {
        return (
             <div id = "board">
                    <i id="addButton" className="fa fa-plus-circle fa-3x"></i>
            </div>
        );
    }
}

export default Board;