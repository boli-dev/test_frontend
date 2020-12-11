import Http from '../../http';

const state = {
  dates: [],
  loading: false,
};

const getters = {
  GET_LOADING_STEP_1: (state) => {
    return state.loading;
  },

  GET_DATES_STEP_1: (state) => {
    return state.dates;
  },
};

const mutations = {
  SET_LOADING_STEP_1: (state, loading) => {
    state.loading = loading;
  },

  SET_DATES_STEP_1: (state, dates) => {
    state.dates = dates;
  },
};

const actions = {
  startStep1: ({ commit, dispatch }, payload) => {
    const { total, date1, date2, baseline } = payload;
    commit('SET_LOADING_STEP_1', true);

    setTimeout(async () => {
      const {
        data: { dates },
      } = await Http.get(
        `/dates?total=${total}&&baseline=${baseline}&&date1=${date1}&&date2=${date2}`
      );
      commit('SET_DATES_STEP_1', dates);
      commit('SET_LOADING_STEP_1', false);
    }, 2000);

    dispatch('step2/startStep2', payload, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
