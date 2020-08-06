import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from "../components/User";

const Home = ()=>import('../components/Home')
const HomeNews = ()=>import('../components/HomeNews')
const HomeMessage = ()=>import('../components/HomeMessage')

const About = ()=>import('../components/About')
const User = ()=>import('../components/User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '',
          redirect:'news'
        },
        {
          path:'news',
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId2',
      component: User
    }
  ],
  // 去掉hash值
  mode: 'history',
  linkActiveClass: 'active'
})
