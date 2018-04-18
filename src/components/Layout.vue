<template>
  <div class="layout">
    <app-header></app-header>
    <div class="row no-gutters main">
      <div :style="{width: '200px'}">
        <app-menu></app-menu>
      </div>
      <div class="col view">
        <app-bread></app-bread>
        <router-view class='router-view'/>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Bread from '@/components/Bread'

export default {
  name: 'Layout',
  components: {"app-header": Header, "app-menu": Menu, 'app-bread': Bread}
}
</script>

<style lang="less">
  .main{
    padding-top: 70px;
  }
  .view{
    background-color: #f5f7f9;
    padding: 20px !important;
  }
  .router-view{
    background-color: #fff;
  }
</style>
