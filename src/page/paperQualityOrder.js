import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';    
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';
  //屏幕信息
  const dimensions = require('Dimensions');
  //获取屏幕的宽度和高度
  const {width, height} = dimensions.get('window');
export default class paperQualityOrder extends Component{
    constructor(props){
        super(props);
            // 初始化数据源
        this.state={
            form: {
                fullName: '',
                tos: false,
                }
        }
    }
    handleValueChange(values) {
        console.log('handleValueChange', values)
        this.setState({ form: values })
    }
    updateTel=()=>{
        alert("tel");
    }    
    onSelectOne(e){
        alert(e);
    }
    render(){
        const { navigate } = this.props.navigation;
        const { fullName, tos, gender } = this.state.form
        return(
            <View style={styles.center}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:20}}>短信号码</Text>
                    <TextInput
                            ref="username"  //设置描述
                            onChangeText={this.onChangeName}
                            style={styles.input}
                            autoCapitalize='none'  //设置首字母不自动大写
                            underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                            placeholderTextColor={'#ccc'}  //设置占位符颜色
                            placeholder={'请输入用户名'}  //设置占位符
                        />
                    <TouchableOpacity
                    // onPress={this.register}  //添加点击事件
                        style={styles.button}>
                        <Text  style={styles.btText}>修改</Text>
                    </TouchableOpacity>
                </View>
                <GiftedForm
                        formName='signupForm'
                        openModal={(route) => { navigate.push(route) }}
                        onValueChange={this.handleValueChange.bind(this)}
                    >
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
                            <GiftedForm.TextInputWidget
                                name='fullName'
                                title='短信号码'
                                placeholder=''
                                clearButtonMode='while-editing'
                                value={fullName}
                                style={{width:200}}
                            />
                            <TouchableOpacity
                                onPress={this.updateTel}  //添加点击事件
                                style={styles.button}>
                                <Text  style={styles.btText}>修改</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
                        <Text style={{fontSize:20}}>营业部</Text>
                        <ModalDropdown 
                            options={['option 1', 'option 2']}
                            onSelect={(e)=>this.onSelectOne(e)}
                           
                        />
                            <TouchableOpacity
                                onPress={this.updateTel}  //添加点击事件
                                style={styles.button}>
                                <Text  style={styles.btText}>设置</Text>
                            </TouchableOpacity>
                        </View> 
                        <GiftedForm.HiddenWidget name='tos' value={tos} />
                    </GiftedForm>
             </View>
        );
    }
}
const styles = StyleSheet.create({
    center:{
        flex:1,
        width:width,
        //justifyContent:'space-between',
        //alignItems:'flex-start',
    },
    red:{
        color:'#f00',
    },
    button: {
        height: 30,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#58812F',
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    },
    input: {
        width: 200,
        height: 50,
        fontSize: 20,
        color: '#fff',//输入框输入的文本为白色
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginBottom: 8,
    },
})