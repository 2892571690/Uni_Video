/*
	1.solt
	2.对外提供数据 滑动方向
*/
<template>
	<view @touchstart="handleTouchstart" @touchend="handleTouchend">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startTime:0,
				startX:0,
				startY:0
			};
		},
		methods:{
			// 按下的事件
			handleTouchstart(event){
				this.startTime = Date.now()
				this.startX = event.changedTouches[0].clientX
				this.startY = event.changedTouches[0].clientY
			},
			// 离开的事件
			handleTouchend(event){
				const endTime = Date.now();
				const endX = event.changedTouches[0].clientX
				const endY = event.changedTouches[0].clientY
				
				if(endTime - this.startTime < 20){
					return
				}
				
				let direction = ''
				if(Math.abs(endX - this.startX) > 10 && Math.abs(endY - this.startY) < 10){
					direction = endX - this.startX > 0 ? 'right' : 'left'
				}else{
					return
				}
				// console.log(direction)
				this.$emit('swiperAction',{direction})
			}
		}
	}
</script>

<style>

</style>
