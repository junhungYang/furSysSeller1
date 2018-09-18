import axios from 'axios'
import Vue from 'vue'
const waterfullApi = {
    waterfullIndex:1,
    propInit(mod) {
        mod.waterfullList = [];
        mod.loadingState = "loading..."
        mod.scrollBottomFlag = true
    },
    scrollGetData(mod, scrollWrap, scrollList, url) {
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
        this.scrollRefresh(mod, scrollList)
        //为了模拟loading效果，暂时使用延时，真正上线时应取消
        setTimeout(() => {
            let start = mod.$store.state.firstDate;
            let end = mod.$store.state.lastDate;
            let str = `pageNumber=1&pageSize=10&start=${start}&end=${end}`;
            axios.get(`${url}order/queryOrderListByEmployee?${str}`).then(res => {
                if (res.data.code === 0) {
                    mod.historyList = mod.historyList.concat(res.data.data.list);
                    this.scrollRefresh(mod, scrollList);
                    mod.loadingState = "loading...";
                    mod.loadingFlag = false;
                    mod.scrollBottomFlag = true;
                } else if (res.data.code === -1) {
                    mod.loadingState = "没有数据了...";
                    setTimeout(() => {
                        mod.loadingFlag = false;
                        mod.scrollBottomFlag = true
                    }, 1500);
                    alert(res.data.msg)
                } else if (res.data.code === 10101) {
                    location.assign("http://qinqing.ydcycloud.com/employee/index.html");
                }
            })
            // axios
            //     .post(`${url}order/queryOrderListByEmployee`, {
            //     pageNumber: this.waterfullIndex,
            //     pageSize: 15,
            //     start,
            //     end
            //     }, {
            //         headers: {
            //             'Content-Type': 'application/x-www-form-urlencoded'
            //         }
            //     })
            //   .then(res => {
            //     if (res.data.code === 0) {
            //         mod.historyList = mod.historyList.concat(res.data.data.list);
            //         this.scrollRefresh(mod, scrollList);
            //         mod.loadingState = "loading...";
            //         mod.loadingFlag = false;
            //         mod.scrollBottomFlag = true;
            //     }else if(res.data.code === -1) {
            //         mod.loadingState = "没有数据了...";
            //         setTimeout(() => {
            //             mod.loadingFlag = false;
            //             mod.scrollBottomFlag = true
            //         }, 1500);
            //         alert(res.data.msg)
            //     }else if(res.data.code === 10101) {
            //         location.assign("http://qinqing.ydcycloud.com/employee/index.html");
            //     }
            //   })
        }, 1500);
    },
    scrollRefresh(mod, scrollList) {
        Vue.nextTick(() => {
            mod[scrollList].refresh()
        })
    }
}
export default waterfullApi