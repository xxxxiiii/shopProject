<template>
  <div id="detail">
     <detail-nav-bar class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
     <scroll class="content" ref="scroll">
        <detail-swiper :detailbanner="topImages"/>
        <detail-base-info :Goods="Goods"/>
        <detail-shop-info :Shops="Shops"/>
        <detail-goods-info :DetailInfo="DetailInfo" @imageLoad="imageLoad"/>
        <detail-param-info ref="params" :ParamInfo="ParamInfo"/>
        <detail-comment-info ref="comment" :CommentInfo="CommentInfo"/>
        <goods-list ref="recommand" :goods="Recommend"/>
     </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import Scroll from '../../components/common/scroll/Scroll'
import GoodsList from '../../components/content/goods/GoodsList'

import {getDetail,getRecommend,Goods,Shops,GoodsParam} from '../../network/detail'
import {debounce} from '../../common/utils'
import {itemListenerMixin} from '../../common/mixin'
export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,

        Scroll,
        GoodsList
    },
    data() {
        return {
            iid: null,
            topImages:null,
            Goods: {},
            Shops: {},
            DetailInfo: {},
            ParamInfo: {},
            CommentInfo: {},
            Recommend: [],
            themeTopYs: [],
            getThemeTopY: null
           // itemImgListener: null
        }
    },
    mixins: [itemListenerMixin],
    created() {
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res => {
            const data = res.result;
            this.topImages = data.itemInfo.topImages;
            // 获取商品信息
            this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
            // 获取店铺信息
            this.Shops = new Shops(data.shopInfo);
            // 获取商品的详情数据
            this.DetailInfo = data.detailInfo;
            // 获取参数信息
            this.ParamInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            // 获取评论信息
            if(data.rate.cRate !== 0){
                this.CommentInfo = data.rate.list[0]
            }
            
        })
        getRecommend().then(res => {
            this.Recommend = res.data.list
        })
        this.getThemeTopY = debounce(() => {
            console.log('---')
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommand.$el.offsetTop)
        }, 50)
    },
    methods: {
        imageLoad() {
            console.log('imageLoad')
            this.$refs.scroll.refresh();
            this.getThemeTopY()
        },
        titleClick(index){
            console.log(this.themeTopYs)
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
        },
        contentScroll(position) {
            const positionY = -position.y

            for(let i in this.themeTopYs){
                parseInt(i)
            }
        }
    },

}
</script>

<style scoped>
    #detail {
        height: 100vh;
        position: relative;
        z-index: 10;
        background-color: #fff;
    }
    .detail-nav {
        position: relative;
        z-index: 11;
        background-color: #fff;
    }
    .content {
        height: calc(100% - 44px);
    }

</style>