import React, {Component} from 'react';
import {connect} from 'react-redux';

class Note extends Component {

     renderNote(){
         return this.props.notes.map((note) => {
             return (
                <div className="Note" key={note.id}>
                    <div className = "editButtons">
                        <button>edit</button>
                        <button>del</button>
                    </div>
                    <div className="noteContents">
                        <h2>{note.Header}</h2>
                        <p>{note.Body}</p>
                    </div>
                </div>
            );
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

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({selectUser: selectUser}, dispatch);
// }

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(Note);
