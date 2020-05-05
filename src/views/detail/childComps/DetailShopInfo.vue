<template>
  <div class="shop">
      <div class="info-title">
          <img class="info-logo" :src="Shops.shopLogo"/>
          <span class="info-name">{{Shops.name}}</span>
      </div>
      <div class="info-middle">
          <div class="info-middle-left">
              <div class="middle-left">
              <div class="left-sells">
                  <div class="left-sellsCount">{{Shops.sells}}</div>
                  <div class="left-sellstext">总销量</div>
              </div>
              <div class="left-goods">
                  <div class="left-goodsCount">{{Shops.goods}}</div>
                  <div class="left-goodstext">全部宝贝</div>
              </div>
              </div>
          </div>
          <div class="info-middle-right">
              <div class="middle-right" v-for="(item, index) in Shops.score" :key="index">
                  <div class="name">{{item.name}}</div>
                  <div class="score" :class="{'score-better': item.isBetter}"><span>{{item.score}}</span></div>
                  <div class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailShopInfo',
    props: {
        Shops: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .shop {
        margin: 5px 0;
       border-bottom: 5px solid #f2f5f8;
    }
    .info-title, .info-middle{
        margin: 5px;
    }
    .info-name {
        position: relative;
        top: -18px;
        text-align: center;
    }
    .info-title img{
       width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,.1);
    }
    .info-middle, .middle-left, .middle-right {
        display: flex;
    }
    .info-middle-left, .info-middle-right, .middle-left, .middle-right,
    .left-sells, .left-goods,
    .name, .score, .score-better, .better, .better-more{
        flex: 1;
        text-align: center;
    }
    .middle-left {
        line-height: 30px;
        border-right: 1px solid #f2f5f8;
    }
    
    .middle-right {
        margin: 5px 0;
        padding: 0 3px;
    }
    .name {
        font-size: 12px;
    }
    .score, .score-better {
        font-size: 12px;
    }
    .score {
    color: green;
    }
    .score-better {
        color: red;
    }
    .better, .better-more {
        font-size: 10px;
        color: #fff;
        border-radius: 1px;
    }
    .better span{
        background-color: green;
    }
    .better-more span{
        background-color: red;
    }
</style>