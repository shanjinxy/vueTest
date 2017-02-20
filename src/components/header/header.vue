<template lang="html">
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="#" width="64" height="64">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'header',
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

</style>
