<template>
  <div id="app">
		<main-tab-bar></main-tab-bar>
		<router-view></router-view>
	</div>
</template>

<script>
	import MainTabBar from './components/content/MainTabBar.vue'
	
	export default {
		name: "APP",
		components: {
			MainTabBar
		}
	}
</script>


<style>
	@import 'assets/css/base.css'
</style>
