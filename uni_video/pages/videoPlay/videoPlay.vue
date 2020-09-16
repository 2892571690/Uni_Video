<template>
	<view class="video_play">
		<image :src="videoObj.img"></image>
		<!-- 工具栏开始 -->
		<view class="video_tool">
			<view @click="handleMuted" :class="['iconfont',muted?'icon-jinyin':'icon-shengyinyinliangxianxing']"></view>
			<view class="iconfont icon-zhuanfa">
				<button open-type="share"></button>
			</view>
		</view>
		<!-- 工具栏结束 -->
		
		<!-- 视频开始 -->
		<view class="video_wrap">
			<video :muted="muted" :src="videoObj.video" objectFit="fill"></video>
		</view>
		<!-- 视频结束 -->
		
		<!-- 下载 开始 -->
		<view class="download">
			<view class="download_but" @click="handleDownload">下载高清</view>
		</view>
		<!-- 下载 结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoObj:{},
				// 是否禁音
				muted:false
			}
		},
		onLoad() {
			// console.log(getApp().globalData.video)
			this.videoObj = getApp().globalData.video
		},
		methods: {
			handleMuted(){
				this.muted = !this.muted
			},
			async handleDownload(){
				
				await uni.showLoading({
					title:'下载中...'
				})
				let { tempFilePath } = (await uni.downloadFile({url:this.videoObj.video}))[1]
				uni.hideLoading()
				await uni.showToast({
					title:'下载成功'
				})
			}
		}
	}
</script>

<style lang="scss">
.video_play{
	position: relative;
	image{
		position: absolute;
		height: 100vh;
		width: 100vw;
		z-index: -1;
		filter: blur(20px);
	}
	.video_tool{
		height: 80rpx;
		display: flex;
		justify-content: flex-end;
		.iconfont{
			width: 80rpx;
			color: #fff;
			font-size: 50rpx;
			border-radius: 50%;
			background-color: rgba(0,0,0,.2);
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 20rpx;
		}
		.icon-zhuanfa{
			position: relative;
			button{
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
	}
	.video_wrap{
		display: flex;
		justify-content: center;
		video{
			width: 360rpx;
			height: 600rpx;
		}
	}
	.download{
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
		.download_but{
			width: 360rpx;
			height: 80rpx;
			border-radius: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			border: 1rpx solid #fff;
			background-color: rgba(0,0,0,.6);
		}
	}
}
</style>
