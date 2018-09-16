<template>
  	<div>
		<group>
		    <x-input title="二维码内容" v-model="content" placeholder="Hello World"></x-input>
		</group>
		<div class="btn-padding">
			<x-button type="primary" @click.native="getQrcode">生成二维码</x-button>
		</div>
		<div class="grid-center">
			<img :src="'data:image/png;base64,' + imgUrl" alt="">
		</div>
    </div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
import { getQrcodeApi } from '_ser/moduleB'

export default {
	data() {
		return {
			content: 'Hello World',
			imgUrl: '',
		}
	},
	methods: {
		getQrcode() {
			getQrcodeApi({
				text: this.content,
				key: '', // 填写你自己的 AppKey
			}).then(response => {
				if (!response.error_code) {
					this.imgUrl = response.result.base64_image;
				}
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
.btn-padding {
	padding: 15px;
}

.grid-center {
	text-align: center;
}
</style>