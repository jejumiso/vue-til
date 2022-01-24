import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import * as filters from './utils/filters.js';

import MaterialKit from './plugins/material-kit';

Vue.config.productionTip = false;

Vue.use(MaterialKit);

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

const NavbarStore = {
	showNavbar: false,
};

Vue.mixin({
	data() {
		return {
			NavbarStore,
		};
	},
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
