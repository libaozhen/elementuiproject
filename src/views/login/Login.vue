<template>
	<div class="login_container">
		<div class="login_box">
			<div class="avatar_box">
				<img src="~assets/images/login/login.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Login",
		methods:{
			login(){
				this.$router.push({
					path:"/index"
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.login_container{
		width: 100%;
		height: 100%;
		background-color: #2b4b6b;
	}
	.login_box{
		width:450px;
		height:300px;
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
</style>
