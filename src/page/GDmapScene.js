import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity
     
} from 'react-native';
//import {MapView,Polyline,Marker} from 'react-native-amap3d';

//import { init,Geolocation } from "react-native-amap-geolocation";
//import NetUitl from './../util/NetUtil';
// async function requestCameraPermission() {  
//   await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//   await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
// }
// requestCameraPermission();
export default class GDmapScene extends Component{
    static navigationOptions = {
        title: '路径规划',
      }
      constructor(props) {
        super(props);
        this.lin5=[];
        this.state = {
          latitude: 40.006901,
          longitude: 116.097972,
          endlongitude:null,
          endlatitude: null,
          zoomLevel:18,
          showsLocationButton: true,
          address:this.props.address!=undefined?this.props.address:this.props.navigation.state.params.address,
        }
    }
    

    componentDidMount() {
      // NetUitl.get('https://restapi.amap.com/v3/place/text?key=f9bbf84cf6922d6c80b1ac282ecb1eb8&keywords=西安市西安软件园秦风阁综合楼&types=&city=&children=1&offset=1&page=1&extensions=base'
      // ,function(response){
      //   alert(response.status);
      // })
      fetch('https://restapi.amap.com/v3/place/text?key=027aa6b88f4c6de233a4e793839160ba&keywords='+this.state.address+'&types=&city=&children=1&offset=1&page=1&extensions=base')
      .then((response) => response.text())
      .then((responseText) => {
        var responsess=JSON.parse(responseText);
        if("OK"==responsess.info){
          var locat=responsess.pois[0].location;
          var arr=locat.split(',');
          this.setState({endlongitude:parseFloat(arr[0]),endlatitude:parseFloat(arr[1])},function(){
            fetch('https://restapi.amap.com/v3/direction/driving?key='+
            '027aa6b88f4c6de233a4e793839160ba&&'+
            'origin='+this.state.longitude+','+this.state.latitude+
            '&destination='+arr[0]+','+arr[1]+
            '&originid=&destinationid=&extensions=base&strategy=0&waypoints=&avoidpolygons=&avoidroad=')
            .then((response) => response.text())
            .then((responseText) => {
              var responseeee=JSON.parse(responseText);
              if("OK"==responseeee.info){
                return this.lin5 =this.parseRouteToPath(responseeee.route.paths[0]);
              }
            });
          })
        }
      });
      
      //  await init({
      //     android: "f9bbf84cf6922d6c80b1ac282ecb1eb8"
      //  })
      //  await Geolocation.getCurrentPosition(({ location }) => {
      //          la=location.latitude;
      //          ln=location.longitude;
      //          this.setState({latitude:location.latitude,
      //              longitude:location.longitude},function(){
      //              })
      //        });
     }
      
     
    _onPress = () => Alert.alert('onPress')
    onLocation(nativeEvent){
      this.setState({
        latitude:nativeEvent.latitude,
        longitude:nativeEvent.longitude
      })
    }
   parseRouteToPath(route) {
      var path = []
      for (var i = 0, l = route.steps.length; i < l; i++) {
          var step = route.steps[i];
          var polylines=step.polyline;
          var polylinearr=polylines.split(";");
          for (var n = 0; n< polylinearr.length; n++) {
            var newarr=polylinearr[n];
            var endln=newarr.split(','); 
            path.push({longitude:parseFloat(endln[0]),latitude:parseFloat(endln[1])})
          }
      }
      return path;
    }
    _jumpToNative = () => {
      console.log('@@@开始导航！！！');
      // RNOpenOneVC这个也是写在原生里面的
      // Push.RNOpenNative('{x:1,y:2}');
      // const { MyNativeModule } = NativeModules;
 
      // MyNativeModule.Show({})

    };
    render() {
        return <View style={styles.body}>
              {/* <MapView 
                ref={ref => this._mapView}
                showsLocationButton={this.state.showsLocationButton}
                zoomLevel={this.state.zoomLevel} 
                showsTraffic={true}
                title={45}
                coordinate={{
                  latitude:this.state.latitude,
                  longitude: this.state.longitude 
                }}
                locationEnabled
               // locationInterval={10000}
                distanceFilter={10}
                onLocation={({nativeEvent}) =>this.onLocation(nativeEvent)}
                style={StyleSheet.absoluteFill}
                region={{
                  latitude:this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                }}
                showsZoomControls={false}
                mapType='navigation'
              >
                <Marker
                  title='起始位置'
                  icon={() =>
                    <View>
                      <Image source={require('./../assets/images/start.png')}></Image>
                    </View>
                  }
                  centerOffset={{x: 0, y: -18}}
                  coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                  }}
                >
                </Marker>
                {this.state.endlongitude!=null?
                <Marker
                  //  draggable
                  title={this.state.address}
                  icon={() =>
                    <View>
                      <Image source={require('./../assets/images/end.png')}></Image>
                    </View>
                  }
                  centerOffset={{x: 0, y: -18}}
                  coordinate={{
                    latitude:this.state.endlatitude,
                    longitude: this.state.endlongitude
                  }}
                  > 
                    <View style={styles.customInfoWindow}>
                      <Text style={styles.customInfoTxt}>{this.state.address}</Text>
                    </View>
                </Marker>
                :null}
                
                {this.lin5.length>0?<Polyline
                    width={5}
                    colors={['#4caf50']}
                    coordinates={this.lin5}
                />:null}
                
              </MapView> */}
              <View style={styles.buttons}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.setState({zoomLevel: this.state.zoomLevel+1})}>
                    <Text style={styles.text}>放大</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.setState({zoomLevel: this.state.zoomLevel-1})}>
                    <Text style={styles.text}>缩小</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this._jumpToNative()}>
                    <Text style={styles.text}>开始导航</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        fontSize: 40,
    },
    body: {
      flex: 1,
    },
    customInfoWindow: {
      width: 150,
      height: 133.4,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fffbe0',
    },
    customInfoTxt: {
      fontSize: 12,
      color: 'green',
    },
    buttons: {
      width: 80,
      position: 'absolute',
      top: 60,
      right: 10,
    },
    button: {
      width: 80,
      height: 40,
      marginTop: 10,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
    },
});