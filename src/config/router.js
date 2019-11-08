import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home/Home'
import AdminPages from '../components/AdminPages/AdminPages'
import Auth from '../components/auth/Auth'
import UserQuadros from '../components/Quadros/UserQuadros'
import QuadroById from '../components/Quadros/QuadroById'
// import {userKey} from '@/global'

Vue.use(VueRouter)

const routes = [{
    name:'home',
    path:'/',
    component: Home
},{
    name:'adminPages',
    path:'/admin',
    component: AdminPages,
    // meta: { requiresAdmin: true }
},{
    name:'auth',
    path:'/auth',
    component: Auth
},{
    name:'quadros',
    path:'/quadros',
    component:UserQuadros
},{
    name:'quadroById',
    path:'/quadros/:id',
    component:QuadroById
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

// router.beforeEach((to,from,next) => {
//     const json = localStorage.getItem(userKey)

//     if(to.matched.some(record => record.meta.requiresAdmin)){
//         const user = JSON.parse(json)
//         user && user.admin ? next() : next({path: '/'})
//     }else{
//         next()
//     }
// })

export default router