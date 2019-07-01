import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Platform
  } from 'react-native';
  
class AWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      isMargin: this.props.isMargin,
      isShowErrorPage: false,
      address:this.props.address!=undefined?this.props.address:this.props.navigation.state.params.address,
      latitude:this.props.latitude!=undefined?this.props.latitude:this.props.navigation.state.params.latitude,
      longitude:this.props.longitude!=undefined?this.props.longitude:this.props.navigation.state.params.longitude
    };
  }
  
  
  webViewLoaded = () => {
    var newValue=this.state.address+"||"+this.state.longitude+"||"+this.state.latitude;
    const data={
      address:this.state.address,
      longitude:this.state.longitude,
      latitude:this.state.latitude
    }
    this.refs.webViewRef.postMessage(JSON.stringify(data));
  }
  render(){
    const source = (Platform.OS == 'ios') ? require('./../../html/nearby.html') : 
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
              onMessage={(event) => {alert(event.nativeEvent.data);}}
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

module.exports = AWebView;