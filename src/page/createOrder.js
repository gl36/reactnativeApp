import React, { Component } from 'react';
    import {
        AppRegistry,
        Navigator,
        TouchableOpacity,
        StyleSheet,
        Text,
        View,
        Image
    } from 'react-native';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import ElectronicsOrder from './electronicsOrder';
import PaperQuality from './paperQualityOrder';
  //屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

// 入口
export default class createOrder extends Component {
    constructor(props) {
        super(props);
    }
    
    goback(){
        const { goBack } = this.props.navigation; //获取navigation的goBack方法
        goBack(); 
    }  
    render() {
        
          return (
            <View style={styles.container}>
                <View style={styles.headView}>
                        <View style={{marginLeft:5,width:'40%'}}>
                            <TouchableOpacity
                            onPress={() => this.goback()}>
                            <Image source={require('./../assets/images/back.png')} style={styles.itemImages}/> 
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:'#fff',width:'50%',fontSize:20}}>创建订单</Text>
                        
                </View>
                <View style={{flex: 1}}>
                    <ScrollableTabView style={{backgroundColor:'#fff'}}
                        tabBarInactiveTextColor="#707070"//未选中状态下tabLabel文字的颜色
                        tabBarActiveTextColor="#27B5EE"//选中状态下tabLabel文字的颜色
                        locked={false}//如果为ture，左右滑动时页面无法切换，只能通过点击tabLabel切换
                        tabBarBackgroundColor = "white" //tabLabel的背景色
                        tabBarUnderlineStyle = {{backgroundColor:'#00aeee',height:2,}}//tabLabel下面下划线的样式
                        >
                        <PaperQuality tabLabel = "纸质面单" {...this.props}></PaperQuality>
                        <ElectronicsOrder tabLabel = "电子面单" {...this.props}></ElectronicsOrder>
                    </ScrollableTabView>
             </View>
            </View>
          );
        }
    }

   
    // 样式
    const styles = StyleSheet.create({
        container: {
            // backgroundColor: 'white',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
           // alignItems: 'stretch',
        },
        red:{
            color:'#f00',
        },
        itemImages:{
            width:21,
            height:21,
            resizeMode:'stretch'
        },
        headView:{
            width:width,
            height:50,
            backgroundColor:'#09096d',
            justifyContent:'flex-start',
            alignItems:'center',
            flexDirection: 'row'
        },
        contentView:{
            backgroundColor:'#333',
            height:300,
            justifyContent:'space-around',
            alignItems:'center'
        },
        footerView:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            height:50,
            backgroundColor:'#09096d'
        },
        lineStyle: {
            backgroundColor:'#fff',
            width:2,
            height:'100%'
        }

    });