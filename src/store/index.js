/**
 * Created by jiangjianming@bmkp.cn on 2018/4/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  level: '第一周',
  itemNum: 1,
  allTime: 0,
  timer: '',
  itemDetail: [{
    'topic_id': 20,
    'active_topic_id': 4,
    'type': 'ONE',
    'topic_name': '题目一：世界上最长的河流是哪个？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 1,
      'topic_id': 20,
      'answer_name': '长江',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 2,
      'topic_id': 20,
      'answer_name': '尼罗河',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 3,
      'topic_id': 20,
      'answer_name': '亚马逊河',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 4,
      'topic_id': 20,
      'answer_name': '密西西比河',
      'is_standard_answer': 1
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目二：张学友的邻居家的狗叫什么名字？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 5,
      'topic_id': 21,
      'answer_name': '阿友',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 6,
      'topic_id': 21,
      'answer_name': '阿仔狗',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 7,
      'topic_id': 21,
      'answer_name': '不知道',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 8,
      'topic_id': 21,
      'answer_name': '王八蛋',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目三：武汉，是湖北省省会、中部六省唯一的副省级市和特大城市。自称武汉最厉害的赵姓全站工程师是谁？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 9,
      'topic_id': 21,
      'answer_name': '刘行长',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 10,
      'topic_id': 21,
      'answer_name': '张外卖',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 11,
      'topic_id': 21,
      'answer_name': '王老板',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 12,
      'topic_id': 21,
      'answer_name': '赵架构师',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目四：据说世界上最远的距离是我在你身边，你却在刷朋友圈。那么 1 + 1 等于多少？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 13,
      'topic_id': 21,
      'answer_name': '1',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 14,
      'topic_id': 21,
      'answer_name': '2',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 15,
      'topic_id': 21,
      'answer_name': '3',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 16,
      'topic_id': 21,
      'answer_name': '4',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目五：如果不是你，我不会相信这个世界上还有这么有意思的事情。所以太阳从哪边升起的？',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 17,
      'topic_id': 21,
      'answer_name': '南边',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 18,
      'topic_id': 21,
      'answer_name': '东部',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 19,
      'topic_id': 21,
      'answer_name': '西边',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 20,
      'topic_id': 21,
      'answer_name': '北边',
      'is_standard_answer': 0
    }]
  }],
  answerid: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
