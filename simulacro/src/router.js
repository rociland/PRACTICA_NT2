import Vue from 'vue'
import VueRouter from 'vue-router'

import Ingreso from './components/Ingreso.vue' //importo la ruta del componente

Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes:[
        {path: '/ingreso', component: Ingreso}
        
    ]
})