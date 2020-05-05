<template>
  <div class="param-info" v-if="Object.keys(ParamInfo).length !== 0">
      <table v-for="(table,i) in ParamInfo.sizes" :key="i">
          <tr v-for="(tr,j) in table" :key="j">
              <td v-for="(td,k) in tr" :key="k">{{td}}</td>
          </tr>
      </table>
      <table class="info">
          <tr  v-for="(info,i) in ParamInfo.infos" :key="i">
              <td class="info-key">{{info.key}}</td>
              <td class="info-value">{{info.value}}</td>
          </tr>
      </table>
      <div class="info-img" v-if="ParamInfo.image.length !== 0">
        <img :src="ParamInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailParamInfo',
    props: {
        ParamInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .param-info table {
        width: 100%;
        border-collapse: collapse;
    }
    .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info {
    border-top: 5px solid rgba(0,0,0,.1);
  }
  .info-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .info-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>