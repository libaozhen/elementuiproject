<template>
	<div id="index">
		<div class="header">
			<router-view name="header"></router-view>
		</div>
		<div class="left">
			<router-view name="left"></router-view>
		</div>
		<div class="main">
			<router-view name="right"></router-view>
		</div>
		dddd
	</div>
</template>

<script>
export default {
	name:"Index",
	
}
</script>

<style scoped>

</style>
