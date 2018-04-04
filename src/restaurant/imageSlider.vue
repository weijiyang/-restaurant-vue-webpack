<template>
  <div id="imageSlider">
		  <div class="slider">					     
					<div class="camera_wrap camera_azure_skin" id="camera_wrap_1">									           
						<div data-src="../assets/images/slider1.jpg">  </div> 
						<div data-src="../assets/images/slider2.jpg">  </div>
						<div data-src="../assets/images/slider3.jpg">  </div>
						<div data-src="../assets/images/slider4.jpg">  </div>
					</div>
					<div class="clear"> </div>					       
			</div>					
  </div>
</template>
<script>
export default {
  created:function(){
		jQuery(function(){
				jQuery('#camera_wrap_1').camera({
					pagination: false,
				});
			});
	}
}
</script>
<style src="../assets/css/slider.css" scoped>

</style>


