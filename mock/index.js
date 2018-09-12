import Mock from 'mockjs'
import data from '../data.json'
Mock.mock("/user/loginByEmployee", {
  msg: "",
  code: 0,
  data: data.login
});
Mock.mock("/order/queryOrderListByEmployee", {
  msg: "",
  code: 0,
    data: data.queryOrderListByEmployee
});
Mock.mock("/order/isAbnormal", {
  msg: "",
  code: 0,
    data: data.isAbnormal
});
Mock.mock("/order/addOrder", {
  msg: "",
  code: 0,
  data: data.addOrder
});