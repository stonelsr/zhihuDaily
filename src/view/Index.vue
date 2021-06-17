<template>
  <div class="container">
    <Header :time="time"></Header>
    <van-pull-refresh v-model="refreshing" @refresh="refreshList">
      <Banner class="banner" :bannerList="bannerList"></Banner>
      <van-list
        class="v-list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        loading-text="加载中..."
        :immediate-check=false
        @load="loadMore()">
        <TList v-for="item in list" :key="item.id" :item="item"></TList>
<!--
        <div class="flex-cneter">{{item.date}}</div>
-->
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
import api from '../api'
import Header from '../components/Header/index'
import Banner from '../components/Banner'
import {List} from 'vant'
import TList from '../components/TList'
export default {
  name: 'Index',
  components: {
    TList,
    Banner,
    Header,
    List
  },
  data () {
    return {
      latest: [],
      list: [],
      bannerList: [],
      time: '',
      lastTime: '',
      loading: false,
      finished: false,
      refreshing : false

    }
  },
  created () {
    api.latest().then(({data, status}) => {
      if (+status === 200) {
        // eslint-disable-next-line camelcase
        let {date, stories, top_stories} = data
        this.time = date
        this.lastTime = date
        this.list = stories
        // eslint-disable-next-line camelcase
        this.bannerList = top_stories
      }
    })
  },
  methods: {
    resetList () {
      api.latest().then(({data, status}) => {
        if (+status === 200) {
          // eslint-disable-next-line camelcase
          let {date, stories, top_stories} = data
          this.time = date
          this.lastTime = date
          this.list = stories
          // eslint-disable-next-line camelcase
          this.bannerList = top_stories

          this.refreshing = false
        }
      })
    },
    loadMore () {
      let timer = setTimeout(async () => {
        api.before(this.lastTime).then(({status, data}) => {
          if (+status === 200) {
            let {date, stories} = data
            this.time = date
            this.lastTime = date
            this.list = this.list.concat(stories)
          } else {
            this.finnish = true
          }
          this.loading = false
          clearTimeout(timer)
        })
      }, 500)
    },
    refreshList() {
      this.finished = false;
      this.resetList();
    }
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
  }
  .banner{
    margin-top: 70px;
  }
</style>
