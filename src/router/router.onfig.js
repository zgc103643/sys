import lang from '../lang'
const langText=lang.messages[lang.locale];
//console.log(langText.A.a1)
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
          meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,navChildShow:false},
          component: () => import('../views/Index.vue'),
          children:[
            {path:'add1', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index1.vue')},
            {path:'add2', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index2.vue')},
            {path:'add3', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index3.vue')},
            {path:'add4', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Index4.vue')},
          ],
          redirect: '/index/add1',
        },
        {
          path: '/about',
          name: 'About',
          meta:{requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,navChildShow:false},
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
          path: '/test',
          name: 'Test',
          meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,navChildShow:false},
          component: () => import('../views/Test.vue'),
          children:[
            {path:'add1', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test1.vue')},
            {path:'add2', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test2.vue')},
            {path:'add3', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test3.vue')},
            {path:'add4', meta: {requiresAuth:false,navShow:true,navText:langText.A.a1,navIcon:'',navSort:1,leftNav:true,},component: () => import('../views/Test4.vue')},
          ],
          redirect: '/test/add1',
        },
        {
          path: "/",
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