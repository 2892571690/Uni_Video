<template>
	<scroll-view scroll-y @scrolltolower="_handleGoBottom" class="recommend" v-if="recommendList.length > 0">
		<!-- 推荐开始 -->
		<view class="recommend_wrap">
			<view class="recommend_item" v-for="item in recommendList" :key="item.id"><image mode="widthFix" :src="item.thumb"></image></view>
		</view>
		<!-- 推荐结束 -->

		<!-- 月份开始 -->
		<view class="monenths_wrap">
			<view class="monenths_title">
				<view class="monenths_title_info">
					<view class="monenths_info">
						<text>{{ monthes.DD }}</text>
						/ {{ monthes.MM }} 月
					</view>
					<view class="monenths_text">{{ monthes.title }}</view>
				</view>
				<view class="monenths_title_more">更多></view>
			</view>
			<view class="monenths_content">
				<view class="monenths_item" v-for="item in monthes.items" :key="item.id">
					<image mode="aspectFill" :src="item.thumb + item.rule.replace('$<Height>', 360)"></image>
				</view>
			</view>
		</view>
		<!-- 月份结束 -->

		<!-- 热门开始 -->
		<view class="hots_wrap">
			<view class="hots_title"><text>热门</text></view>
			<view class="hots_content">
				<view class="hots_item" v-for="item in hostList" :key="item.id"><image mode="widthFix" :src="item.thumb"></image></view>
			</view>
		</view>
		<!-- 热门结束 -->
	</scroll-view>
</template>

<script>
import moment from 'moment';
export default {
	data() {
		return {
			// 推荐列表
			recommendList: [],
			// 月份
			monthes: {},
			// 热门
			hostList: [],
			// 请求的参数
			params: {
				// 要获取几条
				limit: 30,
				// 关键字
				order: 'hot',
				// 要跳过几条
				skip: 0
			},
			// 是否加载完
			hasMore:true
		};
	},
	created() {
		this.getRecommendList();
	},
	methods: {
		// 请求图片列表数据
		async getRecommendList() {
			let res = await this.request({
				url: '/image/v3/homepage/vertical',
				data: this.params
			});
			
			
			// 判断还有没有下一页数据
			if(res.res.vertical.length === 0){
				this.hasMore = false
				return
			}
			
			// 第一次发送请求
			if (this.recommendList.length === 0) {
				// 推荐模块
				this.recommendList = res.res.homepage[1].items;
				// 月份模块
				this.monthes = res.res.homepage[2];
				// 将时间戳 改为 18号/月
				this.monthes.MM = moment(this.monthes.stime).format('MM');
				this.monthes.DD = moment(this.monthes.stime).format('DD');
			}

			// 热门模块
			this.hostList = [...this.hostList, ...res.res.vertical];
		},
		// 滚动区域到底事件
		_handleGoBottom() {
			if(this.hasMore){
				this.params.skip += this.params.limit;
				this.getRecommendList();
			}else{
				uni.showToast({
					title:"我已经到底了哦~",
					icon:'none'
				})
			}
			
		}
	}
};
</script>

<style lang="scss">
.recommend {
	height: calc(100vh - 36px);
	.recommend_wrap {
		display: flex;
		flex-wrap: wrap;
		.recommend_item {
			width: 50%;
			border: 5rpx solid #fff;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.monenths_wrap {
		.monenths_title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx;
			.monenths_title_info {
				color: $color;
				font-size: 30rpx;
				font-weight: 600;
				display: flex;
				.monenths_info {
					text {
						font-size: 36rpx;
					}
				}
				.monenths_text {
					font-size: 34rpx;
					color: #666;
					margin-left: 30rpx;
				}
			}
			.monenths_title_more {
				font-size: 24rpx;
				color: $color;
			}
		}
		.monenths_content {
			display: flex;
			flex-wrap: wrap;
			.monenths_item {
				width: 33.33%;
				border: 5rpx solid #fff;
			}
		}
	}
	.hots_wrap {
		.hots_title {
			padding: 20rpx;
			text {
				border-left: 20rpx solid $color;
				padding-left: 20rpx;
				font-size: 34rpx;
				font-weight: 600;
			}
		}
		.hots_content {
			display: flex;
			flex-wrap: wrap;
			.hots_item {
				width: 33.33%;
				border: 5rpx solid #fff;
				image {
				}
			}
		}
	}
}
</style>
