import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, FlatList, Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import ToiletPage from './../../android_views/toiletPage';

//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

const valPam=   [{
    "name": "千阳县",
    "id": "610328"
  },  {
    "name": "麟游县",
    "id": "610329"
  },  {
    "name": "陈仓区",
    "id": "610304"
  },  {
    "name": "眉县",
    "id": "610326"
  },  {
    "name": "陇县",
    "id": "610327"
  },  {
    "name": "渭滨区",
    "id": "610302"
  },  {
    "name": "扶风县",
    "id": "610324"
  },  {
    "name": "金台区",
    "id": "610303"
  },  {
    "name": "凤翔县",
    "id": "610322"
  },  {
    "name": "市辖区",
    "id": "610301"
  },  {
    "name": "岐山县",
    "id": "610323"
  },  {
    "name": "太白县",
    "id": "610331"
  },  {
    "name": "凤县",
    "id": "610330"
  } ,   {
  "name": "宝鸡市",
  "id": "name"
  }, {
    "name": "旬邑县",
    "id": "610429"
  },  {
    "name": "彬县",
    "id": "610427"
  },  {
    "name": "长武县",
    "id": "610428"
  },  {
    "name": "杨陵区",
    "id": "610403"
  },  {
    "name": "礼泉县",
    "id": "610425"
  },
  {
    "name": "渭城区",
    "id": "610404"
  },
  {
    "name": "永寿县",
    "id": "610426"
  },
  {
    "name": "市辖区",
    "id": "610401"
  },
  {
    "name": "泾阳县",
    "id": "610423"
  },  {
    "name": "秦都区",
    "id": "610402"
  },  {
    "name": "乾县",
    "id": "610424"
  },  {
    "name": "三原县",
    "id": "610422"
  },  {
    "name": "淳化县",
    "id": "610430"
  },  {
    "name": "武功县",
    "id": "610431"
  },  {
    "name": "兴平市",
    "id": "610481"
  } , {
"name": "咸阳市",
"id": "name"
}, {
    "name": "高陵区",
    "id": "610117"
  },  {
    "name": "莲湖区",
    "id": "610104"
  },  {
    "name": "临潼区",
    "id": "610115"
  },  {
    "name": "长安区",
    "id": "610116"
  },  {
    "name": "新城区",
    "id": "610102"
  },  {
    "name": "雁塔区",
    "id": "610113"
  },  {
    "name": "周至县",
    "id": "610124"
  },  {
    "name": "碑林区",
    "id": "610103"
  },  {
    "name": "阎良区",
    "id": "610114"
  },  {
    "name": "户县",
    "id": "610125"
  },  {
    "name": "灞桥区",
    "id": "610111"
  },  {
    "name": "蓝田县",
    "id": "610122"
  },  {
    "name": "市辖区",
    "id": "610101"
  },  {
    "name": "未央区",
    "id": "610112"
  }, {
"name": "西安市",
"id": "name"
},{
    "name": "市辖区",
    "id": "610201"
},{
    "name": "吴堡县",
    "id": "610829"
  },
  {
    "name": "米脂县",
    "id": "610827"
  },
  {
    "name": "佳县",
    "id": "610828"
  },
  {
    "name": "横山区",
    "id": "610803"
  },
  {
    "name": "定边县",
    "id": "610825"
  },
  {
    "name": "绥德县",
    "id": "610826"
  },
  {
    "name": "市辖区",
    "id": "610801"
  },
  {
    "name": "榆阳区",
    "id": "610802"
  },
  {
    "name": "靖边县",
    "id": "610824"
  },
  {
    "name": "神木县",
    "id": "610821"
  },
  {
    "name": "府谷县",
    "id": "610822"
  },
  {
    "name": "清涧县",
    "id": "610830"
  },
  {
    "name": "子洲县",
    "id": "610831"
  },{
"name": "榆林市",
"id": "name"
},
{
    "name": "子长县",
    "id": "610623"
  },
  {
    "name": "宝塔区",
    "id": "610602"
  },
  {
    "name": "延长县",
    "id": "610621"
  },
  {
    "name": "黄陵县",
    "id": "610632"
  },
  {
    "name": "延川县",
    "id": "610622"
  },
  {
    "name": "宜川县",
    "id": "610630"
  },
  {
    "name": "黄龙县",
    "id": "610631"
  },
  { 
  "name": "延安市",
  "id": "name"
  }
];
export default class HomeView extends Component {
    static navigationOptions = () => ({
            headerTitle: "我的",
        }
    );

    constructor(props){
        super(props);

        //当前页
        this.page = 1
        //状态
        this.state = {
            // 列表数据结构
            data:valPam,
            // 下拉刷新
            isRefresh:false,
            // 加载更多
            isLoadMore:false
        }
    }
    /**
     * 创建头部布局
     */
    _createListHeader(){
        return (
            <View style={styles.headView}>
                <Text style={{color:'white'}}>
                    listDemo
                </Text>
            </View>
        )
    }

    /**
     * 创建头部布局
     */
    _createListFooter(){
        return (
            <View style={styles.footerView}>
                <Text style={{color:'white'}}>
                    底部底部
                </Text>
            </View>
        )
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

    /**
     * 空布局
     */
    _createEmptyView(){
        return (
            <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:16}}>
                    暂无列表数据，下啦刷新
                </Text>
            </View>
        );
    }
    /**
     * 获取360 下载列表
     * @private
     */
    _getHotList() {
        // fetch("http://m.app.haosou.com/index/getData?type=1&page=" + this.page)
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //         if(this.page === 1){
        //             console.log("重新加载")
        //             this.setState({
        //                 data: responseJson.list
        //             })
        //         }else{
        //             console.log("加载更多")
        //             this.setState({
        //                 // 加载更多 这个变量不刷新
        //                 isLoadMore : false,
        //                 // 数据源刷新 add
        //                 data: this.state.data.concat(responseJson.list)
        //             })
        //         }


        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    /**
     * 下啦刷新
     * @private
     */
    _onRefresh=()=>{
        // 不处于 下拉刷新
        if(!this.state.isRefresh){
            this.page = 1
            this._getHotList()
        }
    };

    /**
     * 加载更多
     * @private
     */
    _onLoadMore(){
        // 不处于正在加载更多 && 有下拉刷新过，因为没数据的时候 会触发加载
        if (!this.state.isLoadMore && this.state.data.length > 0){
            this.page = this.page + 1
            this._getHotList()
        }
    }

    /**
     * item点击事件
     */
    _onItemClick=(item)=>{
        const navigateAction = NavigationActions.navigate({
            routeName: 'ToiletPage',
            params: {
                address: item.name
            },
        });
        this.props.navigation.dispatch(navigateAction);
        //alert(item.baike_name);
       // console.log("page" + this.state.page + " = "  + item.baike_name)
        //return( <ToiletPage address={"陕西省政府"}/>);
        
    }
    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                //item显示的布局
                renderItem={({item}) => this._createListItem(item)}
                // 空布局
                ListEmptyComponent={this._createEmptyView}
                //添加头尾布局
                ListHeaderComponent={this._createListHeader}
                ListFooterComponent={this._createListFooter}
                //下拉刷新相关
                onRefresh={() => this._onRefresh()}
                refreshing={this.state.isRefresh}
                //加载更多
                onEndReached={() => this._onLoadMore()}
                onEndReachedThreshold={0.1}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    headView:{
        width:width,
        height:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    footerView:{
        width:width,
        height:50,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    itemImages:{
        width:120,
        height:120,
        resizeMode:'stretch'
    },
    itemText:{
        height:30,
        width:'100%',
        paddingLeft:10
    }
});