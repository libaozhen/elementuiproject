<template>
	<div class="login_container">
		<!-- 头像区域 -->
		<div class="login_box">
			<div class="avatar_box">
				<img src="~assets/images/login/login.png" alt="">
			</div>
			<!-- 登录表单 -->
			<el-form ref="loginForm" :model="loginForm" :rules="rules"  class="login_from">
				<el-form-item  prop="login_name">
					<el-input v-model="loginForm.login_name" placeholder="用户名" prefix-icon="iconfont icon-user" clearable></el-input>
				</el-form-item>
				<el-form-item  prop="pwd">
					<el-input v-model="loginForm.pwd" placeholder="密码" prefix-icon="iconfont icon-lock" show-password clearable></el-input>
				</el-form-item>
				<el-form-item prop="verify_code">
					<el-col :span="12">
						<el-input placeholder="验证码" maxlength="4" v-model="loginForm.verify_code" prefix-icon="iconfont icon-verify"></el-input>
					</el-col>
					<el-col :span="12">
						<!-- 验证码容器 -->
						<div  id="v_container"></div>
					</el-col>
				</el-form-item>
				<el-form-item class="btnbox">
					<el-button type="primary" @click.enter="login" @keyup.enter="login" style="width: 150px;">登录</el-button>
					<el-button type="default" @click="resetForm" style="width: 150px;">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import request from 'network/request.js';
	import {GVerify} from 'common/GVerify.js';
	
	export default {
		name:"Login",
		data(){
			var validateVerifyCode = (rule,value,callback)=>{
				if(value===""){
					callback(new Error("请输入验证码"));
				}else{
					// 获取用户输入的验证码
					let verify_code = this.loginForm.verify_code;
					// 验证用户输入的验证码是否正确
					let verifyFlag = this.verifyCode.validate(verify_code);
					if(!verifyFlag){
						callback(new Error("验证码错误"));
					}else{
						callback();
					}
				}
			};
			return {
				// 验证码图片路径
				verifyImgSrc:"http://localhost/SDJZC/API/Vue/verifyCode.html",
				verifyCode: null,
				loginForm:{
					login_name:"admin",
					pwd:"admin",
					verify_code:""
				},
				rules:{
					login_name:[
						{required:true,message:"请输入用户名",trigger:'blur'}
					],
					pwd:[
						{required:true,message:"请输入密码",trigger:'blur'}
					],
					verify_code:[
						{validator:validateVerifyCode,trigger:'blur'}
					]
				}
			}
		},
		mounted () {
			this.verifyCode = new GVerify({
				id:'v_container',
				width:'160',
				height:'40'
			});
			
			// 绑定enter事件
		  this.enterKeyup();
		},
		destroyed() {
			// 销毁enter事件
			this.enterKeyupDestroyed();
		},
		methods:{
			// 登录方法
			login(){
				this.$refs.loginForm.validate(async (valid,obj)=>{
					if(valid){
						const res = await request({
							url:"dologin",
							method:"post",
							data:{
								login_name:this.loginForm.login_name,
								pwd:this.loginForm.pwd
							}
						});
						if(!res.success){
							 this.$message({
								 message:res.message,
								 type:"error"
							 });
						}else{
							this.$message({
								message:res.message,
								type:"success"
							});
							sessionStorage.setItem('token',res.token);
							sessionStorage.setItem('userInfo',res.userInfo);
							// 跳转到首页
							this.$router.push({
								path:"/index"
							});
						}
					}
				})
			},
			// 重置表单
			resetForm(){
				this.$refs.loginForm.resetFields();
			},
			enterKeyupDestroyed() {
				document.removeEventListener("keyup", this.enterKey);
			},
			enterKeyup() {
				document.addEventListener("keyup", this.enterKey);
			},
			enterKey(event) {
				const componentName = this.$options.name;
				if (componentName == "Login") {
					const code = event.keyCode? event.keyCode: event.which? event.which: event.charCode;
					if (code == 13) {
						this.login();
					}
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.el-form-item{
		margin-bottom: 30px;
	}
	.login_container{
		width: 100%;
		height: 100%;
		background-color: #2b4b6b;
	}
	.login_box{
		width:450px;
		height:380px;
		border-radius: 5px;
		background-color: #fff;
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	
	.avatar_box{
		width:130px;
		height: 130px;
		position: absolute;
		left:50%;
		transform: translate(-50%,-50%);
		border: 1px solid #eee;
		border-radius: 50%;
		padding:10px;
		background-color: #eee;
		box-shadow: 0 0 10px #000;
		img{
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
	
	.login_from{
		position: absolute;
		top:100px;
		left:30px;
		right:30px;
		
		canvas{
			width:140px;
			height: 40px;
			vertical-align: middle;
			margin: 0;
		}
	}
	.btnbox{
		display: flex;
		justify-content: center;
	}
</style>
