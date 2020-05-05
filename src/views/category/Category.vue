<template>
  <div class="wapper">
      <ul>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
          <li>3</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
          <li>3</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
          <li>3</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
          <li>3</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
          <li>4</li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Category',
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
       this. scroll = new BScroll('.wapper', {
           probeType: 3,
            pullUpLoad: true
        })

        this.scroll.on('scroll', (position) => {

        })

        this.scroll.on('pullingUp', () => {

        })
    }
}
</script>

<style scoped>
    .wapper{
        height: 50px;
        background-color: rebeccapurple;
    }
</style>