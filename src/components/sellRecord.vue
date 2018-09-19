<template>
    <div class="sell-record">
        <div class="date-wrap">
            <span>设置筛选日期 :</span>
            <!-- <input type="text"> -->
            <div><datePickerFirst></datePickerFirst></div>
            <span>至</span>
            <div><datePickerLast></datePickerLast></div>
            <div class="button" @click="firstDate && lastDate && datePickerBtn()">确定</div>
        </div>
        <div class="scroll-wrap" ref="scrollWrap">
            <ul>
                <li v-for="item,index in historyList" :key="index">
                    <div class="consumer-phone">
                        <div class="consumer">
                            消费者: {{item.users_name}}
                        </div>
                        <div class="phone-num">
                            联系电话: {{item.users_phone}}
                        </div>
                    </div>
                    <div class="buy-data">
                        <div class="goods">
                            购买系列: <span>{{item.series_name}}</span>
                        </div>
                        <div class="date">
                        <span>{{item.create_time}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <v-loadingAnimate v-show="loadingFlag"></v-loadingAnimate>
        </div>
        <div class="scanCode">
            <img src="/static/img/组3@2x.png" alt="">
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import datePickerFirst from './datePickerFirst'
import datePickerLast from './datePickerLast'
import {mapState,mapMutations} from 'vuex'
import loadingAnimate from '../plugin/loadingAnimate'
export default {
    data() {
      return {
        historyList:[],
        dateStr:'',
        loadingFlag:true,
        pageIndex:1,
        fromBtn:false
      }
    },
    computed: {
      ...mapState(['firstDate','lastDate'])
    },
    mounted() {
        this.scrollInit()
    },
    created() {
        this.getHistory()
    },
    methods: {
        ...mapMutations(['changeDate']),
        scrollInit() {
            this.scrollList = new BScroll(this.$refs.scrollWrap,{
                click:true,
                probeType:3,
                pullDownRefresh: {
                  threshold: 20,
                  stop: 0
                },
                pullUpLoad:true
            })
            this.scrollEventInit()
        },
        scrollEventInit() {
            this.scrollList.on('pullingDown',() => {
                this.pageIndex--
                this.pageIndex > 0 ? this.getHistory() :　'';
                this.scrollList.finishPullDown()
            })
            this.scrollList.on('pullingUp',pos => {
                this.pageIndex ++
                this.getHistory()
                this.scrollList.finishPullUp()
            })
        },
        getHistory() {
          let str
          if(this.firstDate && this.lastDate && this.fromBtn) {
            //规定了必须有日期区间而且通过按钮确定后才会进入到请求具体日子的请求中
            str = `pageNumber=${this.pageIndex}&pageSize=10&start=${this.firstDate}&end=${this.lastDate}`
          } else {
            str = `pageNumber=${this.pageIndex}&pageSize=10`
          }
          // ${domain.testUrl}order/queryOrderListByEmployee?${str}
          // /api/user/getUserInfoByMemberCode
          this.loadingFlag = true
          axios.get(`${domain.testUrl}order/queryOrderListByEmployee?${str}`).then(res => {
            if(res.data.code === 0) {
                this.historyList = res.data.data.list
              }else if(res.data.code === -1) {
                alert(res.data.msg)
              }else if(res.data.code === 10101) {
                // location.assign('http://qinqing.ydcycloud.com/employee/index.html')
              }
          })
          setTimeout(() => {
            this.loadingFlag = false
          }, 1500);
        },
        // dateInit() {
          //     let dateObj = new Date()
          //     let monthStr = `${dateObj.getMonth() + 1}`
          //     let year = dateObj.getFullYear()
          //     if(monthStr.length === 1) {
          //       monthStr = 0 + monthStr
          //     }
          //     let dateStr = `${dateObj.getDate()}`
          //     if(dateStr.length === 1) {
          //       datrStr = 0 + dateStr
          //     }
          //     this.changeDate({
          //       index:3,
          //       dateStr:`${year}-${monthStr}-${dateStr}`
          //     })
          //     return `${year}-${monthStr}-${dateStr}`
          // },
        datePickerBtn() {
          this.pageIndex = 1;  //假如用户选择了日期，那么初始化页数，从新从第一页开始请求
          this.fromBtn = true
          this.getHistory()
        }
    },
    components: {
      datePickerFirst,
      datePickerLast,
      'v-loadingAnimate':loadingAnimate
    }
}
</script>

<style lang="less" scoped>
.sell-record {
  height: 100%;
  display: flex;
  flex-direction: column;
  .date-wrap {
    height: 37px;
    border-bottom: 1px solid #ccc;
    line-height: 37px;
    font-size: 12px;
    padding: 0 13px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.116);
    color: #353535;
    div {
      // margin:0 5px;
      display: inline-block;
      width: 83px;
    }
    .button {
      position: absolute;
      right: 13px;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 43px;
      height: 20px;
      border-radius: 8px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      background: linear-gradient(to bottom, #ecb678, #c59a68);
    }
    @media screen and (max-width: 330px) {
      input {
        margin: 0;
        width: 60px;
      }
      & {
        padding: 0 4px;
      }
      .button {
        right: 4px;
      }
    }
    @media screen and (min-width: 410px) {
      input {
        width: 100px !important;
      }
    }
  }
  .scroll-wrap {
    flex: 1;
    overflow: hidden;
    position: relative;
    ul {
      li {
        padding: 18px 13px 18px 13px;
        height: 38px;
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        .buy-data {
          margin-left: 20px;
          width: 150px;
          .goods,
          .date {
            text-align: right;
          }
          .goods {
            color: #353535;
            span {
              color: #c59a68;
            }
          }
          .date {
            margin-top: 10px !important;
            span {
              display: block;
              font-size: 20px !important;
              color: #8e8e8e;
              transform: scale(0.5);
              float: left;
            }
          }
        }
        .consumer-phone {
          flex: 1;
          color: #353535;
        }
        .consumer-phone,
        .buy-data {
          font-size: 14px;
          div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          div:nth-of-type(2) {
            margin-top: 13px;
          }
        }
        @media screen and (max-width: 330px){
          .buy-data {
            width: 120px;
          }
        }
      }
      .loading {
        height: 40px;
        text-align: center;
        line-height:40px;
        color:#ccc;
        font-size: 12px;
      }
    }
  }
  .scanCode {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 13px;
    bottom: 13px;
    img {
      height: 100%;
    }
  }
}
</style>

