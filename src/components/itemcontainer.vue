<!--Created by jiangjianming@bmkp.cn on 2018/4/25.-->
<!--这个是一个注释-->
<template>
    <section>
      <header class="top-tips">
        <span class="num-tip" v-if="component == 'home'">{{level}}</span>
      </header>
      <div v-if="component== 'home'">
        <div class="home-logo item-container-style"></div>
        <router-link to="item" class="start button-style"></router-link>
      </div>
      <div v-if="component == 'item'">
        <div class="item-back item-container-style">
          <div class="item-list-container" v-if="itemDetail.length>0">
            <header class="item-title">{{itemDetail[itemNum - 1].topic_name}}</header>
            <ul>
              <li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
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
      choosedId: null // 选中答案id
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
  .top-tips{
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .num-tip{
      position: absolute;
      left: 0.48rem;
      bottom: 1.1rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.6rem;
      font-family: '黑体';
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }
  .item-container-style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .home-logo{
    background-image: url(../images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .item-back{
    background-image: url(../images/2-1.png);
    background-size: 100% 100%;
  }
  .button-style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }
  .start{
    background-image: url(../images/1-4.png);
  }
  .next-item{
    background-image: url(../images/2-2.png);
  }
  .submit-item{
    background-image: url(../images/3-1.png);
  }
  .item-list-container{
    position: absolute;
    height: 7.0rem;
    width: 8.0rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antialiased;
  }
  .item-title{
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
  }
  .item-list{
    font-size: 0;
    margin-top: 0.4rem;
    width: 10rem;
    span{
      display: inline-block;
      font-size: 0.6rem;
      color: #fff;
      vertical-align: middle;
    }
    .option-style{
      height: 0.725rem;
      width: 0.725rem;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 0.725rem;
      text-align: center;
      margin-right: 0.3rem;
      font-size: 0.5rem;
      font-family: 'Arial';
    }
    .has-choosed{
      background-color: #ffd400;
      color: #575757;
      border-color: #ffd400;
    }
    .option-detail{
      width: 7.5rem;
      padding-top: 0.11rem;
    }
  }
</style>
