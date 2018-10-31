<template>
  	<div class="about">
        <group>
            <x-input title="text值为" type="text" :placeholder="getText" :disabled="true">
                <x-button slot="right" type="primary" @click.native="setText" mini>修改text值</x-button>
            </x-input>
        </group>
        <group>
            <x-input title="groups值为" type="text" :placeholder="String(getGroups)" :disabled="true">
                <x-button slot="right" type="primary" @click.native="setGroup(getGroups.length + 1)" mini>修改groups值</x-button>
            </x-input>
        </group>
        <group>
            <x-input title="http数据" type="text" :placeholder="dataStatus" :disabled="true">
                <x-button slot="right" type="primary" @click.native="getHttpData" mini>获取github数据</x-button>
            </x-input>
        </group>
  	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { XInput, Group, XButton} from 'vux'
import { getTestData } from '@/services/moduleA'

export default {
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
  	},
    components: {
        XInput,
        XButton,
        Group,
    },
}
</script>

<style scoped>
button {
	border: 1px solid #ccc;
	border-radius: 5px;
}
</style>