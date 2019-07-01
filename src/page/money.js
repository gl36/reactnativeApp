import React, { Component } from 'react';
    import {
        TouchableOpacity,
        StyleSheet,
        Text,
        View,
        Image,
        SectionList
    } from 'react-native';
import { NavigationActions } from 'react-navigation';

  //屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

// 入口
export default class money extends Component {
    constructor(props) {
        super(props);
    }
    mDetaied(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'moneyDetailed',
            params: {
                uid: ''
            },
        });
        this.props.navigation.dispatch(navigateAction);
    }
    allM(){
        alert("全部")
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
                    <Text style={{color:'#fff',width:'50%',fontSize:20}}>钱包</Text>
                    
               </View>
             <View style={styles.contentView}>
                   <Text style={{fontSize:30,color:'#ffffff'}}>{ 9999999.99}元</Text>
             </View>
             <View style={styles.footerView}>
                <View style={{width:'49%',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this.allM()}>
                        <Text style={{color:'#fff',fontSize:18}}>全部</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle}></View>
                <View style={{width:'49%',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this.mDetaied()}>
                        <Text style={{color:'#fff',fontSize:18}}>收入明细</Text>
                    </TouchableOpacity>
                </View>
             </View>
            </View>
          );
        }
    }

    // 样式
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
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