<template>
  	<div>
		<group>
		    <x-input title="QQ号码" v-model="qq"></x-input>
		</group>
		<div class="btn-padding">
			<x-button type="primary" @click.native="startTest">开始测试</x-button>
		</div>
		<group>
	      	<x-input placeholder="总结" v-model="conclusion"></x-input>
	      	<x-textarea name="description" v-model="analysis" placeholder="分析"></x-textarea>
	    </group>
    </div>
</template>

<script>
import { XInput, Group, XButton, XTextarea } from 'vux'
import { getQQApi } from '_ser/moduleB'

export default {
	data() {
		return {
			qq: '123456789',
			conclusion: '',
			analysis: '',
		}
	},
	methods: {
		startTest() {
			getQQApi({
				qq: this.qq,
				key: '', // 填写你自己的 AppKey
			}).then(response => {
				if (!response.error_code) {
					let data = response.result.data

					this.conclusion = data.conclusion
					this.analysis = data.analysis
				}	
			})
		}
	},
  	components: {
   	 	XInput,
   	 	XButton,
    	Group,
    	XTextarea
  	},
}
</script>

<style scoped>
.btn-padding {
	padding: 15px;
}
</style>