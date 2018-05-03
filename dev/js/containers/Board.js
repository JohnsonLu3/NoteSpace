import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addNote} from '../actions/NoteActions';

class Board extends Component {
     render() {
        return (
             <div id = "board">
                    <i id="addButton" onClick ={() => this.props.addNote()} className="fa fa-plus-circle fa-3x"></i>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes,
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addNote: addNote
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Board);
