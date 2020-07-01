import Vue from 'vue';
// 1-导入vue-router
import VueRouter from 'vue-router';
// 2-安装插件
Vue.use(VueRouter);

// 登录页
const Login = ()=>import("views/login/Login.vue");
// 首页
const Index = ()=>import('views/index/Index.vue');
const Header = ()=>import('views/header/Header.vue');
const LeftMenu = ()=>import('views/leftmenu/LeftMenu.vue');
const RightContent = ()=>import('views/rightcontent/RightContent.vue');


const routes = [
	{
		path:"/",
		redirect:"/login"
	},
	{
		name:"login",
		path:"/login",
		component:Login
	},
	{
		name:"index",
		path:"/index",
		components:{
			default:Index,
			header:Header,
			left:LeftMenu,
			right:RightContent
		}
	}
];
// 3-实例化插件
const router = new VueRouter({
	routes,
	mode:'history'
});
//全局导航守卫
router.beforeEach((to,from,next)=>{
	// 如果访问的是登录页则直接访问
	if(to.path==='/login'){
		return next();
	}
	// 获取token，如果不含有token则跳转到登录页面
	let token = sessionStorage.getItem("token");
	if(!token){
		return next('/login');
	}
	
	next();
	
});
// 4-导出
export default router;