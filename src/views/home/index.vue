<template>
    <div class="">
      <div class="title">
        <div class="today">
          今日推荐
        </div>
        <div class="tit">
            <van-tabs style="width=200px">
              <van-tab v-for="item in titles"
              :title="item.name"
              :key="item.id"
              >
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="banner in banners" :key="banner.id">
            <img v-lazy="banner.imageUrl" />
        </van-swipe-item>
      </van-swipe>
      <div class="hot-til">
       <div class="hot-til-item" v-for="item in hot" :key="item.id">
         <div class="deeps">
           <img :src="item.imageUrl" alt="">
           <p>{{item.word}}</p>
         </div>
         <div class="text">
            {{item.text}}
         </div>
       </div>
      </div>
      <div class="ban">

      </div>
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="bk"
             v-for="item in list"
             :key="item.id"
             @click="jump(item.id)"
             >
          <div class="bkimg">
            <img :src="item.image" alt="">
          </div>
          <div class="bkright">
            <div class="van-ellipsis">{{item.title}}</div>
            <div class="hours"><span>{{item.dataoke.rankingTag}}</span></div>
            <div class="day">全天热卖No.{{item.dataoke.dailyRanking}}</div>
            <div class="pri">劵后￥<span>{{item.price}}</span>&nbsp;&nbsp;&nbsp;<del>{{item.originPrice}}</del></div>
            <div class="month">
              <van-tag plain type="danger" v-if="item.couponValue">{{item.couponValue}}</van-tag>
              <span>月销{{item.saleNum | saleNum}}
              <van-icon name="shopping-cart-o"
              :style="{color: 'red', fontSize: '18px'}"
              @click.stop="addCart(item)"
              /></span></div>
          </div>
        </div>
      </van-list>
    </div>
</template>

<script>
import { getHome, getTab, getBanner, getBk } from '@/api/home'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      titles: [],
      hot: [],
      list: [],
      loading: false,
      finished: false,
      nextIndex: 0,
    }
  },
  methods: {
    onLoad() {
      getBk(this.nextIndex)
        .then(data => {
          this.list.push(...data.list)
          this.loading = false
          this.nextIndex = data.nextIndex
          this.finished = data.isEnd
        })
    },
    addCart({ id, image, title }) {
      const mess = {
        id,
        image,
        title,
        num: 1,
      }
      this.$store.commit('addCart', mess)
    },
    jump(id) {
      this.$router.push('/detail?id=' + id)
    },
  },
  created() {
    getHome()
      .then((data) => {
        this.hot = data.grids
      })
    getTab()
      .then(data => {
        this.titles = data.list.slice(1)
      })
    getBanner()
      .then(data => {
        this.banners = data
      })
  },
}
</script>

<style lang="less" scoped>
  div{
    width: 100%;
    /* 今日推荐 */
    .title{
      .today{
        float: left;
        font-size: 16px;
        height: 44px;
        width: 65px;
        line-height: 44px;
        margin-left: 10px;
        position: relative;
      }
      .today::after{
        content: '';
        display: block;
        width: 1px;
        height: 20px;
        background-color: black;
        position: absolute;
        right: -10px;
        top: 10px;
      }
      .tit{
        float: left;
        width: 260px;
        margin-left: 20px;
        /deep/.van-tabs__nav--line.van-tabs__nav--complete{
          padding-left: 0 !important;
          /deep/.van-tabs__wrap--scrollable .van-tab{
            padding-left: 0 !important;
          }
        }
      }
    }
    /* 轮播图 */
    /deep/.van-swipe__track{
      height: 100px;
      margin-top: 5px;
      img{
        width: 100%;
        height: 100%;
      };
    }
    /* 热卖 */
    .hot-til{
      height: 82px;
      width: 100%;
      margin-top: 5px;
      display: flex;
      .hot-til-item{
        position: relative;
        .deeps{
          width: 70px;
          height: 55px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          text-align: center;
          img{
            width: 43px;
            height: 43px;
            text-align: center;
            margin-top: -5px;
          }
          p{
            font-size: 12px;
            margin-top: -5px;
          }
        }
        .text{
          font-size: 12px;
          background-color: violet;
          display: inline;
          border-radius: 10px;
          margin-left: 20px;
        }
      }
    }
    .ban{
      width: 100%;
      height: 80px;
      background-image: url(http://img6.lukou.com/static/img/baokuan-title.df225a5.png);
      background-size: 100% 80px;
    }
    /* 爆款商品 */
    .van-list{
      background-color: #fff;
      margin-top: -8px;
      .bk{
      width: 100%;
      height: 150px;
      .bkimg{
        width: 120px;
        height: 120px;
        float: left;
        margin-top: 15px;
        margin-left: 8px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .bkright{
        width: 205px;
        height: 120px;
        float: left;
        margin-left: 10px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .van-ellipsis{
          font-size: 14px;
          color: #43240c;
        }
        .hours{
          span{
            font-size: 12px;
             background: linear-gradient(92deg,#ff5201,#fa8c16);
             border-radius: 5px;
             padding: 0 10px;
          }
        }
        .day{
          font-size: 12px;
          color: #faad14;
        }
        .pri{
          color: #f40008;
          font-size: 12px;
          span{
            font-size: 18px;
            font-weight: 600;
          }
          del{
            color: #b1a9a5;
          }
        }
        .month{
          display: flex;
          justify-content: space-between;
          /deep/.van-tag--plain{
          text-align: center;
          width: 40px !important;
          }
          span{
            font-size: 12px;
            display: block;
          }
        }

      }
    }
    }

  }
</style>
