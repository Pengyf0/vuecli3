
const routes = [
  { //首页
    path: "/",
    redirect:"/index"
  },
  { //首页
    path: "/index",
    name: "indexMain",
    component: () => import( "@/views/index.vue"),
  },
  { //echarts
    path: "/echarts",
    name: "echarts",
    component: () => import( "@/views/echarts/echarts.vue")
  },
  { //轮播图
    path: "/circleImg",
    name: "circleImg",
    component: () => import( "@/views/circle/circleImg.vue")
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import( "@/views/edit/editor.vue")
  },
  {
    path: "/components",
    name: "components",
    component: () => import( "@/views/components/components.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import( "@/views/tests/test.vue"),
    children:[
      { path: 'test2', name:'test2',component:() => import( "@/views/tests/test2.vue")},
      { path: 'test3', name:'test3',component:() => import( "@/views/tests/test3.vue")},
    ]
  }
  
];

export default routes;