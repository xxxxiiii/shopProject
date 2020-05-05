<template>
  <div v-if="Object.keys(Goods).length !== 0" class="base-info">
      <div class="info-title">{{Goods.title}}</div>
      <div class="info-price">
          <span class="new-price">{{Goods.newPrice}}</span>
          <span class="old-price">{{Goods.oldPrice}}</span>
          <span v-if="Goods.discount" class="discount">{{Goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{Goods.columns[0]}}</span>
          <span>{{Goods.columns[1]}}</span>
          <span>{{Goods.services[Goods.services.length-1].name}}</span>
      </div>
      <div class="info-services">
          <span class="info-services-item" v-for="index in Goods.services.length-1" :key="index">
              <img :src="Goods.services[index-1].icon" alt="">
              <span>{{Goods.services[index-1].name}}</span>
          </span>
      </div>

  </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        Goods : {
            type: Object,
            default(){
                return {}
            } 
        }
    }
}
</script>

<style scoped>
    .base-info {
        margin: 5px 0 5px 0;
        border-bottom: 5px solid #f2f5f8;
        padding: 0 5px;
    }
    .info-price {
        margin: 10px 0 10px 0;
    }
    .new-price {
        font-size: 18px;
        color: orange;
        margin-right: 5px;
    }
    .old-price {
        font-size: 12px;
        color: rgb(110, 110, 110);
        margin-right: 5px;
        text-decoration: line-through;
    }
    .discount {
        font-size: 11px;
        padding: 0 5px;
        color: aliceblue;
        background-color: orange;
        border-radius: 10px;
        text-align: center;
        position: relative;
        top: -5px
    }
    .info-other {
        display: flex;
        margin: 10px 0 5px 0;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        justify-content: space-between;
    }
    .info-other span {
        flex: 1;
        font-size: 14px;
        color: rgb(110, 110, 110);
    }
    .info-services {
        display: flex;
        margin: 5px 0 5px 0;
        padding: 10px 0 10px 0;
        justify-content: space-between;
    }
    .info-services-item {
        flex: 1;
    }
    .info-services-item img {
        width: 15px;
        height: 15px;
        margin-right: 2px;
        position: relative;
        bottom: -3px;
    }
    .info-services-item span {
        font-size: 13px;
    }


</style>