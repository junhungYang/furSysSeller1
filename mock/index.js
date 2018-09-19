import Mock from 'mockjs'
import data from '../data.json'
Mock.mock("/api/user/getUserInfoByMemberCode", {
  msg: "",
  code: 0,
  data: data.queryOrderListByEmployee.data
});