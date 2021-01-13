const routes = [
    {
      path: '/',
      name: 'Home',
      meta: { 'requiresAuth':false },
      component: () => import('../views/Home.vue'),
      children:[
        {
          path: '/index',
          name: 'Index',
          meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:1,leftNav:true},
          component: () => import('../views/Index.vue'),
          children:[
            {path:'/index/add1', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index1.vue')},
            {path:'/index/add2', meta: {requiresAuth:false,navShow:true,navText:'A.a2',navIcon:require("../assets/shezhi.svg"),navSort:0,leftNav:true,},component: () => import('../views/Index2.vue')},
            {path:'/index/add3', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index3.vue')},
            {path:'/index/add4', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index4.vue')},
          ],
          redirect: '/index/add2',//写排序最小的地址
        },
        {
          path: '/about',
          name: 'About',
          meta:{requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:3,leftNav:true},
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
          path: '/test',
          name: 'Test',
          meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:2,leftNav:true},
          component: () => import('../views/Test.vue'),
          children:[
            {path:'/test/add1', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:1,leftNav:true,},component: () => import('../views/Test1.vue')},
            {path:'/test/add2', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test2.vue')},
            {path:'/test/add3', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test3.vue')},
            {path:'/test/add4', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test4.vue')},
          ],
          redirect: '/test/add1',//写排序最小的地址
        },
        {
          path: '/user',
          name: 'User',
          meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:4,leftNav:true},
          component: () => import('../views/Test.vue'),
          children:[
            {path:'/user/add1', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:require("../assets/shezhi.svg"),navSort:1,leftNav:true,},component: () => import('../views/Test1.vue')},
            {path:'/user/add2', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test2.vue')},
            {path:'/user/add3', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test3.vue')},
            {path:'/user/add4', meta: {requiresAuth:false,navShow:true,navText:'A.a1',navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test4.vue')},
          ],
          redirect: '/user/add1',//写排序最小的地址
        },
        {
          path: "/",
          name:"redirect",
          redirect: "/index"
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: { 'requiresAuth': false },
      component: () => import('../views/Login.vue')
    },
    {
      path: "/404",
      name: "notFound",
      meta: { 'requiresAuth': false },
      component: () => import('../views/NotFound.vue')
    },
    {
      path: "*",
      redirect: "/404"
    }
  ];

  export default routes;