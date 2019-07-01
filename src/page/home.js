import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, FlatList, Image,
    Button
} from 'react-native';

import { NavigationActions } from 'react-navigation';

//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

export default class HomeView extends Component {
    static navigationOptions = () => ({
            headerTitle: "首页",
        }
    );

    constructor(props){
        super(props);

        //当前页
        this.page = 1
        //状态
        this.state = {
            // 列表数据结构
            data:[],
            // 下拉刷新
            isRefresh:false,
            // 加载更多
            isLoadMore:false
        }
    }
   
    /**
     * 创建布局
     */
    _createListItem(item){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => this._onItemClick(item)}>
                <View style={styles.itemText}>
                    {/* <Image source={{uri:item.logo_url}} style={styles.itemImages}/> */}
                    <Text>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    onPressLearnMore(){
        alert("马上出车")

    }
    onPressPerson(){
        this.props.navigation.navigate("person");
    }
    onPressMessage(){
        alert("更多消息")
    }
    render() {
        return (
            <View
                style={styles.container}
            >
               <View style={styles.headView}>
                    <View style={{marginLeft:5}}>
                    <TouchableOpacity
                         onPress={() => this.onPressPerson()}>
                        <Image source={require('./../assets/images/person.png')} style={styles.itemImages}/> 
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#fff'}}>首页</Text>
                    <View style={{marginRight:5}}>
                        <TouchableOpacity
                         onPress={() => this.onPressMessage()}>
                        <Image source={require('./../assets/images/messages.png')} style={styles.itemImages}/> 
                        </TouchableOpacity>
                    </View>
               </View>
                <View  style={styles.contentView}>
                    <Image source={require('./../assets/images/car.png')} style={styles.Images}/> 
                    <Text style={styles.messageText}>暂无新消息</Text>    
                </View>
               <View style={styles.footerView}>
                <View
                    style={styles.buttonButomCar}>
                    <Text style={styles.btText}>车辆</Text>
                </View>
                <TouchableOpacity
                    onPress={() => this.onPressLearnMore()}
                    style={styles.buttonButomGo}>
                    <Text style={styles.btText}>点击出车</Text>
                </TouchableOpacity>
                 
            </View>
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    headView:{
        width:width,
        height:50,
        backgroundColor:'#09096d',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row'
    },
    contentView:{

    },
    footerView:{
        flexDirection: 'row',
        width:width,
        height:60,
        backgroundColor:'#09096d',
        justifyContent:'center',
        alignItems:'center'
    },
    messageText:{
        color:'#707070',
        fontSize:20,
        textAlign:'center',
        paddingTop:10
    },
    buttonButomCar:{
       height:40,
       width:'15%',
       marginLeft:30,
       color:"#999",
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 8,
       backgroundColor: '#999',
    },
    buttonButomGo:{
        height:40,
        marginLeft:10,
        marginRight:30,
        color:"#ff7902",
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#ff7902',
     },
    btText: {
        color: '#fff',
        fontSize: 20,
    },
    itemImages:{
        width:21,
        height:21,
        resizeMode:'stretch'
    },
    Images:{
        width:100,
        height:100,
        resizeMode:'stretch',
        marginLeft:180,
        marginRight:180
    }
});