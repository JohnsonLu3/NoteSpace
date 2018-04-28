var Header = React.createClass({
        render: function(){
        return(
            <div>
                <h1>NoteSpace</h1>
            </div>
        );
    }

});

ReactDOM.render(<Header />, document.getElementById('header'));