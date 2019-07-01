import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button,AsyncStorage
} from 'react-native';

export default class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          psw: ""
        };
      }

      onChangeName = text => {
        this.setState({ name: text });
      };
    
      onChangePsw = text => {
        this.setState({ psw: text });
      };

    /**
     * 点击空白处使输入框失去焦点
     */
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
    }

    /**
     * 登陆按钮，点击时验证输入的用户名和密码是否正确，正确时进入主页面，否则弹出提示
     */
    login =  async () => {
        if (this.state.name != null && this.state.name != "") {
            if (this.state.psw != null && this.state.psw != "") {
              await AsyncStorage.setItem("name", this.state.name);
              await AsyncStorage.setItem("psw", this.state.psw);
      
              this.props.navigation.navigate("home");
            } else {
              Alert.alert("密码不能为空");
            }
        } else {
        Alert.alert("帐号不能为空");
        }
    };

    /**
     * 注册按钮，点击进入注册界面
     */
    register = () => {
        this.props.navigation.navigate('Register');  //跳转到注册过的Register界面
    }

    render() {
        return (
            <TouchableOpacity  //用可点击的组件作为背景
                activeOpacity={1.0}  //设置背景被点击时的透明度改变值
                onPress={this.blurTextInput}  //添加点击事件
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="username"  //设置描述
                        onChangeText={this.onChangeName}
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'请输入用户名'}  //设置占位符
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="password"  //设置描述
                        onChangeText={this.onChangePsw}
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        secureTextEntry={true}  //设置为密码输入框
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'请输入密码'}  //设置占位符
                    />
                </View>
                <TouchableOpacity
                    onPress={this.login} //添加点击事件
                    style={styles.button}>
                    <Text style={styles.btText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.register}  //添加点击事件
                    style={styles.button}>
                    <Text  style={styles.btText}>注册</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});