<template>
    <div class="goods-error">
        <div class="wrap">
            <header>订单异常</header>
            <div class="content">
                该用户并非本店会员，核销该订单可能 被视为跨店异常行为，是否确认核销？
            </div>
            <div class="control">
                <div class="cancel">取消</div>
                <div class="line"></div>
                <div class="confirm">确认</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.goods-error {
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
    header {
      height: 41px;
      font-size: 15px;
      text-align: center;
      line-height: 41px;
      color: #353535;
    }
    .content {
      flex: 1;
      text-align: center;
      font-size: 12px;
      margin: 0 15px;
      line-height: 16px;
      border-bottom: 1px solid #e9e9e9;
      color:#686868;
    }
    .control {
      height: 38px;
      display: flex;
      .cancel,
      .confirm {
        flex: 1;
        text-align: center;
        line-height: 38px;
        font-size: 12px;
      }
      .cancel {
        color: #353535;
      }
      .confirm {
        color: #c22d27;
      }
      .line {
        height: 16px;
        width: 1px;
        background: #e9e9e9;
        margin-top: 12px;
      }
    }
  }
}
</style>


