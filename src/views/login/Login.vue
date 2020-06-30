<template>
	<div id="login">
		<el-button type="primary" @click="login">登录</el-button>
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

<style scoped>
	
</style>
