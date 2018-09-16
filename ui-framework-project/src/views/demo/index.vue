<template>
  	<div>
		<group title="Vue 项目构建与开发入门 demo">
		    <cell title="拼图游戏" is-link :link="{name: 'puzzle'}"></cell>
		    <cell title="数据操作" is-link :link="{name: 'count'}"></cell>
		</group>
    </div>
</template>

<script>
import { Cell, Group } from 'vux'

export default {
  	components: {
    	Cell,
    	Group,
  	}
}
</script>