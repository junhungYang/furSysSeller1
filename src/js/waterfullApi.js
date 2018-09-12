import axios from 'axios'
import Vue from 'vue'
export default {
  propInit(mod) {
    mod.waterfullList = [];
    mod.waterfullIndex = 0;
    mod.loadingState = "亲别急，立刻给您送上"
    mod.scrollBottomFlag = true
  },
  listInit(mod, url, scrollList) {
    mod.loadingFlag = true;
    this.scrollRefresh(mod, scrollList)
    //为了模拟loading效果，暂时使用延时，真正上线时应取消
    setTimeout(() => {
      axios.get(url).then(res => {
        if (res.data.code === 0) {
          let data = res.data.data
          data.waterfullList.forEach(item => {
            mod.waterfullList.push(item)
          })
          console.log(mod.waterfullList)
          mod.loadingFlag = false;
          mod.scrollBottomFlag = true;
          this.scrollRefresh(mod, scrollList);
          mod.loadingState = "亲别急，立刻给您送上";
        }
      }).catch(() => {
        mod.loadingState = "不好意思(┬.┬)，没有数据了"
        setTimeout(() => {
          mod.loadingFlag = false;
          mod.scrollBottomFlag = true
        }, 1500);
      })
    }, 1500);
  },
  scrollGetData(mod, scrollWrap, scrollList, url) {
    let scrollWrap_H = parseInt(getComputedStyle(mod.$refs[scrollWrap], null)['height']);
    let scroll_H
    mod[scrollList].on('scroll', (pos) => {
      scroll_H = Math.abs(Math.round(pos.y)) + scrollWrap_H
      if (scroll_H >= mod[scrollList].scrollerHeight && mod.scrollBottomFlag === true) {
        mod.scrollBottomFlag = false
        this.trandGetData(mod, scrollList, url)
      }
    })
  },
  trandGetData(mod, scrollList, url) {
    mod.waterfullIndex++
      this.listInit(mod, url + mod.waterfullIndex, scrollList)
  },
  scrollRefresh(mod, scrollList) {
    Vue.nextTick(() => {
      mod[scrollList].refresh()
    })
  }
}
