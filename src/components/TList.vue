<template>
    <div class="t-item flex-start-center" @click="intoDetail(item.id)">
      <div class="flex-grow t-word">
        <div class="font-border font-larger">{{item.title || ''}}</div>
        <div class="font-gray ">{{item.hint || ''}}</div>
      </div>
      <img :src="item.images[0]" alt="头像">
    </div>
</template>

<script>
export default {
  name: 'TList',
  props: {
    item: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  methods:{
    intoDetail (id) {
      this.$router.push({path: '/Detail', query: {detailId: id}})
    }
  }
}
</script>

<style scoped>
.flex-start-center{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flex-grow{
  flex:1;
}
.font-larger{
  font-size: larger;
}
.font-gray{
  color: #b6b3b3;
}
.font-border{
  font-weight: bolder;
}
.ellipsis{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.t-item{
  padding: .2rem .2rem 0 .2rem;
}
.t-item > img{
  width: 2rem;
  height: 2rem;
  border-radius: .2rem;
}
.t-word >div:first-child{
  padding-bottom:.2rem ;
}
.t-word{
  padding: .2rem;
  text-align: left;
}
</style>
