import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addNote} from '../actions/NoteActions';
import {clearNotes} from '../actions/NoteActions';

class Board extends Component {

     render() {
        return (
             <div id = "board">
                    <i id="clearButton" onClick ={() => {
                                    if (confirm("You are about to clear the whole board, are you sure?")) {
                                        return(this.props.clearNotes());
                                    }
                        }} className="fa fa-minus-circle fa-3x"></i>
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
            addNote: addNote,
            clearNotes: clearNotes
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Board);
