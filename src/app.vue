<template>
  <div id="app" class="clearfix">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./restaurant/header.vue"
import Footer from "./restaurant/footer.vue"
import Content from "./restaurant/index.vue"
import "./assets/js/jquery.min.js"
import  "./assets/js/jquery.easing.1.3.js"
import "./assets/js/camera.min.js"
import "./assets/js/jquery.lightbox.js"
export default {
  components : {
    Header,Content,Footer
  }
}
</script>
<style src="./assets/css/style.css"></style>
<style src="./assets/css/slider.css"></style>
<style src="./assets/css/lightbox.css"></style>

<style>

</style>

