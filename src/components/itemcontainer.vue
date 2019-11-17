<!--Created by jiangjianming@bmkp.cn on 2018/4/25.-->
<!--这个是一个注释-->
<template>
    <section class="item-container-box">
      <header class="top-tips">
        <span class="num-tip" v-if="component == 'home'">{{level}}</span>
        <span class="num-tip" v-else>第{{itemNum}}题</span>
      </header>
      <div v-if="component== 'home'">
        <div class="home-logo item-container-style" :style="homeBgStyle"></div>
        <router-link to="item" class="start button-style"></router-link>
      </div>
      <div v-if="component == 'item'">
        <div class="item-back item-container-style" :style="itemBackBgStyle">
          <div class="item-list-container" v-if="itemDetail.length>0">
            <header class="item-title">{{itemDetail[itemNum - 1].topic_name}}</header>
            <ul class="question-ul-box">
              <li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer" :key="item.id"
                  @click="choosed(index, item.topic_answer_id)" class="item-list">
                    <span class="option-style" :class="{'has-choosed':chooseNum==index}">
                      {{chooseType(index)}}
                    </span>
                    <span class="option-detail">{{item.answer_name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <span class="next-item button-style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
        <span class="submit-item button-style" v-else @click="submitAnswer"></span>
      </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'itemcontainer',
  data () {
    return {
      itemId: null, // 题目ID
      chooseNum: null, // 选中的答案索引
      choosedId: null, // 选中答案id
      homeBgStyle: {
        backgroundImage: 'url(' + require('@/images/1-2.png') + ')'
      },
      itemBackBgStyle: {
        backgroundImage: 'url(' + require('@/images/2-1.png') + ')'
      }
    }
  },
  props: ['component'],
  computed: {
    ...mapState([
      'itemNum', // 第几题
      'level', // 第几周
      'itemDetail', // 题目详情
      'timer' // 计时器
    ])
  },
  methods: {
    ...mapActions([
      'addNum', 'initializeData'
    ]),
    // 点击下一题
    nextItem () {
      if (this.chooseNum != null) {
        this.chooseNum = null
        // 保存答案，题目索引 + 1,跳转下一题
        this.addNum(this.choosedId)
      } else {
        alert('您还没有选择答案哦')
      }
    },
    // 索引 0 - 3 对应答案 A - B
    chooseType: type => {
      switch (type) {
        case 0: return 'A'
        case 1: return 'B'
        case 2: return 'C'
        case 3: return 'D'
      }
    },
    // 选中的答案信息
    choosed (index, id) {
      this.chooseNum = index
      this.choosedId = id
    },
    // 到达最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer () {
      if (this.chooseNum != null) {
        this.addNum(this.choosedId)
        clearInterval(this.timer)
        this.$router.push('score')
      } else {
        alert('您还没有选择答案哦')
      }
    }
  },
  created () {
    // 初始化信息
    if (this.component === 'home') {
      this.initializeData()
      document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)'
    }
  }
}
</script>

<style lang="less" scoped>
  .item-container-box {
    height: 100%;
    position: relative;
    .top-tips {
      position: absolute;
      width: 0.68rem;
      height: 1.47rem;
      top: 0rem;
      right: 0.7rem;
      background: url(../images/WechatIMG2.png) no-repeat;
      background-size: 100% 100%;
      z-index: 10;
      .num-tip {
        position: absolute;
        left: 0;
        bottom: .12rem;
        right: 0;
        height: 0.25rem;
        font-size: 0.14rem;
        font-weight: 600;
        color: #a57c50;
        text-align: center;
      }
    }
    .item-container-style {
      height: 2.32rem;
      width: 2.63rem;
      background-repeat: no-repeat;
      position: absolute;
      top: 1.6rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .home-logo {
      background-size: 2.63rem 100%;
      background-position: right center;
    }
    .item-back {
      background-size: 100% 100%;
    }
    .button-style {
      display: block;
      height: .42rem;
      width: .87rem;
      background-size: 100% 100%;
      position: absolute;
      left: 50%;
      top:65%;
      transform: translateX(-50%);
      background-repeat: no-repeat;
    }
    .start {
      background-image: url(../images/1-4.png);
    }
    .next-item {
      background-image: url(../images/2-2.png);
    }
    .submit-item {
      background-image: url(../images/3-1.png);
    }
    .item-list-container {
      width: 100%;
      margin: 0rem auto;
      -webkit-font-smoothing: antialiased;
      .item-title {
        font-size: 0.2rem;
        color: #fff;
        line-height: 0.35rem;
      }
      .question-ul-box {
        margin-left: .2rem;
        .item-list {
          font-size: 0;
          margin: 0.1rem 0;
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            font-size: 0.16rem;
            color: #fff;
            vertical-align: middle;
          }
          .option-style {
            height: 0.25rem;
            width: 0.25rem;
            border: 0.01rem solid #fff;
            border-radius: 50%;
            line-height: 0.3rem;
            margin-right: 0.15rem;
            font-size: 0.14rem;
            font-family: 'Arial';
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .has-choosed {
            background-color: #ffd400;
            color: #575757;
            border-color: #ffd400;
          }
        }
      }
    }
  }
</style>
