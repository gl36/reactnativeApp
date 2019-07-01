import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Platform
  } from 'react-native';

class TWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      isMargin: this.props.isMargin,
      isShowErrorPage: false,
      isNearBy: this.props.isNearBy,
      isWeather: this.props.isWeather,
      address:this.props.address
    };
  }
  webViewLoaded = () => {
    this.refs.webViewRef.postMessage(this.state.address);
  }
  render(){
    //let url = {uri: this.state.url};
    const source = (Platform.OS == 'ios') ? require('./../html/nearby.html') : 
    { uri: 'file:///android_asset/nearby.html' }
    return(
      <View style={styles.container}>
        {
          this.state.isShowErrorPage?
            <View style={styles.textView}>
              <Text style={styles.text}>不好意思,请检查网络连接情况或者报告错误</Text>
            </View>
            :
            <WebView
              ref="webViewRef"
              style={[styles.container,{marginTop: this.state.isMargin || -20}]}
              startInLoadingState={true}
              onError={this._loadError.bind(this)}
              onLoadEnd={this.webViewLoaded}
              source={source}
              onMessage={(event) => {console.log(event.nativeEvent.data);}}
              >
            </WebView>
        }
      </View>
    );
  }

  _loadError(){
    this.setState({
      isShowErrorPage: true
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    fontSize:16,
    fontWeight:'300'
  },
  textView:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
});

module.exports = TWebView;