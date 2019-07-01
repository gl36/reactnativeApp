package com.demo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;
import com.amap.api.maps.model.LatLng;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;


public class RnTest extends ReactContextBaseJavaModule {
    public RnTest(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    // ReactContextBaseJavaModule要求派生类实现getName方法。这个函数用于返回一个字符串
    // 这个字符串用于在JavaScript端标记这个原生模块
    @Override
    public String getName() {
        return "RnTest";
    }
    // 获取应用包名
    // 要导出一个方法给JavaScript使用，Java方法需要使用注解@ReactMethod
    @ReactMethod
    public void show(Float startLng,Float startLat,Float endLng,Float endLat) {
        Activity currentActivity = getCurrentActivity();
        Intent intent = new Intent(currentActivity,GPSNaviActivity.class);
        intent.putExtra("point_start", new LatLng(startLat,startLng));
        intent.putExtra("point_end", new LatLng(endLat, endLng));
        currentActivity.startActivity(intent);
        
    }

}
