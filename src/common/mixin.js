import {debounce} from './utils'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        // 监听item中图片加载完成
         const newrefresh = debounce(this.$refs.scroll.refresh, 1000);
         this.itemImgListener = () => {
             newrefresh()
         };
         this.$bus.$on('itemImgLoad', this.itemImgListener);
        // console.log('mixinsmounted');
    }
}