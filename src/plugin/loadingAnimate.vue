<template>
  <div class="loading">
    <div class="wrap">
      <div class="loader loader--style2" title="1">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
          <animateTransform 
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
      <div class="text">loading...</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.loader {
  text-align: center;
  display: inline-block;
  vertical-align: top;
}
.text {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  color:#353535;
}
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
svg path,
svg rect {
  fill: #c59a68;
}
</style>

