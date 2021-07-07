import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCAHPdAn_q9gT8XQP85l_sZloTXGbLgTFc",
  authDomain: "warrenali-cda1d.firebaseapp.com",
  projectId: "warrenali-cda1d",
  storageBucket: "warrenali-cda1d.appspot.com",
  messagingSenderId: "749465139395",
  appId: "1:749465139395:web:3a5fe32fe8656473494a76",
  measurementId: "G-49D5BW2WXH"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
