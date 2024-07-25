import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faPlus, faTrash, faPen);
const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
