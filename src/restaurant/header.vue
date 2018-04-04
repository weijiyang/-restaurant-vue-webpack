<template>
    <div id="header">
        <div class="header">
        <div class="wrap">
        <div class="top-header">
          <div class="logo">
            <a href="index.html"><img src="../assets/images/logo.png" title="logo" /></a>
          </div>
          <div class="social-icons">
            <ul>
              <li><a href="#"><img src="../assets/images/facebook.png" title="facebook" /></a></li>
              <li><a href="#"><img src="../assets/images/twitter.png" title="twitter" /></a></li>
              <li><a href="#"><img src="../assets/images/google.png" title="google pluse" /></a></li>
            </ul>
          </div>
          <div class="clear"> </div>
        </div>
        <div class="top-nav">
          <div class="top-nav-left">
            <ul>
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact</a></li>
              <div class="clear"> </div>
            </ul>
          </div>
          <div class="top-nav-right">
            <form>
              <input type="text"><input type="submit" value="" />
            </form>
          </div>
          <div class="clear"> </div>
        </div>
      </div>
    </div>
      <Imgslider></Imgslider>
  </div>
</template>
<script>
import Imgslider from "./imageSlider.vue"
export default {
  components : {
    Imgslider
  }
}
</script>
<style>

</style>


