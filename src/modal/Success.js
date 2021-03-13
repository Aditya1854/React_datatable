import React from 'react';
import './index.css';
import  'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Success extends React.Component {

    render() {
        return (<div className = "success">{this.props.mesg}</div>)
    }
}