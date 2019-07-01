import React, { Component } from 'react';
    import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        Image,
        Raido
    } from 'react-native';

    // 导入Dimensions库
    var Dimensions = require('Dimensions');

    // 入口
 export default class personMore extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* 因为还没讲到listView,这边就用View代表Cell*/}
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>头像</Text>
                    <Image source={require('./../assets/images/nh.jpg')} style={styles.imgStyle}></Image>
                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>姓名</Text>
                    <Text style={styles.valueStyle}>单明</Text>
                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>工号</Text>
                    <Text style={styles.valueStyle}>00000</Text>

                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>身份证号</Text>
                    <Text style={styles.valueStyle}>6000021515021536120</Text>

                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>初次领取驾照日期</Text>
                    <Text style={styles.valueStyle}>2003-12-31</Text>

                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>手机号</Text>
                    <Text style={styles.valueStyle}>139****9999</Text>

                </View>
                {/* 分隔线 */}
                {/* <View style={styles.lineStyle}></View> */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>车牌号</Text>
                    <Text style={styles.valueStyle}>陕A80901</Text>

                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>车型</Text>
                    <Text style={styles.valueStyle}>小型货车</Text>

                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>车辆所有人</Text>
                    <Text style={styles.valueStyle}>单明</Text>

                </View>
                {/* 分隔线 */}
                <View style={styles.lineStyle}></View>
                <View style={styles.cellStyle}>
                    <Text style={styles.nameStyle}>行驶证日期</Text>
                    <Text style={styles.valueStyle}>2019-12-31</Text>
                </View>
                <View style={styles.lineStyle}></View>
            </View>
            );
        }
    }

    // 样式
    const styles = StyleSheet.create({
        container: {
            backgroundColor:'white',
            flex:1,
            // 设置换行方式
            flexWrap:'wrap'
        },

        cellStyle: {
            // 尺寸
            height:50,
            width:Dimensions.get('window').width,
            // 设置背景颜色
            backgroundColor:'white',
            // 设置主轴方向
            flexDirection:'row',
            // 设置侧轴对齐方式
            alignItems:'center',
            justifyContent:'space-between'
        },

        imgStyle: {
            width:30,
            height:30,
            // 设置图片填充模式
            resizeMode:'cover',
            // 设置圆角
            borderRadius:15,
            marginRight:10

        },

        nameStyle: {
            // 设置昵称位置
            marginLeft:10,
        },
        valueStyle: {
            // 设置昵称位置
            marginRight:10
        },
        lineStyle: {
            // 背景色
            backgroundColor:'#333',
            // 设置尺寸
            width:'100%',
            height:1
        }

    });