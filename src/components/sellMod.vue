<template>
    <div class="sellMod">
      <div class="main">
        <header class="shop-name">{{dealername}}</header>
        <div class="content">
          <div class="data-wrap">
              <div class="title">会员资料</div>
              <ul class="user-data">
                  <li>
                      <span>会员名称</span>
                      <span>{{customerName}}</span>
                  </li>
                  <li>
                      <span>会员编号</span>
                      <span>{{customerCode}}</span>
                  </li>
                  <li>
                      <span>所属门店</span>
                      <span>{{shopName}}</span>
                  </li>
                  <li>
                      <span>购买系列</span>
                      <div class="select">
                        <div class="select-title" @click="selectShowStateMange">
                          <span>{{sellingGood ? sellingGood.name : '请选择'}}</span>
                          <img class="icon" src="/static/img/下拉@2x.png">
                        </div>
                        <div class="slider-wrap" v-show="selectShowState" ref="scrollWrap">
                          <ul>
                            <li v-for="item,index in goodsList"  :key="index" @click="sellingState(item)">{{goodsList[index].name}}</li>
                          </ul>
                        </div>
                      </div>
                  </li>
              </ul>
              <div class="sell-control">
                  <div class="cancel" @click="customerInfoInit(false)">取消</div>
                  <div class="line"></div>
                  <div class="confirm" @click="sellConfirm">核销</div>
              </div>
          </div>
          <div class="control">
              <div class="scanCode" @click="getCustomerData">点击扫码</div>
              <div class="check-history" @click="goToRecord">查看核销记录</div>
          </div>
        </div>
      </div>
      <div class="sellRes">
        <v-goodsError v-show="goodsErrorState"></v-goodsError>
        <v-goodsSuccess v-show="goodsSuccessState"></v-goodsSuccess>
      </div>
    </div>
</template>
<script>
import Vue from "vue"
import axios from 'axios'
import goodsError from '../plugin/goodsError'
import goodsSuccess from '../plugin/goodsSuccess'
import router from '../router/index'
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import wechat from '../api/wechat'
export default {
  data() {
    return {
      dealername:'',
      selectShowState:false,
      sellingGood:'',
      memberCode:''
    }
  },
  created() {
    this.myShop = this.$route.params.shopName
    this.getEmployeeInfo()
    this.getSeriesListByDealer()
  },
  mounted() {
    this.goodsListScrollInit()
  },
  computed: {
    ...mapState([
      'goodsErrorState',
      'goodsSuccessState',
      'customerName',
      'shopName',
      'customerCode',
      'goodsList']),
      firstGoods() {
        return this.goodsList[0] ? this.goodsList[0] : ''
      }
  },
  methods: {
    ...mapMutations([
      'goodsSuccessaManage',
      'goodsErrorManage',
      'customerInfoInit',
      'goodsListInit']),
      selectShowStateMange() {
        this.selectShowState = !this.selectShowState
      },
    getSeriesListByDealer() {
      axios.get(`${domain.testUrl}dealer/getSeriesListByDealer`).then(res => {
        if(res.data.code === 0) {
          this.goodsListInit(res.data.data)
        }else if(res.data.code === -1) {
          alert(res.data.msg)
        }else if(res.data.code === 10101) {
          location.assign('http://qinqing.ydcycloud.com/employee/index.html')
        }
      })
    },
    getEmployeeInfo() {
      axios.get(`${domain.testUrl}user/getEmployeeInfo`).then(res => {
        if(res.data.code === 0) {
          console.log(res.data.data)
          this.dealername = res.data.data.dealername
        }else if(res.data.code === -1) {
          alert(res.data.msg)
        }else if(res.data.code === 10101) {
          location.assign('http://qinqing.ydcycloud.com/employee/index.html')
        }
      })
    },
    sellingState(item) {
      this.sellingGood = item;
      this.selectShowState = false
    },
    goToRecord() {
      router.push('/sellRecord')
    },
    //初始化下拉菜单拖动功能
    goodsListScrollInit() {
      this.scrollList = new BScroll(this.$refs.scrollWrap,{
                click:true,
                probeType:3
            })
    },
    //扫码时
    getCustomerData() {
      wechat.scanQrCode((data) => {
        let memberCode = data
        this.memberCode = memberCode
        axios.get(`${domain.testUrl}user/getUserInfoByMemberCode?memberCode=${memberCode}`).then((res) => {
          if(res.data.code === 0) {
            let customerInfo = res.data.data
            this.customerInfoInit({
              customerName: customerInfo.nickname,
              shopName: customerInfo.reg_dealer_name,
              customerCode: customerInfo.member_code,
          })
          }else if(res.data.code === -1) {
            alert(res.data.msg)
          }else if(res.data.code === 10101) {
            location.assign('http://qinqing.ydcycloud.com/employee/index.html')
          }
        })
      })  
    },
    //正式分销前判断用户身份
    // userConfirm() {
    //   if (this.customerName) {
    //     axios.post("/api/order/isAbnormal", {
    //       memberCode: this.code
    //     }).then((res) => {
    //       if (res.data.code === 0) {
    //         this.sellConfirm()
    //       } else if (res.data.code === 1) {
    //         this.goodsErrorManage(true)
    //       }
    //     })
    //   }
    // },
    //按分销按钮
    sellConfirm() {
      axios.get(`${domain.testUrl}order/addOrder?memberCode=${this.memberCode}&seriesId=${this.sellingGood.id}`).then((res) => {
        console.log(res)
        if (res.data.code === 0) {
          this.goodsSuccessaManage(true)
          this.sellingGood = '请选择'
        }else if(res.data.code === -1) {
          alert(res.data.msg)
        }else if(res.data.code === 10101) {
          location.assign('http://qinqing.ydcycloud.com/employee/index.html')
        }
      })
    },
  },
  watch: {
    selectShowState() {
      Vue.nextTick(() => {
        this.scrollList.refresh()
      })
    }
  },
  components: {
    'v-goodsError': goodsError,
    'v-goodsSuccess': goodsSuccess
  }
}
</script>

<style lang="less" scoped>
.sellMod {
  height: 100%;
  background: url("/static/img/background.jpg");
  background-size: cover;
  .main {
    display: flex;
    flex-direction: column;
    .shop-name {
      height: 37px;
      background: #fff;
      text-align: center;
      line-height: 37px;
      font-size: 13px;
      color:#353535;
      font-weight: 600;
    }
    .content {
      flex: 1;
      .data-wrap {
        margin: 0 auto;
        margin-top: 55px;
        width: 300px;
        background: #fff;
        .title {
          height: 33px;
          line-height: 33px;
          background: linear-gradient(to bottom, #ecb678, #c59a68);
          text-align: center;
          font-size: 13px;
          color: #fff;
        }
        .user-data {
          margin: 0 15px;
          border-bottom: 1px solid #e9e9e9;
          li {
            height: 31px;
            font-size: 13px;
            display: flex;
            line-height: 31px;
            color: #353535;
            span:nth-of-type(1) {
              width: 55px;
            }
            span:nth-of-type(2),.select {
              flex: 1;
              text-align: right;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            span:nth-of-type(2) {
              overflow: hidden;
            }
            .select {
              position: relative;
              .slider-wrap {
                background:#fff;
                border-radius: 10px;
                box-shadow: 0 0 8px rgba(0,0,0,0.4);
                position: absolute;
                width:180px;
                max-height:200px;
                overflow: hidden;
                top:32px;
                right:0;
                padding: 0 13px;
                ul{
                  li {
                    text-align: right;
                    border-bottom:1px solid #e9e9e9;
                  }
                }
              }
              .select-title {
                position: absolute;
                right: 0;
                top: 3px;
              display: block;
              border:1px solid #e9e9e9;
              width:100px;
              height:22px;
              line-height: 22px;
              span {
                display: inline-block;
                width: 72px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              img {
                vertical-align: top;
                margin-top:10px;
                margin-left:6px;
                margin-right:6px;
                width: 8px;
              }
            }
            }
          }
          li:last-of-type {
                    margin-bottom:9px;
          }
        }
        .sell-control {
          height: 50px;
          display: flex;
          .cancel,
          .confirm {
            flex: 1;
            text-align: center;
            line-height: 50px;
            font-size: 13px;
          }
          .cancel {
            color: #353535;
          }
          .confirm {
            color: #e2ccb3;
          }
          .line {
            height: 18px;
            width: 1px;
            background: #ccc;
            margin-top: 16px;
          }
        }
      }
    }
    .control {
      margin-top: 45px;
      .scanCode,
      .check-history {
        width: 98px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        margin: 0 auto;
        border-radius: 10px;
        color: #fff;
        font-size: 13px;
        background: linear-gradient(to bottom, #ecb678, #c59a68);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.575);
      }
      .check-history {
        margin-top: 30px;
      }
    }
  }
}
</style>

