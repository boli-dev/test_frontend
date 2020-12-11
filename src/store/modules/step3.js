import Http from '../../http';

const state = {
  clearList: [],
  loading: false,
};

const getters = {
  GET_LOADING_STEP_3: (state) => {
    return state.loading;
  },

  GET_CLEAR_LIST_STEP_3: (state) => {
    return state.clearList;
  },
};

const mutations = {
  SET_LOADING_STEP_3: (state, loading) => {
    state.loading = loading;
  },

  SET_CLEAR_LIST_STEP_3: (state, clearList) => {
    state.clearList = clearList;
  },
};

const actions = {
  startStep3: ({ commit, dispatch }, payload) => {
    const { total, date1, date2, baseline } = payload;
    commit('SET_LOADING_STEP_3', true);

    setTimeout(async () => {
      const {
        data: { clearList },
      } = await Http.get(
        `/clearList?total=${total}&&baseline=${baseline}&&date1=${date1}&&date2=${date2}`
      );
      commit('SET_CLEAR_LIST_STEP_3', clearList);
      commit('SET_LOADING_STEP_3', false);
    }, 6000);

    dispatch('step4/startStep4', payload, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
