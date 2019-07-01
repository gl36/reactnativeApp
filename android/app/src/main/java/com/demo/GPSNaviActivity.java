package com.demo;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.amap.api.maps.model.LatLng;
import com.amap.api.navi.enums.PathPlanningStrategy;
import com.amap.api.navi.model.NaviLatLng;

import com.demo.R;
import com.amap.api.navi.AMapNaviView;
import com.amap.api.navi.AMapNaviViewOptions;
import com.amap.api.navi.enums.NaviType;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.LinkedList;
import java.util.List;

public class GPSNaviActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LatLng startLatLng = getIntent().getParcelableExtra("point_start");
        LatLng endLatLng = getIntent().getParcelableExtra("point_end");
        if (startLatLng == null || endLatLng == null) {
            Toast.makeText(this, "数据传递错误,请稍后再试~", Toast.LENGTH_LONG).show();
            this.finish();
            return;
        }
        //对导航起止地址进行赋值
        this.mStartLatlng = new NaviLatLng(startLatLng.latitude, startLatLng.longitude);
        this.mEndLatlng = new NaviLatLng(endLatLng.latitude, endLatLng.longitude);
        setContentView(R.layout.activity_basic_navi);
        mAMapNaviView = (AMapNaviView) findViewById(R.id.navi_view);
        mAMapNaviView.onCreate(savedInstanceState);
        mAMapNaviView.setAMapNaviViewListener(this);

        sList.clear();
        noStartCalculate();
        AMapNaviViewOptions options = new AMapNaviViewOptions();
        options.setScreenAlwaysBright(false);
        mAMapNaviView.setViewOptions(options);


    }

    @Override
    public void onInitNaviSuccess() {
        super.onInitNaviSuccess();
        /**
         * 方法: int strategy=mAMapNavi.strategyConvert(congestion, avoidhightspeed, cost, hightspeed, multipleroute); 参数:
         *
         * @congestion 躲避拥堵
         * @avoidhightspeed 不走高速
         * @cost 避免收费
         * @hightspeed 高速优先
         * @multipleroute 多路径
         *
         *  说明: 以上参数都是boolean类型，其中multipleroute参数表示是否多条路线，如果为true则此策略会算出多条路线。
         *  注意: 不走高速与高速优先不能同时为true 高速优先与避免收费不能同时为true
         */
        int strategy = 0;
        try {
            //再次强调，最后一个参数为true时代表多路径，否则代表单路径
            strategy = mAMapNavi.strategyConvert(true, false, false, false, false);
        } catch (Exception e) {
            e.printStackTrace();
        }
        //mAMapNavi.setCarNumber("京", "DFZ588");
        mAMapNavi.calculateDriveRoute(sList, eList, mWayPointList, strategy);

    }
  /**
     * 如果使用无起点算路，请这样写
     */
    private void noStartCalculate() {
        //无起点算路须知：
        //AMapNavi在构造的时候，会startGPS，但是GPS启动需要一定时间
        //在刚构造好AMapNavi类之后立刻进行无起点算路，会立刻返回false
        //给人造成一种等待很久，依然没有算路成功 算路失败回调的错觉
        //因此，建议，提前获得AMapNavi对象实例，并判断GPS是否准备就绪


        if (mAMapNavi.isGpsReady()){
            mAMapNavi.calculateDriveRoute(eList, mWayPointList, PathPlanningStrategy.DRIVING_DEFAULT);

        }
    }
    @Override
    public void onCalculateRouteSuccess(int[] ids) {
        super.onCalculateRouteSuccess(ids);
        mAMapNavi.startNavi(NaviType.GPS);
    }

}
