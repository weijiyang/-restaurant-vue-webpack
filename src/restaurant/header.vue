<template>
  <div>
	<div class="container">
    	<nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header center-block">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand visible-xs pad" href="index.html"><img src="../assets/images/logo2.png"></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <div class="row r1">
              <ul class="nav navbar-nav col-md-5 col-sm-5">
              	<div class="row mar">
                <li class="col-md-4 col-sm-4"><a href="index.html" class="active">首页</a></li>
                <li class="col-md-4 col-sm-4"><a href="caidan.html">招牌菜式</a></li>
                <li class="col-md-4 col-sm-4"><a href="huanjing.html">用餐环境</a></li>  
                </div>        
              </ul>
              <a class="navbar-brand hidden-xs pad2 col-md-2 col-sm-2 center-block" href="index.html"><img src="../assets/images/logo.png" class="center-block"></a>
              <ul class="nav navbar-nav pull-right col-md-5 col-sm-5">
              	<div class="row mar">
                <li class="col-md-4 col-sm-4"><a class="pull-right" href="news.html">美食资讯</a></li>
                <li class="col-md-4 col-sm-4"><a class="pull-right" href="yuding.html">网上预订</a></li>
                <li class="col-md-4 col-sm-4"><a class="pull-right" href="weizhi.html">餐厅位置</a></li>
                </div>
              </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
    <div class="row banner" style="margin:0;">
    <div class="slide_container">
      <ul class="rslides slide slide1" id="slider">
        <li id="slide1_s0" class="slide1_on" style="display: block; float: left; position: relative; opacity: 1; z-index: 2; transition: opacity 500ms ease-in-out;">
          <img src="../assets/images/1.jpg" alt="">
        </li>
        <li id="slide1_s1" style="float: none; position: absolute; opacity: 0; z-index: 1; display: list-item; transition: opacity 500ms ease-in-out;" class="">
          <img src="../assets/images/2.jpg" alt="">
        </li>
        <li id="slide1_s2" style="float: none; position: absolute; opacity: 0; z-index: 1; display: list-item; transition: opacity 500ms ease-in-out;" class="">
          <img src="../assets/images/3.jpg" alt="">
        </li>
      </ul>
    </div>
    <div class="col-md-12 col-xs-12 yuding">
        <div class="jumbotron col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3 img-responsive">
            <div class="bor">
                <h1>唯有美食与你不可辜负</h1>
                <p>一个美好的晚上</p>
                <p>还要有美味相随</p>
                <p><a class="btn btn-lg" href="yuding.html" role="button">预定</a></p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>


