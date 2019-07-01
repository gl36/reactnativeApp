import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
  } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import Util from './util';
import Help from './setting/help';
import Detail from './setting/detail';
import Tips from './setting/tips';
//import About from './setting/about';
class SettingView extends Component{
  constructor(props) {
    super(props);
  }
  _showHelp(){
    this.props.navigator.push({
      component: Help,
      title: '帮助中心',
      barTintColor: '#fff'
    });
  }
  _Logout= async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Log');
  };
  _showTips(){
    this.props.navigator.push({
      component: Tips,
      title: '服务条款',
      barTintColor: '#fff'
    });
  }

  _showAbout(){
    Alert.alert('如有问题,联系', 'wlhmyit@126.com', [{text: '确认'}]);
    //this.props.navigator.push({
    //  component: About,
    //  title: '关于',
    //  barTintColor: '#fff'
    //});
  }

  _showDetail(){
    this.props.navigator.push({
      component: Detail,
      title: '功能介绍',
      barTintColor: '#fff'
    });
  }
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.bg}>
          <Text style={{fontSize:18,color:'#fff',marginTop:10,fontWeight:'bold'}}>
            设置
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
            {/* <Image style={styles.icon} source={require('image!logo')} resizeMode="contain"/> */}
            <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
          </View>
          <TouchableOpacity onPress={this._showDetail.bind(this)}>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showHelp.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showTips.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>服务条款</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showAbout.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>关于</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._Logout}>
            <View style={styles.item}>
              <Text style={styles.text}>退出</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default class Setting extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Navigator
        style={styles.container}
        initialRoute={{
          component: SettingView,
          title: '设置',
          navigationBarHidden: true
        }}
        renderScene={
          (route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} navigation={this.props.navigation} />
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: Util.pixel,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:88,
    height:100
  }
});