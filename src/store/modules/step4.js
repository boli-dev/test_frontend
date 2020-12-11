import Http from '../../http';

const state = {
  valuesAssigned: [],
  loading: false,
};

const getters = {
  GET_LOADING_STEP_4: (state) => {
    return state.loading;
  },

  GET_VALUES_ASIGNED_STEP_4: (state) => {
    return state.valuesAssigned;
  },
};

const mutations = {
  SET_LOADING_STEP_4: (state, loading) => {
    state.loading = loading;
  },

  SET_VALUES_ASIGNED_STEP_4: (state, valuesAssigned) => {
    state.valuesAssigned = valuesAssigned;
  },
};

const actions = {
  startStep4: ({ commit, dispatch }, payload) => {
    const { total, date1, date2, baseline } = payload;
    commit('SET_LOADING_STEP_4', true);

    setTimeout(async () => {
      const {
        data: { valuesAssigned },
      } = await Http.get(
        `/valuesAssigned?total=${total}&&baseline=${baseline}&&date1=${date1}&&date2=${date2}`
      );
      commit('SET_VALUES_ASIGNED_STEP_4', valuesAssigned);
      commit('SET_LOADING_STEP_4', false);
    }, 8000);

    dispatch('step5/startStep5', payload, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
