<template lang="html">
  <el-map></el-amp>
</template>

<script>
import Vue from 'vue'
// 引入vue-amap
import AMap from 'vue-amap';
import map from '../components/Map.vue'
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 高德的key
    key: '01ceb8695b4cf48ad5d5f62e2ffcfc99',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

export default {
  components:{
    'el-map':map
  }
}
</script>

<style lang="css">
</style>
