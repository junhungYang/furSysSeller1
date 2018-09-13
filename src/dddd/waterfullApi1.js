import axios from 'axios'
import Vue from 'vue'
const waterfullApi = {
    waterfullIndex:1,
    propInit(mod) {
        mod.waterfullList = [];
        // mod.loadingState = "亲别急，立刻给您送上"
        mod.scrollBottomFlag = true
    },
    scrollGetData(mod, scrollWrap, scrollList, url) {
        console.log(12346)
        let scrollWrap_H = parseInt(getComputedStyle(mod.$refs[scrollWrap], null)['height']);
        let scroll_H
        mod[scrollList].on('scroll', (pos) => {
            scroll_H = Math.abs(Math.round(pos.y)) + scrollWrap_H
            if (scroll_H >= mod[scrollList].scrollerHeight && mod.scrollBottomFlag === true) {
                mod.scrollBottomFlag = false
                this.listInit(mod, url, scrollList)
            }
        })
    },
    listInit(mod, url, scrollList) {
        mod.loadingFlag = true;
        this.waterfullIndex++;
        console.log(this.waterfullIndex)
        console.log(mod.dateStr)
        // this.scrollRefresh(mod, scrollList)
        //为了模拟loading效果，暂时使用延时，真正上线时应取消
        setTimeout(() => {
            axios
              .post(url, {
                pageNumber: this.waterfullIndex,
                pageSize: 15,
                start: mod.dateStr,
                end: mod.dateStr
              })
              .then(res => {
                if (res.data.code === 0) {
                    mod.historyList = mod.historyList.concat(res.data.data.list)
                }
                  mod.loadingFlag = false;
                  mod.scrollBottomFlag = true;
                  this.scrollRefresh(mod, scrollList);
              })
        }, 1500);
    },
    scrollRefresh(mod, scrollList) {
        Vue.nextTick(() => {
            mod[scrollList].refresh()
        })
    }
}
export default waterfullApi