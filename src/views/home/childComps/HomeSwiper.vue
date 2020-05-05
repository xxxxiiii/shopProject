<template>
  <swiper class="home-swiper">
          <swiper-item  v-for="(item, index) in banner" :key="index" >
              <a :href="item.link">
              <img :src="item.image" alt="" @load="swiperLoad"/>
              </a>
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
    data() {
        return{
            isLoad: false
        }
    },
    props: {
        banner: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        swiperLoad() {
            if(!this.isLoad){
                this.$emit('swiperLoad');
                this.isLoad = true;
            }
        }
    }
    
}
</script>

<style scoped>

</style>