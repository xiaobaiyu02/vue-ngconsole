<template>
  <div class="header container-fluid">
      <div class="row align-items-center">
        <div class="col-12 col-md-9">logo</div>
        <div class="col-12 col-md-3 row">
          <div class="col">Hi, {{ name }}</div>
          <div class="col"><button type="button" class="btn btn-outline-primary btn-sm">退出</button></div>
          
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      name: ''
    }
  }
}
</script>

<style lang="less">
  @import "../less/variable.less";
  .header{
    background-color: @header-bg;
    border-bottom: 1px solid @header-border-bottom;
    box-shadow: 0 0 5px #ddd;
    position: fixed;
    z-index: 999;    
    height: 70px;
    &>div{
      height: 100%;
    }
  }
</style>
