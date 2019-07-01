import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import TWebView from './webview';

const nearByURL = 'http://127.0.0.1:8081/html/nearby.html';
//const nearByURL = './../html/nearby.html';

class ToiletPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      address:this.props.address!=undefined?this.props.address:this.props.navigation.state.params.address
    };
  }
  render(){
    return(<TWebView url={nearByURL} isNearBy={true} address={this.state.address}/>);
  }
}

module.exports = ToiletPage;