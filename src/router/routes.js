import Home from '@/views/home'
import Cart from '@/views/cart'
import Category from '@/views/category'
import Mine from '@/views/mine'
import Login from '@/views/login'
import Confirm from '@/views/confirm'
import Detail from '@/views/detail'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/confirm',
    component: Confirm,
  },
]
export default routes
