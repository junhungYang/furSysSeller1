/* eslint-disable */
import Cookies from 'js-cookie'

let img1 = require('@/assets/images/demoBanner.png'),
    img2 = require('@/assets/images/banner.png'),
    avatar = require('@/assets/images/demoImg.png'),
    shopFood = [],
    RecordList = []

let indexData = {
    advertList: [
        {
            id: 1,
            link: 'http://www.baidu.com',
            imageUrl: img2,
            content: '啊看见合适的法老的司法部拉就开始的红包飞率氨基酸的红包飞安居客来说不得法阿里会计师的红包飞啊蛇毒极寒风暴v爱江山大部分阿里斯顿黄金分割'
        },
        {
            id: 2,
            link: 'http://www.baidu.com',
            imageUrl: img1,
            content: '啊看见合适的法老的司法部拉就开始的红包飞率氨基酸的红包飞安居客来说不得法阿里会计师的红包飞啊蛇毒极寒风暴v爱江山大部分阿里斯顿黄金分割'
        },
        {
            id: 3,
            link: 'http://www.baidu.com',
            imageUrl: avatar,
            content: '啊看见合适的法老的司法部拉就开始的红包飞率氨基酸的红包飞安居客来说不得法阿里会计师的红包飞啊蛇毒极寒风暴v爱江山大部分阿里斯顿黄金分割'
        },
    ],
    'foodList': [
        {
            'content': '测试测试测试测试测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试',
            'id': 2,
            'price': 30,
            'remain': 80,
            'imageUrl': avatar,
            'realPrice': 20,
            'name': '雪糕'
        },
        {
            'content': '测试测试测试测试测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试测试试测测试测试测试测试测试测试',
            'id': 1,
            'price': 55,
            'remain': 28,
            'imageUrl': avatar,
            'realPrice': 20,
            'name': '冰淇淋'
        }
    ],
    'slideShowList': [
        {
            'id': 1,
            'imageUrl': img1,
            'link': 'http://baidu.com'
        },
        {
            'id': 1,
            'imageUrl': img2,
            'link': 'sfdsadfa'
        }
    ]
}
let userInfo = {
    'username': '霍礼康',
    'headImageUrl': avatar,
    'userId': 1,
    'phone': '18924563266',
    'nickname': '他正在输入',
    'address': '云南省 红河哈尼族彝族 元阳县',
    'addressCode': 12213
}
let foodDetail = {
    'endtime': '2018-07-06 15:30:01',
    'imageUrl': img1 + ',' + img2,
    'state': 1,
    'headList': [
        {
            'headimgurl': avatar
        },
        {
            'headimgurl': avatar
        }
    ],
    'residue': 8,
    'id': 1,
    'content': '好吃你吃不吃',
    'shopAddress': '佛山广东',
    'endBuyTime': '2018-06-30 15:30:07',
    'price': 55,
    'shopName': '陈太店',
    'shopId': 1,
    'alearybuy': 2,
    'name': '冰淇淋',
    'grade': 3.5,
    'shopPhone': '1234655',
    'maxNumber': 3,
    'realPrice': 20
}
let shopDetail = {
    categoryList: [
        '全部',
        '美食',
        '美图',
        '美图1'
    ],
    'imageUrlList': [
        {
            'catagory': '全部',
            'id': 2,
            'imageUrl': img1 + ',' + img2 + ',' + avatar + ',' + img1 + ',' + img2 + ',' + avatar + ',' + img1 + ',' + img2 + ',' + avatar
        },
        {
            'catagory': '美食',
            'id': 1,
            'imageUrl': img2 + ',' + avatar + ',' + img1 + ',' + img2 + ',' + avatar + ',' + img1 + ',' + img2 + ',' + avatar
        },
        {
            'catagory': '美图',
            'id': 1,
            'imageUrl': avatar + ',' + img1 + ',' + img2 + ',' + avatar + ',' + img1 + ',' + img2 + ',' + avatar
        }
    ],
    'shopId': 1,
    'evaluate': 2,
    'shopAddress': '佛山广东',
    'shopDetail': '打飞机啊开始了对方家里卡死机',
    'shopName': '陈太店',
    shopLink: 'http://baidu.com',
    shopPhone: 1123435,
    'shopFoodsList': [
        {
            'price': 55,
            'imageUrl': img2,
            'shopId': 1,
            'state': 1,
            'foodsName': '冰淇淋',
            'foodsId': 1,
            'grade': 5,
            'alearyBuy': 1,
            'realPrice': 20
        },
        {
            'price': 65,
            'imageUrl': avatar,
            'shopId': 1,
            'state': 2,
            'foodsName': '冰淇淋',
            'foodsId': 2,
            'grade': 5,
            'alearyBuy': 4,
            'realPrice': 33
        },
        {
            'price': 75,
            'imageUrl': avatar,
            'shopId': 1,
            'state': 3,
            'foodsName': '冰淇淋',
            'foodsId': 3,
            'grade': 4,
            'alearyBuy': 4,
            'realPrice': 63
        }
    ],
    'grade': 5,
    'avg': 20
}
let shopBenefit = [
    {
        imageUrl: avatar, // 商品图片
        goodsName: '深刻的今日发货', // 商品名称
        grade: 3, // 商品评分
        price: 30, // 商品价格
        realPrice: 22, // 实际价格
        alreadyBuy: 404, // 已售数量
        state: 1, // 1正在抢购  2抢光了 3已结束
        boughtNumber: 1, // 已买数量
        foodsId: 1,
    },
    {
        imageUrl: img1, // 商品图片
        goodsName: '是大法官今日发货', // 商品名称
        grade: 3, // 商品评分
        price: 30, // 商品价格
        realPrice: 22, // 实际价格
        alreadyBuy: 404, // 已售数量
        state: 2, // 1正在抢购  2抢光了 3已结束
        boughtNumber: 1, // 已买数量
        foodsId: 2,
    },
    {
        imageUrl: img2, // 商品图片
        goodsName: '深sdfrg发货', // 商品名称
        grade: 3, // 商品评分
        price: 30, // 商品价格
        realPrice: 22, // 实际价格
        alreadyBuy: 404, // 已售数量
        state: 3, // 1正在抢购  2抢光了 3已结束
        boughtNumber: 1, // 已买数量
        foodsId: 3,
    }
]
let foodsEvaluate = {
    'list': {
        'firstResult': 0,
        'list': [
            {
                'evaluateContent': 'sdfas',
                'userName': '他正在输入~',
                'evaluateDate': '2018-06-05',
                'grade': 5,
                'headImageUrl': img2,
                'evaluateId': 2
            },
            {
                'evaluateContent': '好吃',
                'userName': '来不来都在',
                'evaluateDate': '2018-06-01',
                'grade': 2,
                'headImageUrl': avatar,
                'evaluateId': 1
            }
        ],
        'offsetSize': 3,
        'pageCount': 2,
        'pageNo': 1,
        'pageSize': 10,
        'rowCount': 2
    },
    'avgGrade': 3.5,
    'evaluateNumber': 2
}
let articleList = {
    'firstResult': 0,
    'list': [
        {
            'state': 3,
            'id': 3,
            'author': '奇龙',
            'imageUrl': 'http://nfrb.ydcycloud.com/nfrb/upload/share/20180207/153918efd7d526.jpg,' + img2 + ',' + img1 + ',' + avatar,
            'link': 'http://baidu.com',
            'name': '这个不好吃'
        },
        {
            'state': 2,
            'id': 2,
            'author': '鸿富',
            'imageUrl': 'http://nfrb.ydcycloud.com/nfrb/upload/share/20180207/153918efd7d526.jpg,' + img2 + ',' + img1 + ',' + avatar,
            'link': '132123sdfas',
            'name': '这个也好吃'
        },
        {
            'state': 1,
            'id': 1,
            'author': '礼康',
            'imageUrl': 'http://nfrb.ydcycloud.com/nfrb/upload/share/20180207/153918efd7d526.jpg,' + img2 + ',' + img1 + ',' + avatar,
            'link': '123465',
            'name': '这个最好吃'
        }
    ],
    'offsetSize': 3,
    'pageCount': 2,
    'pageNo': 1,
    'pageSize': 10,
    'rowCount': 3
}
let collectionList = [
    {
        'id': 2,
        'price': 30,
        'imageUrl': img1,
        'state': '正在抢购 ',
        'foodsId': 2,
        'foodsName': '雪糕',
        'realPrice': 20
    },
    {
        'id': 1,
        'price': 55,
        'imageUrl': avatar,
        'state': '正在抢购 ',
        'foodsId': 1,
        'foodsName': '冰淇淋',
        'realPrice': 20
    }
]
let orderList = [
    {
        'endtime': '2018-06-05 15:49:40',
        'starttime': '2018-06-05 15:49:38',
        'foodsImageUrl': avatar,
        'shopName': 'fdafs',
        'shopId': 1,
        'link': 'http://baidu.com',
        'orderNumber': 'sdfasf',
        'state': 1,
        'foodsName': 'sdfsa',
        'foodsId': 2,
        'userPhone': 'dsfasdf',
        'orderId': 2
    },
    {
        'endtime': '2018-07-05 15:31:12',
        'starttime': '2018-06-01 15:31:09',
        'foodsImageUrl': img1,
        'shopName': 'dffa',
        'shopId': 1,
        'link': 'xvxz',
        'orderNumber': '218612452',
        'state': 2,
        'foodsName': '炒吃',
        'foodsId': 1,
        'userPhone': '165465415',
        'orderId': 1
    },
    {
        'endtime': '2018-06-05 15:49:40',
        'starttime': '2018-06-05 15:49:38',
        'foodsImageUrl': img2,
        'shopName': 'fdafs',
        'shopId': 1,
        'link': 'xvxz',
        'orderNumber': 'sdfasf',
        'state': 1,
        'foodsName': 'sdfsa',
        'foodsId': 2,
        'userPhone': 'dsfasdf',
        'orderId': 2
    },
    {
        'endtime': '2018-07-05 15:31:12',
        'starttime': '2018-06-01 15:31:09',
        'foodsImageUrl': img1,
        'shopName': 'dffa',
        'shopId': 1,
        'link': 'xvxz',
        'orderNumber': '218612452',
        'state': 3,
        'foodsName': '炒吃',
        'foodsId': 1,
        'userPhone': '165465415',
        'orderId': 1
    },
    {
        'endtime': '2018-06-05 15:49:40',
        'starttime': '2018-06-05 15:49:38',
        'foodsImageUrl': avatar,
        'shopName': 'fdafs',
        'shopId': 1,
        'link': 'xvxz',
        'orderNumber': 'sdfasf',
        'state': 4,
        'foodsName': 'sdfsa',
        'foodsId': 2,
        'userPhone': 'dsfasdf',
        'orderId': 2
    },
    {
        'endtime': '2018-07-05 15:31:12',
        'starttime': '2018-06-01 15:31:09',
        'foodsImageUrl': img2,
        'shopName': 'dffa',
        'shopId': 1,
        'link': 'xvxz',
        'orderNumber': '218612452',
        'state': 5,
        'foodsName': '炒吃',
        'foodsId': 5,
        'userPhone': '165465415',
        'orderId': 1
    }
]
let orderDetail = {
    'id': 1,
    'endtime': '2018-07-05 15:31:12',
    'starttime': '2018-06-01 15:31:09',
    'shopName': 'dffa',
    'foodsName': '炒吃',
    'state': 5, //1待付款 2待使用 3已食用 4待评价 5已过期
    'shopPhone': '12234154165',
    'foodsEvaluate': 'dsdd',
    'foodsGrade': 5,
    'shopGrade': 1,
    'shopEvaluate': 'sdfsadfasdfa',
    codeUrl: avatar,
}
for (let i = 1; i < 20; i++) {
    shopFood.push({
        'id': i,
        'price': Math.ceil(Math.random() * 100),
        'imageUrl': img2,
        'shopId': i,
        'shopName': '陈太店' + i,
        'state': Math.ceil(Math.random() * 3),
        'foodsName': '雪糕',
        'grade': Math.ceil(Math.random() * 5),
        'number': Math.ceil(Math.random() * 100),
        'alearyBuy': Math.ceil(Math.random() * 100),
        'realPrice': Math.ceil(Math.random() * 100)
    })
    RecordList.push({
        'foodsName': '小龙虾' + i,
        'number': Math.ceil(Math.random() * 100),
        'price': Math.ceil(Math.random() * 100),
        'nickName': '他正在输入' + i,
        'orderId': i,
        'changeTime': '2018-06-21 15:49:51',
    })
}
let monthSales = {
    'list': [
        {
            'foodsName': 'sdfsa',
            'foodsPrice': 20,
            'foodsNumber': 88
        },
        {
            'foodsName': '炒吃',
            'foodsPrice': 20,
            'foodsNumber': 1
        },
        {
            'foodsName': '炒吃1',
            'foodsPrice': 200,
            'foodsNumber': 2
        },
        {
            'foodsName': '炒吃2',
            'foodsPrice': 1000,
            'foodsNumber': 11
        }
    ],
    'saleMonthNumber': 102
}
let codeUrl = {
    'endtime': '2018-06-25',//卷的结束时间
    'foodsName': '炒吃',//商品名称
    'id': 1,
    'buyNumber': 1,//数量
    'shopName': 'dffa',//店铺名称
    imageUrl: img2
}

let mock = (data) => {
    console.log('mock:')
    console.log(data)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 200)
    })
}

let editUserInfo = ({userName, phone, addressCode}) => {
    return new Promise(resolve => {
        userInfo.username = userName
        userInfo.phone = phone
        userInfo.address = addressCode
        resolve()
    })
}
let getOrderList = ({state}) => {
    return new Promise(resolve => {
        let list = []
        if (state) {
            orderList.forEach(item => {
                if (item.state === state) {
                    list.push(item)
                }
            })
        } else {
            list = orderList
        }
        resolve(list)
    })
}
let getShopFoods = (payload) => {
    return new Promise(resolve => {
        let list = []
        shopFood.forEach(item => {
            if (item.state === payload.state || (payload.state === 1 && item.state === 2)) {
                list.push(item)
            }
        })
        let shopFoodData = {
            list: list,
            'offsetSize': 3,
            'pageCount': 2,
            'pageNo': 1,
            'pageSize': 140,
            'rowCount': 2
        }
        console.log(shopFoodData)
        setTimeout(() => {
            resolve(shopFoodData)
        }, 1000)
    })
}
let login = ({phone, password}) => {
    return new Promise(resolve => {
        if (phone == 111 && password == 111) {
            Cookies.set('login', true)
        }
        let name = '万科今日发货的根本'
        resolve(name)
    })
}
let getOrderRecordList = () => {
    let data = {}
    data.list = RecordList
    data.pageCount = 2
    data.pageNo = 1
    data.todayNumber = RecordList.length
    return new Promise(resolve => {
        console.log(data)
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}
let getArticleList = () => {
    return new Promise(resolve => {
        let list = articleList.list.concat(articleList.list)
        articleList.list = list
        console.log(articleList)
        setTimeout(() => {
            resolve(articleList)
        }, 1000)
    })
}
let getFoodsEvaluate = () => {
    return new Promise(resolve => {
        let list = foodsEvaluate.list.list.concat(foodsEvaluate.list.list, foodsEvaluate.list.list, foodsEvaluate.list.list, foodsEvaluate.list.list)
        foodsEvaluate.list.list = list
        console.log(foodsEvaluate)
        setTimeout(() => {
            resolve(foodsEvaluate)
        }, 1000)
    })
}
let getShopEvaluate = () => {
    return new Promise(resolve => {
        let list = foodsEvaluate.list.list.concat(foodsEvaluate.list.list, foodsEvaluate.list.list, foodsEvaluate.list.list, foodsEvaluate.list.list)
        foodsEvaluate.list.list = list
        console.log(foodsEvaluate)
        setTimeout(() => {
            resolve(foodsEvaluate)
        }, 1000)
    })
}
let getIndexData = () => mock(indexData)
let getUserInfo = () => mock(userInfo)
let getfoodDetail = () => mock(foodDetail)
let getShopDetail = () => mock(shopDetail)
let getShopBenefit = () => mock(shopBenefit)
let getCollectionList = () => mock(collectionList)
let getOrderDetail = () => mock(orderDetail)
let evaluateOrder = () => mock(orderDetail)
let deleteCollection = () => mock(orderDetail)
let setCollection = () => mock(orderDetail)
let payOrder = () => mock(orderDetail)
let getMonthSale = () => mock(monthSales)
let getCodeUrl = () => mock(codeUrl)

export {
    getIndexData,
    getUserInfo,
    getfoodDetail,
    getShopDetail,
    getShopBenefit,
    getFoodsEvaluate,
    getShopEvaluate,
    getArticleList,
    editUserInfo,
    getCollectionList,
    getOrderList,
    getOrderDetail,
    evaluateOrder,
    getShopFoods,
    deleteCollection,
    setCollection,
    payOrder,
    login,
    getOrderRecordList,
    getMonthSale,
    getCodeUrl,
}
