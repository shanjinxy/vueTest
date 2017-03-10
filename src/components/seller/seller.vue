<template lang="html">
  <div class="seller-wrapper" ref="sellerWrapper">
    <div class="seller-content">
      <div class="info">
        <div class="title">
          <div class="text">{{seller.name}}</div>
          <div class="star-wrapper">
            <v-star v-bind:size="36" :score="seller.score"></v-star>
            <span class="rate-count">({{seller.ratingCount}})</span>
            <span class="sell-count">月售{{seller.sellCount}}单</span>
          </div>
          <div class="collect" @click="collectflag=!collectflag">
            <span class="icon-favorite" :class="{'active':collectflag}">
            </span>
            <span class="text">{{collectflag?'已收藏':'收藏'}}</span>
          </div>
        </div>
        <div class="remark">
          <div class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="num">{{seller.minPrice}}</span>元
            </div>
          </div>
          <div class="block">
            <div class="content">
              <h2>商家配送</h2>
              <span class="num">{{seller.deliveryPrice}}</span>元
            </div>
          </div>
          <div class="block">
            <div class="content">
              <h2>平均配送时间</h2>
              <span class="num">{{seller.deliveryTime}}</span>分钟
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="activities">
        <div class="bulletin">
          <h1>公告与活动</h1>
          <div class="content">
            {{seller.bulletin}}
          </div>
        </div>
      </div>
      <div class="supports">
        <ul>
          <li class=""></li>
        </ul>
      </div>


    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import BScroll from 'better-scroll';
  import star from 'components/star/star'
  export default {
    components: {
      'v-star': star
    },
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
  .seller-wrapper
    position absolute
    top 175px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .seller-content
      .info
        padding 18px 0
        margin 0 18px
        .title
          padding-bottom 18px
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
          .text
            font-size 14px
            color: rgb(7, 17, 27)
            line-height 14px
          .star-wrapper
            padding-top 8px
            font-size 0
            .star
              display inline-block
              vertical-align top
            .rate-count, .sell-count
              display inline-block
              font-size 10px
              color: rgb(77, 85, 93)
              line-height 14px
            .rate-count
              padding 0 12px 0 8px
          .collect
            position absolute
            top: 18px
            right: 18px
            text-align center
            .icon-favorite
              font-size: 24px
              color: #d4d6d9
              line-height 24px
              &.active
                color: rgb(240, 20, 20)
        .remark
          display flex
          .block
            flex 1
            margin-top 18px
            text-align center
            border-right: 1px solid rgba(7, 17, 27, 0.1)
            &.last-child
              border: none
            h2
              font-size 10px
              color: rgb(147, 153, 159)
              line-height 10px
              margin-bottom: 4px
            .content
              font-size 10px
              color: rgb(7, 17, 27)
              line-height 24px
              font-weight 200
              .num
                font-size 24px
                position relative
                top: 2px
      .activities
        padding-top 18px
        .bulletin
          margin 0 18px
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          h1
            font-size 14px
            color: #07111b
            line-height 14px
          .content
            padding: 8px 12px 16px 12px
            font-size 12px
            font-weight 200
            color: rgb(240, 20, 20)
            line-height 24px

</style>
