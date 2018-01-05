import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Clientes from './components/Clientes'
import ListaClientes from './components/ListaClientes'



Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Clientes},
    {path:'/lista', component: ListaClientes},  
  ]
})


/* eslint-disable no-new */
new Vue({
  router,
  template: `

<div id="app" >
  
  <nav class="navbar navbar-expand-md navbar-dark bg-dark ">    
    <router-link class="navbar-brand"to="/">Cadastro de Clientes</router-link>
    <router-link class="navbar-brand"to="/lista">Lista Clientes</router-link>
  </nav>
  <router-view></router-view>

</div>
`
}).$mount('#app')
