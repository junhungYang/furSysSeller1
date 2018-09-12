<template>
    <div class="sell-record">
        <div class="date-wrap">
            <span>设置筛选日期 :</span>
            <input type="text">
            <span>至</span>
            <input type="text">
            <div class="button">确定</div>
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
        </div>
        <div class="scanCode">
            <img src="/static/img/组3@2x.png" alt="">
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
    data() {
      return {
        historyList:[]
      }
    },
    mounted() {
        this.scrollInit()
    },
    created() {
        let dateStr = this.dateInit()
        this.dataInit(dateStr)
    },
    methods: {
        scrollInit() {
            this.scrollList = new BScroll(this.$refs.scrollWrap,{
                click:true,
                probeType:3
            })
        },
        dataInit(dateStr) {
          axios.post('/api/order/queryOrderListByEmployee',{
          pageNumber:1,
          pageSize:10,
          start: dateStr,
          end:dateStr
        }).then((res) => {
            if(res.data.code === 0) {
              this.historyList = res.data.data.list
              console.log(this.historyList)
            }
        })
        },
        dateInit() {
          let dateObj = new Date()
          let month = dateObj.getMonth() + 1
          let year = dateObj.getFullYear()
          let date = dateObj.getDate()
          return `${year}-${month}-${date}`
        }
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
    input {
      margin: 5px;
      width: 83px;
    }
    @media screen and (max-width: 330px) {
      input {
        margin: 0;
        width: 65px;
      }
      & {
        padding: 0 13px;
      }
    }
    @media screen and (min-width: 410px) {
      input {
        width: 100px !important;
      }
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
  }
  .scroll-wrap {
    flex: 1;
    overflow: hidden;
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

