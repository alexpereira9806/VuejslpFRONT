import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import bootstrap from 'bootstrap';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios({url: '', data: {"email":"test@hotmail.fr", "password":"testpass"}, method: 'POST' }) //username et password proviennent du formulaire
    .then(resp => {
      const token = resp.data.token
      const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
      localStorage.setItem('user', userData) // store the user in localstorage
      localStorage.setItem('usertoken', token) // store the token in localstorage
      router.push('/')
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => {
      localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
    })