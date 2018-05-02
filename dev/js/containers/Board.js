import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addNote} from '../actions/NoteActions';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Board extends Component {
     render() {
        return (
             <div id = "board">
                    <i id="addButton" onClick ={() => this.props.addNote()}className="fa fa-plus-circle fa-3x"></i>
            </div>
        );
    }
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addNote: addNote
        },
         dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(matchDispatchToProps)(Board);