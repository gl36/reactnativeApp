import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Animated,
    Easing,
} from 'react-native';
import { RNCamera } from 'react-native-camera'
//图片选择器
var ImagePicker = require('react-native-image-picker');
//图片选择器参数设置
var options = {
  title: '请选择图片来源',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'相册图片',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
     
export default class electronicsOrder extends Component{
        constructor(props){
            super(props);
             // 初始化数据源
            this.state={
                title : this.props.tabLabel,
                avatarSource: null,
                textval:null,
                viewAppear:false,
                moveAnim: new Animated.Value(0)
            }
        }
        componentDidMount() {
            //this.startAnimation();
        }
        startAnimation = () => {
            this.state.moveAnim.setValue(0);
            Animated.timing(
                this.state.moveAnim,
                {
                    toValue: -200,
                    duration: 1500,
                    easing: Easing.linear
                }
            ).start(() => this.startAnimation());
        };
        //  识别二维码
        onBarCodeRead = (result) => {
            const { navigate } = this.props.navigation;
            const {data} = result;
            if(data!=null && data!=''){
                this.setState({textval:data,viewAppear:false},function(){
                
                });
            }
                // navigate('createOrder', {
                //     url: data
                // })
        };
    //选择照片按钮点击
   choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
            console.log('用户取消了选择！');
            }
            else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            }
            else if (response.customButton) {
                alert("自定义按钮点击：" + response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    beginSaoMiao(){
        if(null!=this.state.avatarSource){
            alert("点击事件");
        }else{
            this.setState({viewAppear: true},function(){
                this.startAnimation();
            });
        }
    }    
    render(){
        return(
             <View style={styles.container}>
                <Text style={[{fontSize:20},styles.red]}>
                    {this.state.textval==null?'我是电子':this.state.textval}</Text>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                <Image source={this.state.avatarSource} style={styles.image} />
                <TouchableOpacity onPress={()=>this.beginSaoMiao()}>
                    <Text style={{fontSize:20,alignItems:'center'}}>获取图片中运单单号</Text>
                </TouchableOpacity>

                {this.state.viewAppear ?
                    <View style={{flex: 1, backgroundColor: 'black',}}> 
                   
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            onBarCodeRead={this.onBarCodeRead}
                        >
                            <View style={styles.rectangleContainer}>
                                <View style={styles.rectangle}/>
                                <Animated.View style={[
                                    styles.border,
                                    {transform: [{translateY: this.state.moveAnim}]}]}/>
                                <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                            </View>
                        </RNCamera>
                    </View>: null
                    }
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
    container:{
        flex: 1,
        marginTop:25,
        backgroundColor: '#F5FCFF',
        // justifyContent: 'center',
        // alignItems: 'center',
       // flexDirection: 'row'
      },
      item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
      },
      image:{
       height:198,
       width:300,
       alignSelf:'center',
     },
     welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    }
});