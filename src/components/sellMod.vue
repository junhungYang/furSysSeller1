<template>
    <div class="sellMod">
      <div class="main">
        <header class="shop-name">{{myShop}}</header>
        <div class="content">
          <div class="data-wrap">
              <div class="title">会员资料</div>
              <ul class="user-data">
                  <li>
                      <span>会员名称</span>
                      <span>{{vipInfo.name}}</span>
                  </li>
                  <li>
                      <span>会员编号</span>
                      <span>{{vipInfo.code}}</span>
                  </li>
                  <li>
                      <span>所属门店</span>
                      <span>{{vipInfo.shop}}</span>
                  </li>
                  <li>
                      <span>购买系列</span>
                      <span>听风细雨</span>
                  </li>
              </ul>
              <div class="sell-control">
                  <div class="cancel">取消</div>
                  <div class="line"></div>
                  <div class="confirm">核销</div>
              </div>
          </div>
          <div class="control">
              <div class="scanCode" @click="getCustomerData">点击扫码</div>
              <div class="check-history" @click="goToRecord">查看核销记录</div>
          </div>
        </div>
      </div>
      <div class="sellRes">
        <!-- <v-goodsError></v-goodsError> -->
        <!-- <v-goodsSuccess></v-goodsSuccess> -->
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import goodsError from '../plugin/goodsError'
import goodsSuccess from '../plugin/goodsSuccess'
import router from '../router/index'
export default {
  data() {
    return {
      myShop: 'null',
      vipInfo: {
        name: "唐先生",
        code: "C00001",
        shop: "ABCD",
        goods: ['听风细雨', '听风细雨1', '听风细雨2', '听风细雨3']
      }
    }
  },
  methods: {
    goToRecord() {
        router.push('/sellRecord')
    },
    getCustomerData() {
      
    }
  },
  created() {
    console.log(this.$route.params)
    this.myShop = this.$route.params.shopName
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
  background: url("/static/img/背景@2x.png");
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
          li {
            height: 31px;
            font-size: 13px;
            display: flex;
            line-height: 31px;
            span:nth-of-type(1) {
              width: 55px;
            }
            span:nth-of-type(2) {
              flex: 1;
              text-align: right;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
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

