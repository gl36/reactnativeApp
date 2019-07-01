import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, FlatList, Image,
    Button,ListView
} from 'react-native';

//导入json数据
// var newData = require('./BadgeData.json');
import newData  from './BadgeData.js';

//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');
var cols = 3;
var boxW = 100;
var vMargin = (width-cols*boxW)/(cols+1);
var hMargin = 25;

export default class PersonView extends Component {
    constructor(props){
        super(props);
         // 初始化数据源
         var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
         
        this.state={
            dataSource : ds.cloneWithRows(newData.data)
        }
    }
   
    updateImg(navigation){
        alert("马上出车")
    }
    goback(){
        const { goBack } = this.props.navigation; //获取navigation的goBack方法
        goBack(); 
    }
    onPressSetting(navigation){
        
        this.setState({waiting: true});
        navigation.navigate('setting');
        setTimeout(()=> {
            this.setState({waiting: false})
        }, 3000);
    }
    personmore(navigation){
        
        this.setState({waiting: true});
        navigation.navigate('personMore');
        setTimeout(()=> {
            this.setState({waiting: false})
        }, 3000);
    }
        
    
    goOrderList(navigation){
        navigation.navigate('orderList');
    }
    money(navigation){
        navigation.navigate('money');
    }

    itemcolick(navigation,v){
        if(v=="创建订单"){
            navigation.navigate('createOrder');
        }else{
            //navigation.navigate('GDmap');
            //alert(v);
        }
    }
     // 返回一个Item
     renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>this.itemcolick(this.props.navigation,rowData.title)}>
                <View style={styles.itemStyle}>
                        <Image source={rowData.icon} style={styles.itemImageStyle}></Image>
                        {/* <Image source={{uri:rowData.icon}} style={styles.itemImageStyle}/> */}
                        <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.headers}>
                   <View style={styles.headView}>
                        <View style={{marginLeft:5}}>
                            <TouchableOpacity
                                onPress={() => this.goback()}>
                                <Image source={require('./../assets/images/back.png')} style={styles.itemImages}/> 
                            </TouchableOpacity>
                        </View>
                    
                        <View style={{marginRight:5}}>
                            <TouchableOpacity
                            onPress={() => this.onPressSetting(this.props.navigation)}>
                                <Text style={{color:'#fff',fontSize:20}}>设置</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cellStyle}>
                        <TouchableOpacity  onPress={() => this.updateImg(this.props.navigation)}>
                             <Image source={require('./../assets/images/nh.jpg')} style={styles.imgStyle}></Image>
                        </TouchableOpacity>
                        <View style={styles.cowStyle}> 
                            <Text style={styles.nameStyle}>单 明</Text>
                            <TouchableOpacity
                                onPress={() => this.personmore(this.props.navigation)}>
                                <Text style={styles.ziliaoStyle}>查看个人资料 
                                    <Image source={require('./../assets/images/jiantouyou.png')} style={{width:20,height:20}}/>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View  style={styles.contentView}>
                    <View style={{borderColor:'#676262',borderWidth:1,width:'50%',alignItems:'center',marginTop:5}}>
                        <TouchableOpacity onPress={() => this.goOrderList(this.props.navigation)}>
                            <Image source={require('./../assets/images/orders.png')} style={styles.Images}/> 
                            <Text style={{marginLeft:3}}>我的订单</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style={{borderColor:'#676262',borderWidth:1,borderLeftWidth:0,width:'50%',alignItems:'center',marginTop:5}}>
                        <TouchableOpacity onPress={() => this.money(this.props.navigation)}>
                            <Image source={require('./../assets/images/moneyCard.png')} style={styles.Images}/>
                            <Text style={{marginLeft:3}}>我的钱包</Text>
                         </TouchableOpacity>
                    </View>
                </View>
               
                <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        contentContainerStyle={styles.contentViewStyle}
                    />
               
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    headers:{
        width:width,
        height:220,
        backgroundColor:'#09096d',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'column'
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
        height:120,
         //横向
        flexDirection:'row',
        //换行显示
        flexWrap:'wrap'
    },
    footerView:{
         //横向
        flexDirection:'row',
        //换行显示
        flexWrap:'wrap',
        width:width,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2
    },
    contentViewStyle: {
        height:'100%',
        // 主轴方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap',
        borderWidth:1
    },
    
    Images:{
        width:60,
        height:60,
        resizeMode:'stretch',
        top:15,
        marginBottom:15,
    }, 
    itemImages:{
        width:21,
        height:21,
        resizeMode:'stretch'
    },
    cellStyle: {
        top:50,
        height:44,
        width:width,
        marginLeft:200,
        // 设置主轴方向
        flexDirection:'row',
        // 设置侧轴对齐方式
        alignItems:'center'
    },

    imgStyle: {
        width:80,
        height:80,
        // 设置图片填充模式
        resizeMode:'cover',
        // 设置圆角
        borderRadius:40,
        // 设置图片位置
        marginLeft:10
    },
    nameStyle: {
        // 设置昵称位置
        marginLeft:10,
        fontSize:20,
        color:'#fff'
    },
    ziliaoStyle: {
        // 设置昵称位置
        marginLeft:10,
        fontSize:16,
        color:'#fff'
    },
    cowStyle: {
       marginLeft:0,
        // 设置主轴方向
        flexDirection:'column',
        // 设置侧轴对齐方式
        alignItems:'stretch'
    },
    itemStyle: {
        // 对齐方式
        alignItems:'center',
        justifyContent:'center',
        // 尺寸
        width:boxW,
        height:boxW,
        // 左边距
        marginLeft:vMargin,
        marginTop:hMargin
    },

    itemImageStyle: {
        // 尺寸
        width:60,
        height:60,
        // 间距
        marginBottom:5
    } 
});