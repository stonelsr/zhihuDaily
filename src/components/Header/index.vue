<template>
  <div class="fixed header-container">
    <div class="header flex-between-center" >
      <div class="flex-center flex-column">
        <div class="font-bolder">{{time | day}}</div>
        <div>{{time | month}}月</div>
      </div>
      <h2>十七日报</h2>
      <img :src="img" alt="logo" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    time: {
      type: String
    },
    img: {
      type: String,
      default: require('../../assets/img/logo.jpg')
    }
  },
  filters: {
    month (val) {
      return val.substr(4, 2)
    },
    day (val) {
      return val.slice(-2)
    }
  },
  data () {
    return {
      day: '',
      month: ''
    }
  }
}
</script>

<style scoped>
  .fixed{
    position: fixed;
    top: 0;
    left: 0;
  }
  .font-bolder{
    font-weight: bolder;
  }
  .flex-between-center{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
  }
  .header > img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .header-container{
    width: 100%;
    z-index: 999;
    background: white;
  }
  .header{
    padding: .2rem;
  }
</style>
