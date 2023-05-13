<template>
 <div id="cesiumContainer"></div>
</template>

<script setup>
  import * as Cesium from "cesium"
  import "./Widgets/widgets.css"
  import { onMounted } from "vue";

  window.CESIUM_BASE_URL = "/";

  onMounted(() => {
    let viewer = new Cesium.Viewer("cesiumContainer")
    console.log(viewer)
  });
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
