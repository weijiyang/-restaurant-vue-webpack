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

export default {
  components : {
    Header,Content,Footer
  }
}
</script>

<style>

</style>


