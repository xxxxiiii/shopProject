<template>
  <div id="shop-item">
      <div class="item-selector">
          <CheckButton @checkBtnClick="checkedChange" :value="itemInfo.checked"></CheckButton>
      </div>
      <div class="item-img">
          <img :src="itemInfo.imgURL" alt="商品图片"> 
      </div>
      <div class="item-info">
          <div class="item-title">{{itemInfo.title}}</div>
          <div class="item-desc">{{itemInfo.desc}}</div>
          <div class="indo-bottom">
              <div class="item-price left">￥{{itemInfo.price}}</div>
              <div class="item-count right">x{{itemInfo.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CartListItem',
    props: {
        itemInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>

</style>