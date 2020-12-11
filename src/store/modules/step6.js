import Http from '../../http';
import router from '../../router';

const state = {
  result: [],
  loading: false,
};

const getters = {
  GET_LOADING_STEP_6: (state) => {
    return state.loading;
  },

  GET_RESULT_STEP_6: (state) => {
    return state.result;
  },
};

const mutations = {
  SET_LOADING_STEP_6: (state, loading) => {
    state.loading = loading;
  },

  SET_RESULT_STEP_6: (state, result) => {
    state.result = result;
  },
};

const actions = {
  startStep6: ({ commit }) => {
    const { total, date1, date2, baseline } = router.currentRoute.query;
    commit('SET_LOADING_STEP_6', true);

    setTimeout(async () => {
      const {
        data: { result },
      } = await Http.get(
        `/result?total=${total}&&baseline=${baseline}&&date1=${date1}&&date2=${date2}`
      );
      commit('SET_RESULT_STEP_6', result);
      commit('SET_LOADING_STEP_6', false);

      setTimeout(() => {
        router.push({
          path: '/result',
          query: {
            total: total,
            date1: date1,
            date2: date2,
            baseline: baseline,
          },
        });
      }, 2000);
    }, 14000);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
