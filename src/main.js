import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(faLocationDot, faPhone, faInstagram, faFacebook, faTwitter );

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.mount('#app')

    







