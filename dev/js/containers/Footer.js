export default Header;
import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Header extends Component {
     render() {
        return (
             <div>
                <a href="https://github.com/JohnsonLu3"><h1>created by Johnson Lu with React.js </h1></a>
                <a href="https://reactjs.org/"><img src="./img/react.png" id="reactIco"/></a>
            </div>
        );
    }
}
