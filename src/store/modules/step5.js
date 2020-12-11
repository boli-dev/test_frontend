import Http from '../../http';

const state = {
  aboveOrBelow: '',
  loading: false,
};

const getters = {
  GET_LOADING_STEP_5: (state) => {
    return state.loading;
  },

  GET_ABOVE_OR_BELLOW_STEP_5: (state) => {
    return state.aboveOrBelow;
  },
};

const mutations = {
  SET_LOADING_STEP_5: (state, loading) => {
    state.loading = loading;
  },

  SET_ABOVE_OR_BELLOW_STEP_5: (state, aboveOrBelow) => {
    state.aboveOrBelow = aboveOrBelow;
  },
};

const actions = {
  startStep5: ({ commit, dispatch }, payload) => {
    const { total, date1, date2, baseline } = payload;
    commit('SET_LOADING_STEP_5', true);

    setTimeout(async () => {
      const {
        data: { checkAboveOrBelow1P },
      } = await Http.get(
        `/checkAboveOrBelow1P?total=${total}&&baseline=${baseline}&&date1=${date1}&&date2=${date2}`
      );
      commit('SET_ABOVE_OR_BELLOW_STEP_5', checkAboveOrBelow1P);
      commit('SET_LOADING_STEP_5', false);
    }, 11000);

    dispatch('step6/startStep6', null, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
