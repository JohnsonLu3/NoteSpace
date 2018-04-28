var Footer = React.createClass({
        render: function(){
        return(
            <div>
                <a href="https://github.com/JohnsonLu3"><h1>created by Johnson Lu with React.js </h1></a>
                <a href="https://reactjs.org/"><img src="./img/react.png" id="reactIco"/></a>
            </div>
        );
    }

});

ReactDOM.render(<Footer />, document.getElementById('footer'));