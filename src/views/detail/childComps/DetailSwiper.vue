<template>
  <swiper class="detail-swiper">
          <swiper-item  v-for="(item, index) in detailbanner" :key="index" >
              <img :src="item" alt=""/>
          </swiper-item>
      </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    name: 'HomeSwpier',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        detailbanner: {
            type: Array,
            default() {
                return []
            }
        }
    }
    
}
</script>

<style scoped>
    .detail-swiper {
        height: 220px
    }
</style>