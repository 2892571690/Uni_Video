<template>
	<view class="home_category">
		<navigator :url="`/pages/imgCategory/imgCategory?id=${item.id}`" class="cate_item" v-for="item in cateGoryList" :key="item.id">
			<image mode="aspectFill" :src="item.cover"></image>
			<view class="cate_name">{{item.name}}</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateGoryList:[]
			}
		},
		created(){
			this.getCateGoryList()
		},
		methods: {
			async getCateGoryList(){
				let res = await this.request({
					url:'/image/v1/vertical/category'
				})
				// console.log(res)
				this.cateGoryList = res.res.category
			}
		}
	}
</script>

<style lang="scss">
.home_category{
	display: flex;
	flex-wrap: wrap;
	.cate_item{
		width: 33.33%;
		position: relative;
		border: 5rpx solid #fff;
		box-sizing: border-box;
		image{
			height: 240rpx;
		}
		.cate_name{
			position: absolute;
			width: 100%;
			height: 50rpx;
			left: 0;
			bottom: 0;
			color: #FFFFFF;
			background-image: linear-gradient(to right top,rgba(0,0,0,.2),rgba(0,0,0,0));
			font-size: 40rpx;
			display: flex;
			align-items: center;
			padding:0 0 10rpx 20rpx;
		}
	}
}
</style>
