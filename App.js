import React, { Component } from "react";
import { View, AsyncStorage, Text} from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createTabNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

//引入三个界面文件，并设置引入的类
import HomeScene from './src/page/homeScene';
import LoginScene from './src/page/LoginScene';
import RegisterScene from './src/page/registerScene';
import GDmapScene from './src/page/GDmapScene';
import ToiletPage from './android_views/toiletPage';

import home from './src/page/home';
import person from './src/page/person';
import money from './src/page/money';
import moneyDetailed from './src/page/moneyDetailed';
import personMore from './src/page/personMore';
import setting from './android_views/setting';
import createOrder from './src/page/createOrder';
import orderList from './src/page/orderList';
import AWebView from './src/page/webview';
//注册导航界面
const AppStack = createStackNavigator({
  home:{
    screen: home,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  person:{
    screen: person,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  personMore:{
    screen: personMore,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      headerTitle: "查看个人资料",  //设置导航栏标题
    }
  },
  money:{
    screen: money,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  moneyDetailed:{
    screen: moneyDetailed,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  setting:{
    screen: setting,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  createOrder:{
    screen: createOrder,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  orderList:{
    screen: orderList,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
  },
  Home1: { 
    screen: HomeScene,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题
    }
   },
   GDmap: {
     screen: GDmapScene,
     navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      header: null,  //设置导航栏标题  
      // headerTitle: '高德地图',  //设置导航栏标题
     }
   },
   ToiletPage:{
      screen:ToiletPage,
      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTitle: '路线规划',  //设置导航栏标题
      }
   },
   AWebView:{
    screen:AWebView,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
      headerTitle: '路线规划',  //设置导航栏标题
    }
 }
});
const AuthStack = createStackNavigator({
  Login: {
      screen: LoginScene,  
      navigationOptions: {
        header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
  },
  Register: {
    screen: RegisterScene,
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTitle: '注册',  //设置导航栏标题
    }
  }
});

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const name = await AsyncStorage.getItem("name");
    const psw = await AsyncStorage.getItem("psw");
    if (name !== null && name != "" && psw != null && psw != "") {
      this.props.navigation.navigate("App");
    } else {
      this.props.navigation.navigate("Log");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>欢迎使用PCCW系统</Text>
      </View>
    );
  }
}

const Switch = createSwitchNavigator({
    Auth: { screen: AuthPage},
    Log: AuthStack,
    App: AppStack,
  },
  {
      initialRouteName: 'Auth',
  }
//   Auth: { screen: AuthPage },
//   Home: { 
//     screen: HomeScene,
//     navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//       headerTitle: null,  //设置导航栏标题
//     }
//    },
//    GDmap: {
//      screen: GDmapScene,
//      navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//          headerTitle: '高德地图',  //设置导航栏标题
//      }
//    },
//   Login: { 
//     screen: LoginScene,
//     navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//       headerTitle: '登录',  //设置导航栏标题
//     }
//    },
//   Register:{
//     screen: RegisterScene,
//     navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//       headerTitle: '注册',  //设置导航栏标题
//     }
//   }
// }
);
export default createAppContainer(Switch);