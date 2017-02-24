<template lang="html">
  <div class="seller-wrapper" ref="sellerWrapper">
    <div class="seller-content">
      <div class="info">
        <div class="title">
          <div class="text">{{seller.name}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    props: {},
    data() {
      return {
        seller: {},
        collectflag: false
      }
    },
    created() {
      this._init()
    },
    methods: {
      _init() {
        axios.get('static/data.json').then((res) => {
          this.seller = res.data.seller
          console.log(this.seller)
        })
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
