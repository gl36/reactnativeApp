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
export default class electronicsOrder extends Component{
        constructor(props){
            super(props);
             // 初始化数据源
            this.state={
                title : this.props.tabLabel,
            }
        }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.center}>
                <Text style={[{fontSize:20},styles.red]}>我是电子</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    red:{
        color:'#f00',
    },
})