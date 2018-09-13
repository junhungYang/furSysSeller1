<template>
    <div class="date-picker">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            value1:'',
        }
    },
    methods: {
        ...mapMutations(['changeDate'])
    },
    watch: {
        value1() {
            this.changeDate({index:0,date:this.value1})
        }
    }
}
</script>
<style lang="less">
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
    
}
.el-input--prefix .el-input__inner {
    height: 100%;
    width: 83px;
    padding: 0;
    padding-left: 4px;
}
.el-input__icon {
    display: none;
}
.el-picker-panel {
    z-index: 2005;
    position: absolute;
    top: 35px !important;
    left: 50% !important;
    transform: translateX(-50%);
}
</style>




