import React, { Component } from 'react';
    import {
        TouchableOpacity,
        StyleSheet,
        Text,
        View,
        Image,
        SectionList,
        PermissionsAndroid,
        ToastAndroid,
        NativeModules
    } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import { init,Geolocation } from "react-native-amap-geolocation";
var la=null;
var ln=null;
// 对于 Android 需要自行根据需要申请权限
async function requestCameraPermission() {  
   await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
   await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
}
requestCameraPermission();
 import CommonAndroidUntils from './CommonAndroidUntils';
  //屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');
// 入口
const typeIcon=[{'id':0,'value':"接货中"},
        {'id':1,'value':"待返场"},{'id':2,'value':"待派送"},
        {'id':3,'value':"已派送"},{'id':4,'value':"已完成"}];
export default class orderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude:null,
            longitude:null
        }
    }
    async componentDidMount() {
        CommonAndroidUntils.getResult((location)=>{
            alert(location);
            this.setState({longitude:location.longitude,latitude:location.latitude});
        });
       // geolocationInit();
      //  Geolocation.start();
        // await Geolocation.init({
        //   ios: "",
        //   android: ""
        // })
        // Geolocation.getCurrentPosition(({ coords }) => {
        //     alert(coords);
        //   });
        // Geolocation.setOptions({
        //   interval: 8000,
        //   distanceFilter: 20
        // })
        
        // Geolocation.addLocationListener(location => {
        //   console.log(location);
        //   this.setState({longitude:location.longitude,latitude:location.latitude},function(){
        //   //  Geolocation.stop();
        //   });
        // });
        // Geolocation.start();
    
        // this.listener = AMapLocation.addEventListener(location =>{
        //     this.setState({longitude:location.longitude,latitude:location.latitude},function(){
        //     //  Geolocation.stop();
        //     });
        // });
        // AMapLocation.startLocation({
        //   accuracy: 'HighAccuracy',
        //   killProcess: true,
        //   needDetail: true,
        // });
        // await init({
        //    android: "f9bbf84cf6922d6c80b1ac282ecb1eb8"
        // })
        // await Geolocation.getCurrentPosition(({ location }) => {
        //         //alert(location);
        //         la=location.latitude;
        //         ln=location.longitude;
        //         this.setState({latitude:location.latitude,
        //             longitude:location.longitude},function(){
        //                 //alert(ln);
        //             })
        //       });
        // Geolocation.setOptions({
        //     interval: 60,
        //     distanceFilter: 20,
        //     needDetail:true,
        // })
        // Geolocation.addLocationListener(location =>{
        //     this.show(location)
        //     la=location.latitude;
        //     ln=location.longitude;
        // })
       // Geolocation.start()
      }
      
      componentWillUnmount() {
       // Geolocation.stop();
      }
      
      addressClick=(address)=>{
       fetch('https://restapi.amap.com/v3/place/text?key=027aa6b88f4c6de233a4e793839160ba&keywords='+address+'&types=&city=&children=1&offset=1&page=1&extensions=base')
        .then((response) => response.text())
        .then((responseText) => {
          var responsess=JSON.parse(responseText);
          if("OK"==responsess.info){
            var locat=responsess.pois[0].location;
            var arr=locat.split(',');
            CommonAndroidUntils.show(108.88325,34.22548,parseFloat(arr[0]),parseFloat(arr[1]));
          }
        });
    //   const navigateAction = NavigationActions.navigate({
    //         routeName: 'GDmap',
    //         params: {
    //             address:address
    //             // latitude:this.state.latitude,
    //             // longitude:this.state.longitude
    //         },
    //     });
    //     this.props.navigation.dispatch(navigateAction);
    }
    _renderItem = (info) => {
        var time =info.item.time;
        var yunOrder =info.item.yunOrder;
        var person =info.item.person;
        var tel =info.item.tel;
        var address =info.item.address;
        var typeID=info.item.typeid;
        var ig=require('./../assets/images/jie.png');
        if(typeID=='0' || typeID=='1'){
            ig=require('./../assets/images/jie.png');
        }else if(typeID=='2' || typeID=='3'){
            ig=require('./../assets/images/song.png');
        }else{
            ig=require('./../assets/images/da.png'); 
        }
        
        return  <View style={{flexDirection:'column'}}>
            {/* <TouchableOpacity style={styles.button_view}
                    onPress={this.requestReadPermission.bind(this)}>
                    <Text style={styles.button_text}>申请读写权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_view}
                    onPress={this.requestCarmeraPermission.bind(this)}>
                    <Text style={styles.button_text}>申请相机权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_view}
                    onPress={this.requestLocationPermission.bind(this)}>
                    <Text style={styles.button_text}>申请访问地址权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_view}
                                  onPress={this.checkPermission.bind(this)}>
                    <Text style={styles.button_text}>查询是否获取了读写权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_view}
                                  onPress={this.requestMultiplePermission.bind(this)}>
                    <Text style={styles.button_text}>一次申请所以权限</Text>
                </TouchableOpacity> */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
                         <Text style={styles.itemIcon}>
                         <Image source={ig} style={styles.iconImages}/> 
                            <Text style={{marginLeft:20}}> {time} </Text> 
                        </Text>
                        
                        {typeIcon.map((info, index) => {
                            if(info.id==typeID){
                                if(typeID==0 || typeID==1){
                                    return (
                                        <Text style={styles.itemt0}>{info.value}</Text>
                                        );
                                }else if(typeID==2 || typeID==3){
                                    return (
                                        <Text style={styles.itemt3}>{info.value}</Text>
                                        ); 
                                }else{
                                    return (
                                        <Text style={styles.itemt}>{info.value}</Text>
                                        ); 
                                }
                            }
                        })} 
                    </View> 
                    <View style={{flexDirection:'row',justifyContent:'flex-start',marginRight:10}}>
                        <Text style={styles.itemDD}> {"运单号"} </Text>
                        <Text style={styles.itemt2}>{yunOrder} </Text>
                    </View> 
                    <View style={{flexDirection:'row',justifyContent:'flex-start',marginRight:10}}>
                        <Text style={styles.itemDD}> {"到大联"} </Text>
                        <Text style={styles.itemt}>{yunOrder} </Text>
                    </View> 
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginRight:10}}>
                        <Image source={require('./../assets/images/per.png')} style={styles.iconImages}/> 
                        <Text style={styles.itemPer}>{person} </Text>
                        <Text style={styles.itemt}>{tel} </Text>
                    </View> 
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginRight:10}}>
                        <Image source={require('./../assets/images/hdian.png')} style={styles.iconImages}/> 
                        <TouchableOpacity onPress={()=>this.addressClick(address)}>
                            <Text style={styles.itemt}>{address} </Text>
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.lineStyle}></View>
                </View>
        
    }
    
    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text style={styles.textc}>{txt}</Text>
    }
    goback(){
        const { goBack } = this.props.navigation; //获取navigation的goBack方法
        goBack(); 
    }  
    render() {
        var sections = [
            { key: "06月30日", 
                data: [{ typeid:0,time: "11:39",yunOrder:'2614284225',person:'单明',tel:'139****999',address:'陕西省西安市游泳馆' },
                        { typeid:1,time: "11:12",yunOrder:'2614284225',person:'单明',tel:'139****999',address:'陕西省西安市未央区' }] },
            { key: "06月29日", 
                data: [{ typeid:3,time: "21:39",yunOrder:'2614284225',person:'单明',tel:'139****999',address:'陕西省西安市赛格国际购物中心' }] },
            { key: "06月28日", 
                data: [{ typeid:4,time: "21:39",yunOrder:'2614284225',person:'单明',tel:'139****999',address:'陕西省西安市新丰泰汽车' }] },
            { key: "06月27日", 
                data: [{ typeid:2,time: "21:39",yunOrder:'2614284225',person:'单明',tel:'139****999',address:'陕西省西安市欢乐谷' }] },
        ];
       
          return (
            <View style={styles.container}>
              <View style={styles.headView}>
                    <View style={{marginLeft:5,width:'40%'}}>
                        <TouchableOpacity
                          onPress={() => this.goback()}>
                         <Image source={require('./../assets/images/back.png')} style={styles.itemImages}/> 
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#fff',width:'50%',fontSize:20}}>我的订单</Text>
                    
               </View>
              <SectionList
                renderSectionHeader={this._sectionComp}
                renderItem={this._renderItem}
                sections={sections}
                // ItemSeparatorComponent={() => <View><Text></Text></View>}
                // ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                // ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
              />
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
        iconImages:{
            width:21,
            height:21,
            //resizeMode:'stretch',
            marginLeft:10,
            marginRight:10
        },
        headView:{
            width:width,
            height:50,
            backgroundColor:'#09096d',
            justifyContent:'flex-start',
            alignItems:'center',
            flexDirection: 'row'
        },
        textc:{ 
            height: 40, 
            textAlign: 'center', 
            textAlignVertical: 'center', 
            backgroundColor: '#959da5', 
            color: 'white', 
            fontSize: 20 
        },
        itemIcon:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#5C5C5C', 
            fontSize: 15 ,
            paddingLeft:10
        },
        itemDD:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#5C5C5C', 
            fontSize: 15 ,
            paddingLeft:38
        },
        itemPer:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#5C5C5C', 
            fontSize: 15 ,
            // paddingLeft:10
        },
        itemHong:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#5C5C5C', 
            fontSize: 15 ,
            paddingLeft:10
        },
        itemt:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#5C5C5C', 
            fontSize: 15,
            paddingLeft:10
        },
        itemt0:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#e27c29', 
            fontSize: 15,
            paddingLeft:10
        },
        itemt2:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#5C5C5C', 
            fontSize: 15,
            paddingLeft:10
        },
        itemt3:{
            height: 40, 
            textAlignVertical: 'center', 
            backgroundColor: "#ffffff", 
            color: '#4bdccd', 
            fontSize: 15,
            paddingLeft:10
        },
        lineStyle: {
            // 背景色
            backgroundColor:'#333',
            // 设置尺寸
            width:'100%',
            height:1
        },
        button_view: {
            margin:4,
            borderRadius: 4,
            backgroundColor: '#8d4dfc',
            alignItems: 'center',
        },
        button_text: {
            padding: 6,
            fontSize: 16,
            fontWeight: '600'
        }

    });