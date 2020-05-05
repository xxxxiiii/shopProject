<template>
  <div class="goods-item" @click="itemClick">
      <img :src="showImage" alt="" @load="imgLoad">
      <!-- <img @load="imgLoad" v-lazy="showImage" :key="showimage" alt=""> -->
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        showImage() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods: {
        imgLoad() {
	        this.$bus.$emit('itemImgLoad');
           // if(this.$route.path.indexOf('/home')){
             //   this.$bus.$emit('homeImgLoad');
           // } else if(this.$route.path.indexOf('/detail')){
             //   this.$bus.$emit('detailImgLoad');
          //  }
        },
        itemClick(){
            this.$router.push('/detail/' + this.goodsItem.iid);
        }
    }
    
}
</script>

<style scoped>
    .goods-item {
        width: 45%;
        height: 48%;
        padding-bottom: 40px;
        position: relative;
    }

    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 4px;
    }

    .goods-info .price {
        color: orange;
        margin-right: 20px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before{
        content: '';
        position: absolute;
        left: -15px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }

</style>