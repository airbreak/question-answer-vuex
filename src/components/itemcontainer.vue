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
                  @click="choosed(item.id, item.topic_answer_id)" class="item-list">
                    <span class="option-style" :class="{'has_choosed':chooseNum==index}">
                      {{chooseType(index)}}
                    </span>
                    <span class="option-detail">{{item.answer_name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <span class="next-item button-style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
        <span class="sumit-item button-style" v-else @click="submitAnswer"></span>
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
    choosed (type, id) {
      this.chooseNum = type
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
    if (this.fatherComponent === 'home') {
      this.initializeData()
      document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
