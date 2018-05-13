<!--Created by jiangjianming@bmkp.cn on 2018/4/26.-->
<!--这个是一个注释-->
<template>
  <div class="wrapper-box">
    <header class="your-scores">
      <span class="score-num">{{score}}</span>
      <div class="result-tip">{{scoreTips}}</div>
    </header>
    <div class="share-button" @click="showCover"></div>
    <div class="share-code">
      <header class="share-header">关注我们，获取答案</header>
      <img src="../../images/4-4.png" height="212" width="212" class="code-img"/>
    </div>
    <div class="share-cover" v-show="showHide" @click="showCover">
      <img src="../../images/5-2.png" class="share-img"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      score: 0,
      scoreTips: '',
      showHide: false,
      rightAnswer: [2, 7, 12, 14, 18],
      scoreTipsArr: ['不行啊', '还可以', '智商挺厉害的哦', '离爆表还有一点点', '我们需要你，加入我们']
    }
  },
  computed: mapState(['answerid']),
  methods: {
    // 计算分数
    computedScore () {
      this.answerid.forEach((item, index) => {
        if (item === this.rightAnswer[index]) {
          this.score += 20
        }
      })
    },
    showCover () {
      this.showHide = !this.showHide
    },
    // 根据分数提示
    getScoreTip () {
      if (this.score <= 20) {
        return this.scoreTipsArr[0]
      }
      if (this.score <= 40) {
        return this.scoreTipsArr[1]
      }
      if (this.score <= 60) {
        return this.scoreTipsArr[2]
      }
      if (this.score <= 80) {
        return this.scoreTipsArr[3]
      }
      if (this.score <= 100) {
        return this.scoreTipsArr[4]
      }
    }
  },
  created () {
    this.computedScore()
    this.scoreTips = this.getScoreTip()
    document.body.style.backgroundImage = 'url(./static/img/4-1.jpg)'
  }
}
</script>

<style lang="less">
  body{
    background-image: url(../../images/4-1.jpg);
    padding-top: .2rem;
  }
  .wrapper-box{
    height: 100%;
  }
  .your-scores{
    width: 1.94rem;
    height: 1.94rem;
    background: url(../../images/4-2.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0;
    position: relative;
    .score-num{
      font-family: Tahoma,Helvetica,Arial;
      color: #a51d31;
      position: absolute;
      top: 13%;
      right:20%;
      transform: translateX(50%);
    }
    .result-tip{
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      color: #3e2415;
      font-size: 0.14rem;
      text-align: center;
    }
  }
  .share-button{
    width: 2.33rem / 2;
    height: .96rem / 2;
    margin: .4rem auto;
    background-image: url(../../images/4-3.png);
    background-repeat: no-repeat;
    background-size: 2.33rem/2 .96rem/2
  }
  .share-code{
    margin: .9rem auto 0 auto;
    text-align: center;
    .share-header{
      color: #664718;
      font-size: 0.16rem;
      font-family: 'Microsoft YaHei';
      font-weight: 500;
      text-align: center;
    }
    .code-img{
      height: 2rem;
      width: 2rem;
      margin-top: 0.25rem;
    }
  }
  .share-cover{
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    background: url(../../images/5-1.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.92;
  }
  .share-img{
    height: 3.39rem / 2;
    width: 4.78rem / 2;
    position: fixed;
    right: .5rem;
    top: .1rem;
  }
</style>
