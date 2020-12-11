import Http from '../../http';

const state = {
  weekends: [],
  loading: false,
};

const getters = {
  GET_LOADING_STEP_2: (state) => {
    return state.loading;
  },

  GET_WEEKENDS_STEP_2: (state) => {
    return state.weekends;
  },
};

const mutations = {
  SET_LOADING_STEP_2: (state, loading) => {
    state.loading = loading;
  },

  SET_WEEKENDS_STEP_2: (state, weekends) => {
    state.weekends = weekends;
  },
};

const actions = {
  startStep2: ({ commit, dispatch }, payload) => {
    const { total, date1, date2, baseline } = payload;
    commit('SET_LOADING_STEP_2', true);

    setTimeout(async () => {
      const {
        data: { weekends },
      } = await Http.get(
        `/weekends?total=${total}&&baseline=${baseline}&&date1=${date1}&&date2=${date2}`
      );
      commit('SET_WEEKENDS_STEP_2', weekends);
      commit('SET_LOADING_STEP_2', false);
    }, 4000);

    dispatch('step3/startStep3', payload, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
