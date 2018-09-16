<template>
	<div class="box">
	    <divider>劳卜的掘金主页</divider>
	    <qrcode value="https://juejin.im/user/57b0319fc4c97100547f2a77" type="img"></qrcode>
	    <divider>前端呼啦圈</divider>
	   	<img src="~_img/qrcode.jpg" width="190px" alt="">	
  	</div>
</template>

<script>
import { Qrcode, Divider } from 'vux'

export default {
	components: {
  		Qrcode,
  		Divider,
	}
}
</script>

<style scoped>
.box {
	text-align: center;
	margin-top: 15px;
}
</style>