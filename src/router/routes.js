import Home from '@/views/home'
import Cart from '@/views/cart'
import Category from '@/views/category'
import Mine from '@/views/mine'
import Login from '@/views/login'
import Confirm from '@/views/confirm'
import Detail from '@/views/detail'
import NavBar from '@/components/nav-bar'
import SearchBar from '@/components/search-bar'
import TabBar from '@/components/tab-bar'
const routes = [{
  path: '/',
  redirect: '/home',
  meta: {},
},
{
  path: '/home',
  components: {
    header: SearchBar,
    footer: TabBar,
    default: Home,
  },
  meta: {
    title: '首页',
    icon: '&#xe601;',
    isTabBar: true,
    footer: true,
  },
},
{
  path: '/category',
  components: {
    header: NavBar,
    default: Category,
  },
  meta: {
    title: '分类',
    icon: '&#xe610;',
    isTabBar: true,
    footer: false,
  },
},
{
  path: '/confirm',
  components: Confirm,
  meta: {},
},
{
  path: '/cart',
  components: {
    header: NavBar,
    footer: TabBar,
    default: Cart,
  },
  meta: {
    title: '购物车',
    icon: '&#xe603;',
    isTabBar: true,
    footer: true,
  },
},
{
  path: '/detail',
  component: Detail,
  meta: {
    title: '详情页',
  },
},
{
  path: '/mine',
  components: {
    header: NavBar,
    footer: TabBar,
    default: Mine,
  },
  meta: {
    title: '我的',
    icon: '&#xe604;',
    isTabBar: true,
    footer: true,
  },
},
{
  path: '/login',
  component: Login,
  meta: {},
},
]
export default routes
