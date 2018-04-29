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
                <h1>NoteSpace</h1>
            </div>
        );
    }
}
