<template>
  <van-swipe class="my-swipe" :autoplay="6000" indicator-color="white" :height="320" :duration="500" :touchable="true">
    <van-swipe-item v-for="item in bannerList" :key="item.id" @click="intoDetail(item.id)">
      <div class="relative">
        <img :src="item.image" :alt="item.title">
        <div class="info absolute font-white">
          <h2>{{item.title}}</h2>
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'Banner',
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    bannerList: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  methods: {
    intoDetail (id) {
      this.$router.push({path: '/Detail', query: {detailId: id}})
    }
  }
}
</script>

<style scoped>
.van-swipe-item> .relative> img{
  width: 100%;
  height: 320px;
}
.relative{
  position: relative;
}
.absolute{
  position: absolute;
}
.info{
  width: 100%;
  bottom: 0;
  padding: .4rem;
  z-index: 999;
  text-align: left;
}
.info > h2{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}
.font-white{
  color: white;
}
</style>
