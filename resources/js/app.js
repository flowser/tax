require('./bootstrap');
window.Vue = require('vue');

// support vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//support vuerouter

//support moemnt js
import { filter} from './filter';

// support element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//storesupport
import storeData from "./store/index";
const store = new Vuex.Store(
    storeData
);

//support vform
import {Form, HasError,AlertError} from 'vform';
//make global
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
window.Form = Form;

// support phone verification
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
Vue.component('VuePhoneNumberInput', VuePhoneNumberInput);

//suport router
import router from './router';
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.

        // if (!store.getters.loggedIn) {
        //     let reroute = window.location.replace('/');
        //     next({
        //         reroute
        //     });
        // } else{

        //     next();
        // }
    }
    // else if (to.matched.some(record => record.meta.requiresAuth)) {
    //     // if you are logged in buton browser seem snot but if try to log
    //     // in you will be directed to dashoabrd
    //     // if logged in, redirect to specified page after loged in.
    //     if (store.getters.loggedIn) {
    //       next({
    //         name: 'About',
    //       })
    //     } else {
    //       next()
    //     }
    //   }
    else {
        next(); // make sure to always call next()!
    }
});



Vue.component('backend-master', require('./components/BackendComponent.vue').default);
Vue.component('frontend-master', require('./components/FrontendComponent.vue').default);

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
});
