
const routes = [
  { //首页
    path: "/",
    redirect:"/index",
  },
  { //首页
    path: "/index",
    name: "indexMain",
    component: () => import( "@/views/index"),
    children:[
      { path: '/index',tabActived:true, name:'index',title: '首页',component:() => import( "@/views/index/index")},
      { //echarts
        path: "/echarts",
        name: "echarts",
        title: 'echarts',
        tabActived:false,//是否默认选中样式。
        component: () => import( "@/views/echarts/echarts.vue")
      },
      { //轮播图
        path: "/circleImg",
        name: "circleImg",
        title: '轮播图',
        tabActived:false,
        component: () => import( "@/views/circle/circleImg.vue")
      },
      { //编辑器
        path: "/editor",
        name: "editor",
        title: '编辑器',
        tabActived:false,
        component: () => import( "@/views/edit/editor.vue")
      },
      { //组件
        path: "/components",
        name: "components",
        title: '组件',
        tabActived:false,
        component: () => import( "@/views/components/components.vue")
      },
      { //测试页面
        path: "/test",
        name: "test",
        title: '测试页面',
        tabActived:false,
        component: () => import( "@/views/tests/test.vue"),
        // children:[
        //   { path: 'test2', name:'test2',component:() => import( "@/views/tests/test2.vue")},
        //   { path: 'test3', name:'test3',component:() => import( "@/views/tests/test3.vue")},
        // ]
      },
      { //个人中心
        path: "/myZone",
        name: "myZone",
        title: '个人中心',
        tabActived:false,
        component: () => import( "@/views/myZone/myZone.vue"),
        meta: { 
          requiresAuth: true ,
          active: '/MyWallet'
        }
      },
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import ("@/views/login/login")
  }
  
  
];

export default routes;