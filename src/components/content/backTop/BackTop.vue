<template>
  <div class="back-top">
      <img src="../../../assets/img/common/back-top.svg" alt="">
  </div>
</template>

<script>
export default {
    name: 'BackTop'
}
</script>

<style scoped>
.back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
    z-index: 10;
}

.back-top img {
    width: 35px;
    height: 35px;
}
</style>