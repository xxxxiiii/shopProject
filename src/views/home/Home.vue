<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">首页</div>
      </nav-bar>
      <tab-control :titles="['流行','新款','精选']"
         @tabClick="tabClick"
         ref="tabControl1"
         class="tab-control"
         v-show="isTabFixed"/>
      <scroll class="content" 
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll" 
      :pull-up-load="true"
      @pullingUp="loadMore">
        <home-swiper :banner = "banner" @swiperLoad="swiperLoad"/>
        <home-recommend-view :recommend = "recommend"/>
        <feature-view/>           
        <tab-control :titles="['流行','新款','精选']"
         @tabClick="tabClick"
         ref="tabControl2"
         v-show="!isTabFixed"/>
        <good-list :goods="showGoods"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from '../../network/home'
import {debounce} from '../../common/utils'
import {itemListenerMixin} from '../../common/mixin'

export default {
    name: 'Home',
    components: {
        HomeSwiper,
        HomeRecommendView,
        FeatureView,

        NavBar,
        TabControl,
        GoodList,
        Scroll,
        BackTop
    },
    data() {
        return{
            banner: [],
            recommend: [],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []},
            },
            currentType: 'pop',
            isShowBackTop: false,
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0,
            // itemImgListener: null
        }
    },
    mixins: [itemListenerMixin],
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        }
    },
    activated() {
        this.$refs.scroll.scrollTo(0, this.saveY, 0);
        this.$refs.scroll.refresh();
    },
    deactivated() {
        // 保存Y值
        this.saveY = this.$refs.scroll.getCurrentY();
       // 取消全局事件的监听
        this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    created() {
        // 请求多个数据
        this._getHomeMultidata();
        // 请求商品数据
        this._getHomeGoods('pop');
        this._getHomeGoods('new');
        this._getHomeGoods('sell');
        
    },
    mounted() {
        console.log('mounted');
    //    let newrefresh = debounce(this.$refs.scroll.refresh, 100);
    // //    对监听事件进行保存
    //    this.itemImgListener = () => {
    //        newrefresh()
    //    }
    //    this.$bus.$on('itemImgLoad', this.itemImgListener);
    },
    methods: {
        // 事件监听
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
                    break;
            }
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        contentScroll(position) {
            // 判断backTop是否显示
            this.isShowBackTop = - position.y > 1000;

            // 判断tabControl是否吸顶(position:fixed)
            this.isTabFixed = - position.y >= this.tabOffsetTop - 40;
        },
        // 加载更多
        loadMore() {
            this._getHomeGoods(this.currentType);
        },
        swiperLoad() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        },
        
       
        // 网络请求
        _getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banner = res.data.banner.list;
                this.recommend = res.data.recommend.list;
            }).catch(err => {
                console.log(err);
            })
        },

        _getHomeGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page++;
                this.$refs.scroll.finishPullUp();
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
#home {
    /* padding-top: 39px; */
    height: 100vh;
    position: relative;
}
.home-nav{
    background-color: orange;
    color: #fff;
   
}

.tab-control{
    /* display: fixed; */
    position: relative;
    background-color: #fff;
    z-index: 9;
}

.content {
    height: calc(100% - 93px);
    overflow: hidden;
}

</style>