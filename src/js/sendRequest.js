import ajax from './ajax'

function send (url, data) {
    return ajax({
        url,
        data
    })
}

/* eslint-disable */
let getIndexData = () => send('wap/index/getIndex')
let getUserInfo = () => send('wap/user/getUserInfo')
let getfoodDetail = ({foodsId}) => send('wap/foods/getfoodsDetail', {foodsId})
let getShopDetail = ({shopId}) => send('wap/shop/getShopDetail', {shopId})
let getShopBenefit = ({shopId, pageNo, pageSize}) => send('wap/shop/getShopFoods', {shopId, pageNo: 1, pageSize: 100})
let getFoodsEvaluate = ({foodsId, pageNo, pageSize}) => send('wap/foods/getFoodsEvaluate', {foodsId, pageNo, pageSize: 20})
let getShopEvaluate = ({shopId, pageNo, pageSize}) => send('wap/shop/getShopEvaluate', {shopId, pageNo, pageSize: 20})
let getArticleList = ({pageNo, pageSize}) => send('wap/article/getArticleList', {pageNo, pageSize: 10})
let editUserInfo = ({username, phone, addressCode}) => send('wap/user/editUserInfo', {username, phone, addressCode})
let getCollectionList = () => send('wap/user/getCollectionList')
let getOrderList = ({state}) => send('wap/orders/getOrdersList', {state})
let getOrderDetail = ({orderId}) => send('wap/orders/getOrdersDetail', {orderId})
let evaluateOrder = (payload) => send('wap/orders/evaluateOrders', payload)
let getShopFoods = (payload) => send('wap/shop/getShopFoods', payload)
let setCollection = ({foodsId}) => send('wap/foods/setCollection', {foodsId})
let deleteCollection = ({foodsId}) => send('wap/foods/deleteCollection', {foodsId})
let payOrder = ({buyNumber, foodsId}) => send('wap/orders/payOrder', {buyNumber, foodsId})
let login = ({phone, password}) => send('common/worker/login', {phone, password})
let getOrderRecordList = ({orderMonth, pageNo, pageSize}) => send('common/worker/getOrderList', {orderMonth, pageNo: 1, pageSize: 200})
let getMonthSale = ({orderMonth}) => send('common/worker/getMonthSale', {orderMonth})
let getCodeUrl = ({orderNumber}) => send('common/worker/getCodeUrl', {orderNumber})
let getContinuePay = ({orderNumber}) => send('wap/orders/continuePay', {orderNumber})
let sureScan = ({orderNumber}) => send('common/worker/changeOrders', {orderNumber})

// export * from './testData'
export {
    getIndexData, // 首页
    getUserInfo, // 用户信息
    getfoodDetail, // 商品信息
    getShopDetail, // 商店信息
    getShopBenefit, // 商店优惠
    getFoodsEvaluate, // 商品评价
    getShopEvaluate, // 商店评价
    getArticleList, // 文章列表
    editUserInfo, // 编辑个人资料
    getCollectionList, // 收藏列表
    getOrderList, // 订单中心
    getOrderDetail, // 订单详情
    evaluateOrder, // 评价订单
    getShopFoods, // 优惠列表+搜索
    setCollection, // 收藏商品
    deleteCollection, // 取消收藏商品
    payOrder, // 支付订单
    login, // 登陆
    getOrderRecordList, // 记录账单
    getMonthSale, // 月销售总量
    getCodeUrl, // 核销信息
    getContinuePay, // 继续支付
    sureScan, // 核销
}
