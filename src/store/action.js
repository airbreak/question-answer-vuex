/**
 * Created by jiangjianming@bmkp.cn on 2018/4/25.
 */
export default {
  addNum ({ commit, state }, id) {
    commit('REMEMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  },
  // 初始化信息
  initializeData ({ commit }) {
    commit('INITIALIZE_DATA')
  }
}
