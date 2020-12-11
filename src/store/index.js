import Vue from 'vue';
import Vuex from 'vuex';
import step1 from './modules/step1';
import step2 from './modules/step2';
import step3 from './modules/step3';
import step4 from './modules/step4';
import step5 from './modules/step5';
import step6 from './modules/step6';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
  },
});
