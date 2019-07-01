import React, { Component } from 'react';
import {
        TouchableOpacity,
        StyleSheet,
        Text,
        View,
        Image,
        Platform
    } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Echarts from 'native-echarts';

  //屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

// 入口
export default class moneyDetailed extends Component {
    constructor(props) {
        super(props);
    }
     //初始变量
     state = {
        pcData: [300, 500, 150, 450, 562, 400,521],
        xData: ['周一','周二','周三','周四','周五','周六','周日'],
        mData: [300, 500, 150, 450, 562],
        xmData: ['第一周','第二周','第三周','第四周','第五周']

    };
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
        const option = {
            tooltip: {
                show: false,
                trigger: 'axis'
            },
            // legend: {
            //     data: ['笔记本']
            // },
            toolbox: {
                show: false,
                showTitle: true,
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        type: ['line', 'bar', 'stack', 'tiled'],
                    },
                    restore: {show: true}
                }
            },
            xAxis: [
                {
                   // boundaryGap: true,
                    type: 'category',
                    // name: '月份',
                    data: this.state.xData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '本周收入(元)'
                },
                {
                    type: 'value',
                    scale: true,
                    name: '2888.50'
                }
            ],
            color: ['blue'],
            series: [
                {
                    name: '笔记本',
                    type: 'bar',
                    barWidth: 20,
                    data: this.state.pcData
                }
            ]
        };
        const optionM = {
            tooltip: {
                show: false,
                trigger: 'axism'
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.state.xmData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '本月收入(元)'
                },
                {
                    type: 'value',
                    scale: true,
                    name: '12888.50'
                }
            ],
            color: ['blue'],
            series: [
                {
                    name: '收入',
                    type: 'bar',
                    barWidth: 20,
                    data: this.state.mData
                }
            ]
        };
        return (
            <View style={styles.container}>
              <View style={styles.headView}>
                    <View style={{marginLeft:5,width:'40%'}}>
                        <TouchableOpacity
                          onPress={() => this.goback()}>
                         <Image source={require('./../assets/images/back.png')} style={styles.itemImages}/> 
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#fff',width:'50%',fontSize:20}}>收入明细</Text>
                    
               </View>
             <View style={styles.contentView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>本周收入统计</Text>
                </View>
                <Echarts option={option} height={300}/>
             </View>
             <View style={styles.lineStyle}></View>
             <View style={styles.footerView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>本月收入统计</Text>
                </View>
                <Echarts option={optionM} height={300}/>
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
            justifyContent: 'space-between',
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
            width:width,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        },
        footerView:{
            width:width,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        },
        lineStyle: {
            backgroundColor:'#333',
            width:'100%',
            height:2
        },
        titleView: {
            width:'100%',
            height: Platform.OS === 'ios' ? 64 : 34,
            paddingTop: Platform.OS === 'ios' ? 14 : 0,
            backgroundColor: '#4a65ff',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        title: {
            color: 'white',
            fontSize: 15,
            textAlign: 'center'
        },
    });