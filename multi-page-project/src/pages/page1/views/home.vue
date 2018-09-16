<template>
  	<div class="about">
  		<div>
  			text值为：{{getText}}
  			<button type="button" @click="setText">修改text值</button>
  		</div>

  		<div>
  			groups值为：{{getGroups}}
  			<button type="button" @click="setGroup(getGroups.length + 1)">修改groups值</button>
  		</div>
  		<div>
  			http数据：{{dataStatus}}
  			<button type="button" @click="getHttpData">获取github数据</button>
  		</div>
  	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getTestData } from '@/services/moduleA'

export default {
  	name: 'about',
  	data() {
  		return {
  			dataStatus: '未获取'
  		}
  	},
  	computed: {

  	  	// 使用对象展开运算符将 getter 混入 computed 对象中
  	    ...mapGetters([
  	      	'getText',
  	      	'getGroups',
  	    ])
  	},
  	methods: {
  		...mapActions([
  		    'setText', // 将 `this.setText()` 映射为 `this.$store.dispatch('setText')`
  		    'setGroup',
  		]),

  		// 获取 github 数据
  		getHttpData() {
  			getTestData()
  			.then(response => {
  				console.log(response)
  				
  				this.dataStatus = '获取成功'
  			}) 
  		}
  	}
}
</script>

<style scoped>
button {
	border: 1px solid #ccc;
	border-radius: 5px;
}
</style>