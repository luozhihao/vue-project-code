<template>
  	<div id="app">
  		<view-box>
	    	<router-view/>
			<tabbar>
		      	<tabbar-item :link="{name: 'demo'}" :selected="true">
		      		<span slot="icon" class="iconfont icon-bulb"></span>
		        	<span slot="label">Demo</span>
		      	</tabbar-item>
		      	<tabbar-item :link="{name: 'laboratory'}">
		      		<span slot="icon" class="iconfont icon-experiment"></span>
		        	<span slot="label">实验室</span>
		      	</tabbar-item>
		      	<tabbar-item :link="{name: 'about'}">
		      		<span slot="icon" class="iconfont icon-deploymentunit"></span>
		        	<span slot="label">关于</span>
		      	</tabbar-item>
	    	</tabbar>	
	    </view-box>
  	</div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox } from 'vux'

export default {
  	components: {
    	Tabbar,
    	TabbarItem,
    	ViewBox
  	}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body, #app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
