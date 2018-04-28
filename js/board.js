var Board = React.createClass({
    getInitialState: function(){
        return{
            notes:[
                ("hello", "World")
            ]
        }
    },

    removeNote: function(){

    },

    editNote: function(){

    },

    addNote: function(){

    },

    displayNotes: function(note, i){
        return(
            <Note key={i} index={i} editNote={this.editNote} removeNote={this.removeNote}>
                hello
            </Note>
        );
    },

    render: function(){
        return(
            <div>
                {this.state.notes.map(this.displayNotes)}
            </div>
        );
    }

});

ReactDOM.render(<Board />, document.getElementById('board'));