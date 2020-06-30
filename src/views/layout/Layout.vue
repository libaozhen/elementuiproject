<template>
	<div id="layout">
		<el-row>
			<el-col :span="24"><div class="cell"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="12"><div class="cell"></div></el-col>
			<el-col :span="12"><div class="cell"></div></el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8"><div class="cell"></div></el-col>
			<el-col :span="8"><div class="cell"></div></el-col>
			<el-col :span="8"><div class="cell"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6" :offset="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="18" :offset="3"><div class="cell"></div></el-col>
		</el-row>
		
		<el-row type="flex">
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
		</el-row>
		
		<el-row type="flex" justify="center">
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
		</el-row>
		<el-row type="flex" justify="end">
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
		</el-row>
		<el-row type="flex" justify="space-around">
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
		</el-row>
		<el-row type="flex" justify="space-between">
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
			<el-col :span="6"><div class="cell"></div></el-col>
		</el-row>
		
		<el-row>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="cell">单独</div></el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="cell">单独</div></el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="cell">单独</div></el-col>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="cell">单独</div></el-col>
		</el-row>
		
		
		<el-row>
			<el-col :span="6" :push="6"><div class="cell">1</div></el-col>
			<el-col :span="6" :pull="6"><div class="cell">2</div></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name:"Index"
}
</script>

<style scoped>
	.el-row{
		margin-bottom:10px;
	}

 .cell{
	 background-color: red;
	 height: 30px;
	 border-radius: 10px;
 }
</style>
