import Mock from 'mockjs'
import data from '../data.json'
Mock.mock("/api/user/loginByEmployee", {
  msg: "",
  code: 0,
  data: data.login
});
Mock.mock("/api/order/queryOrderListByEmployee", {
  msg: "",
  code: 0,
    data: data.queryOrderListByEmployee
});
Mock.mock("/api/order/isAbnormal", {
  msg: "",
  code: 0,
    data: data.isAbnormal
});
Mock.mock("/api/order/addOrder", {
  msg: "",
  code: 1,
  data: data.addOrder
});
Mock.mock("/api/user/getUserInfoByMemberCode", {
  msg: "",
  code: 0,
  data: data.getUserInfoByMemberCode
});