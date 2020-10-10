import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home  = () => import ('../views/home/Home')
const Category  = () => import ('../views/category/Category')
const Shopcar  = () => import ('../views/shopcar/Shopcar')
const Me  = () => import ('../views/me/Me')

const routes = [
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component: Home
      },
      {
          path:'/category',
          component: Category
      },
      {
          path:'/shopcar',
          component: Shopcar
        },
        {
          path:'/me',
          component: Me
        }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router