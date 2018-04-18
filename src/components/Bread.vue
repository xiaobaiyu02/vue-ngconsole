<template>
  <div class='bread'>
    <span>{{ breads }}</span>
  </div>
</template>

<script>
import Consts from "../js/consts"

export default {
  name: 'Bread',
  data(){
    return {
      breads: this.$route.meta.bread,
    }
  },
  watch:{
    $route: 'changeBread'
  },
  methods: {
    changeBread: function(){
      this.breads = this.$route.meta.bread;
    }
  }
}
</script>

<style lang="less">
  @import "../less/variable.less";
  .bread{
    font-size: 14px;
    color: @bread;
    margin-bottom: 20px;
  }
</style>
