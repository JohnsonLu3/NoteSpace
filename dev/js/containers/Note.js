import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {editNote} from '../actions/NoteActions';
import {removeNote} from '../actions/NoteActions';
import {saveEdit} from '../actions/NoteActions';
import {cancelEdit} from '../actions/NoteActions';


class Note extends Component {
    
    changeColor(val, note){
        note.Color = val;
    }

    editModel(note){
        return (
                <div className="Note" key={note.id} style={{backgroundColor: note.Color}}>
                    <div className = "editButtons">
                        <i className="fa fa-check fa-2x" onClick={() => this.props.saveEdit(note)}></i>
                        <i className="fa fa-ban fa-2x" onClick={() => this.props.cancelEdit(note)}></i>
                    </div>
                    <div className="noteContents">
                        <textarea  rows="1" defaultValue={note.Header}></textarea>
                        <textarea  rows="5" defaultValue={note.Body}></textarea>
                    </div>
                    <div>
                    <input type="color" name="noteColor" value={note.Color} onChange={this.changeColor(this.value, note)}/>

                    </div>
                </div>
        );
    }

    noteModel(note){
        return (
                <div className="Note" key={note.id} style={{backgroundColor: note.Color}}>
                    <div className = "editButtons">
                        <i className="fa fa-edit fa-2x" onClick={() => this.props.editNote(note)}></i>
                        <i className="fa fa-trash fa-2x" onClick={() => this.props.removeNote(note)}></i>
                    </div>
                    <div className="noteContents">
                        <h2>{note.Header}</h2>
                        <p>{note.Body}</p>
                    </div>
                </div>
            );
    }

     renderNote(){  
         return this.props.notes.map((note) => {
             if(note.EditMode){
                return(this.editModel(note))
             }else{
                return(this.noteModel(note))
             }
        });
     }

     render() {
        return(
            <div>
                {this.renderNote()}
            </div>
        ); 
    }
}

// Get apps state and pass it as props to notes
//      > whenever state changes, the notes will automatically re-render
function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            editNote: editNote,
            removeNote: removeNote,
            saveEdit: saveEdit,
            cancelEdit: cancelEdit
        },
         dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(Note);
