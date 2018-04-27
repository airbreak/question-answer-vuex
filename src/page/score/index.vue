<!--Created by jiangjianming@bmkp.cn on 2018/4/26.-->
<!--这个是一个注释-->
<template>
  <div class="wrapper-box">
    <header class="your-scores">
      <span class="score-num">{{score}}</span>
    </header>
    <div class="result-tip">{{scoreTips}}</div>
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
      rightAnswer: [2, 7, 12, 13, 18],
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
    padding-top: 1.2rem;
  }
  .your-scores-container{
    width: 9.7rem;
    height: 9.1rem;
    background: url(../../images/4-2.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0;
    position: relative;
    .your-scores{
      position: absolute;
      width: 100%;
      text-indent: 3.3rem;
      top: 4.7rem;
      font-size: 1.4rem;
      font-weight: 900;
      -webkit-text-stroke: 0.05rem #412318;
      font-family: 'Microsoft YaHei';
      .score-num{
        font-family: Tahoma,Helvetica,Arial;
        color: #a51d31;
      }
      .fenshu{
        color: #a51d31;
      }
    }
    .result-tip{
      position: absolute;
      top: 7rem;
      width: 9rem;
      left: 0.6rem;
      color: #3e2415;
      font-size: 0.65rem;
      text-align: center;
    }
  }
  .share-button{
    width: 6.025rem;
    height: 2.4rem;
    margin: 0.8rem auto 0;
    background: url(../../images/4-3.png) no-repeat 0.4rem 0;
    background-size: 5.825rem 100%;
  }
  .share-code{
    width: 5.3rem;
    margin: 1.5rem auto 0;
    .share-header{
      color: #664718;
      font-size: 0.475rem;
      font-family: 'Microsoft YaHei';
      width: 7rem;
      font-weight: 500;
    }
    .code-img{
      height: 5.3rem;
      width: 5.3rem;
      margin-top: 0.5rem;
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
    height: 10.975rem;
    width: 11.95rem;
    position: fixed;
    top: 0.5rem;
    left: 50%;
    margin-left: -5.975rem;
  }
</style>
