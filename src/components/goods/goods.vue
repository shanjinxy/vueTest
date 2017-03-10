<template lang="html">
  <div>
    我是goods
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    props: {
      seller: Object
    },
    created() {
      axios.get('static/data.json').then((res) => {
        this.goods = res.data.goods;
      })
    },
    data() {
      return {
        goods: [],
        listHeight: []
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
