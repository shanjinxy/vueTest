<template lang="html">
  <div class="star">
    <span>

    </span>
  </div>
</template>
<script>
  const LENGTH = 5;
  const CLS_ON = 'ON';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export  default {
      props:{
          size:{
              type:Number
          },
        score:{
              type:Number
        }
      },
    computed:{
          starType(){
              return 'star-'+ this.size;
          },
          itemClasses(){
              let result = [];
              let score = Math.floor (this.score *2) /2;
              let integer = Math.floor(score);
          }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
