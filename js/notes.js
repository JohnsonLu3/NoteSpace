var Note = React.createClass({

    getInitialState: function(){
        return{
            color : '#b6e5e6',
            isEditing : false
        };
    },

    toggleEdit : function(){
        this.setState({isEditing : !this.state.isEditing});
    },

    edit : function(){
        this.toggleEdit();
    },

    delete : function(){

    },

    move : function(){

    },

    save : function(){
        this.toggleEdit();
    },

    renderNote : function(){
        <div className = "noteContainer">
            <button onClick={this.edit}>edit</button>
            <button onClick={this.delete}>del</button>   
            <h2 className = "noteHeader">{this.props.children}</h2>
            <p className = "noteText">{this.props.children}</p>
        </div>
    },

    renderEdit : function(){

    },

    render : function(){
        if(!this.state.isEditing){
            return this.renderNote();
        }else{
            return this.renderEdit();
        }
    }

});