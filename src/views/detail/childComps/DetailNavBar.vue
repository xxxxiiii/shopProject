<template>
<div>
   <nav-bar class="home-nav">
           <div class="left" slot="left" @click="backClick">
               <img src="../../../assets/img/detail/back.png" alt="">
           </div>
          <div slot="center" class="title">
              <tab-control :titles="titles"
              @click="tabClick"/>
          </div>
      </nav-bar>
      
</div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
import TabControl from '../../../components/content/tabControl/TabControl'
export default {
    name: 'DetailNavBar',
     components: {
        NavBar,
        TabControl
    },
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods: {
        backClick(){
            this.$router.replace('/home')
        },
        tabClick(index) {
            this.currentIndex = index
            this.$emit('titleClick',this.currentIndex)
        }
    }
   
}
</script>

<style scoped>
   
    .left{
        padding: 4px;
    }
    .left img{
        width: 18px;
        height: 18px;
        
    }
</style>   