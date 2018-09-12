<template>
    <div class="goods-success">
        <div class="wrap">
            <div class="content">核销成功</div>
            <div class="btn" @click.stop="goodsSuccessaManage(false)">确认</div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations(['goodsSuccessaManage'])
    }
}
</script>
<style lang="less" scoped>
.goods-success {
   position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2); 
  .wrap {
      width: 235px;
    height: 121px;
    display: flex;
    flex-direction: column;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .content {
        flex:1;
        text-align: center;
        line-height: 82px;
        border-bottom:1px solid #e9e9e9;
        color:#353535;
        font-size:15px;
        margin: 0 15px;
    }
    .btn {
        height: 38px;
        font-size:12px;
        text-align: center;
        line-height:38px;
        color:#c22d27;
    }
  }
}
</style>


