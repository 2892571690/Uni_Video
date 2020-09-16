<template>
	<view>
		<!-- 用户信息 开始 -->
		<view class="user_info" v-if="imgDetail.user">
			<view class="user_icon"><image :src="imgDetail.user.avatar" mode="widthFix"></image></view>
			<view class="user_desc">
				<view class="user_name">{{ imgDetail.user.name }}</view>
				<view class="user_time">{{ imgDetail.cnTime }}</view>
			</view>
		</view>
		<view class="noneUser" v-else>
			<view class="noneName">无作者</view>
			<view class="user_time">{{ imgDetail.cnTime }}</view>
		</view>

		<!-- 用户信息 结束 -->

		<!-- 高清大图 开始 -->
		<view class="high_img">
			<swiperActive @swiperAction="handleSwiperAction"><image mode="widthFix" :src="imgDetail.thumb"></image></swiperActive>
		</view>
		<!-- 高清大图 结束 -->

		<!-- 点赞  开始 -->
		<view class="user_rank">
			<view class="rank">
				<text class="iconfont icon-dianzan-copy"></text>
				<text class="text_size">{{ imgDetail.rank }}</text>
			</view>
			<view class="user_collect"><text class="iconfont icon-shoucang">收藏</text></view>
		</view>

		<!-- 点赞  结束 -->

		<!-- 专辑 开始 -->
		<view class="album_wrap" v-if="album.length">
			<!-- 标题 -->
			<view class="album_title">相关</view>
			<!-- 内容 -->
			<view class="album_list">
				<view class="album_item" v-for="item in album" :key="item.id">
					<view class="album_cover"><image :src="item.cover" mode="aspectFill"></image></view>
					<!-- 右边 -->
					<view class="album_info">
						<view class="album_info_text">专辑</view>
						<view class="album_name">{{ item.name }}</view>
						<text class="iconfont icon-zyojiantou"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 专辑 结束 -->

		<!-- 最热评论 comment hot -->
		<view class="comment hot" v-if="hot.length">
			<view class="comment_title">
				<text class="iconfont icon-huo"></text>
				<text class="comment_text">最热评论</text>
			</view>
			<view class="comment_list">
				<view class="comment_item" v-for="item in hot" :key="item.id">
					<!-- 用户信息 -->
					<view class="comment_user">
						<!-- 用户头像 -->
						<view class="user_icon"><image mode="widthFix" :src="item.user.avatar"></image></view>
						<!-- 用户名称 -->
						<view class="user_name">
							<view class="user_nickname">{{ item.user.name }}</view>
							<view class="user_item">{{ item.cnTime }}</view>
						</view>
						<!-- 用户徽章 -->
						<view class="user_badge"><image v-for="item2 in item.user.title" :key="item2.icon" :src="item2.icon"></image></view>
					</view>
					<!-- 评论数据 -->
					<view class="comment_desc">
						<view class="comment_content">{{ item.content }}</view>
						<view class="comment_like">
							<text class="iconfont icon-dianzan-copy"></text>
							<text class="text_size">{{ item.size }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 最新评论 comment new -->
		<view class="comment new" v-if="comment.length">
			<view class="comment_title">
				<text class="iconfont icon-pinglun-copy-copy"></text>
				<text class="comment_text">最新评论</text>
			</view>
			<view class="comment_list">
				<view class="comment_item" v-for="item in comment" :key="item.id">
					<!-- 用户信息 -->
					<view class="comment_user">
						<!-- 用户头像 -->
						<view class="user_icon"><image mode="widthFix" :src="item.user.avatar"></image></view>
						<!-- 用户名称 -->
						<view class="user_name">
							<view class="user_nickname">{{ item.user.name }}</view>
							<view class="user_item">{{ item.cnTime }}</view>
						</view>
						<!-- 用户徽章 -->
						<view class="user_badge"><image v-for="item2 in item.user.title" :key="item2.icon" :src="item2.icon"></image></view>
					</view>
					<!-- 评论数据 -->
					<view class="comment_desc">
						<view class="comment_content">{{ item.content }}</view>
						<view class="comment_like">
							<text class="iconfont icon-dianzan-copy"></text>
							<text class="text_size">{{ item.size }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="download">
			<view class="download_but" @click="_handleDowload">下载图片</view>
		</view>
	</view>
</template>

<script>
import swiperActive from '../../components/swiperActive.vue';
import moment from 'moment';
// 设置中文的
moment.locale('zh-cn');
export default {
	components: {
		swiperActive
	},
	data() {
		return {
			// 图片信息对象，包含用户头像
			imgDetail: {},
			// 专辑数据
			album: [],
			// 最热评论
			hot: [],
			// 最新评论
			comment: [],
			imgIndex:0
		};
	},
	onLoad() {
		// console.log(getApp().globalData.imgList)
		// console.log(getApp().globalData.imgIndex)
		const { imgIndex } = getApp().globalData;
		this.imgIndex = imgIndex
		this.getData()
	},
	methods: {
		getData(){
			const { imgList } = getApp().globalData;
			this.imgDetail = imgList[this.imgIndex];
			// xxx年钱的数据
			this.imgDetail.cnTime = moment(this.imgDetail.atime * 1000).fromNow();
			this.getCommentsList(this.imgDetail.id);
		},
		async getCommentsList(id) {
			let res = await this.request({
				url: `/image/v2/wallpaper/wallpaper/${id}/comment`
			});
			console.log(res);
			this.album = res.res.album;

			// 给hot数组中的对象添加一个时间属性  xxx年前
			res.res.hot.forEach(v => (v.cnTime = moment(v.atime * 1000).fromNow()));
			res.res.comment.forEach(v => (v.cnTime = moment(v.atime * 1000).fromNow()));

			this.hot = res.res.hot;
			this.comment = res.res.comment;
		},
		// 滑动事件
		handleSwiperAction(e){
			const { imgList } = getApp().globalData;
			if(e.direction === "left" && this.imgIndex < imgList.length -1){
				this.imgIndex ++
				this.getData()
			}else if(e.direction === "right" && this.imgIndex > 0){
				this.imgIndex --
				this.getData()
			}else{
				uni.showToast({
					title:'没有数据了...',
					icon:'none'
				})
			}
		},
		// 点击下载到本地
		async _handleDowload(){
			// uni.downloadFile
			// uni.saveImageToPhotosAlbum
			await uni.showLoading({
				title:'下载中...'
			})
			// 1.将远程文件下载到小程序的内存中 tempFilePath
			let res = await uni.downloadFile({url:this.imgDetail.img})
			let { tempFilePath } = res[1]
			// 2.将小程序内存中的临时文件下载到本地
			let res1 = await uni.saveImageToPhotosAlbum({ filePath:tempFilePath })
			uni.hideLoading()
			await uni.showToast({
				title:'下载完成'
			})
		}
	}
};
</script>

<style lang="scss">
.noneUser {
	padding: 20rpx;
	display: flex;
	align-items: center;
	.noneName {
		color: #000;
		font-size: 30rpx;
		padding-right: 10rpx;
	}
	.user_time {
		color: #ccc;
		font-size: 24rpx;
		padding: 10rpx 0;
	}
}

.user_info {
	display: flex;
	padding: 20rpx;
	.user_icon {
		padding: 0 20rpx;
		image {
			width: 88rpx;
			border-radius: 50%;
		}
	}
	.user_desc {
		.user_name {
			color: #000;
			font-weight: 600;
		}
		.user_time {
			color: #ccc;
			font-size: 24rpx;
			padding: 10rpx 0;
		}
	}
}
.high_img {
	image {
		border-bottom: 1rpx solid #eee;
	}
}
.user_rank {
	display: flex;
	height: 80rpx;
	border-bottom: 5rpx solid #ccc;
	.rank {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		.icon-dianzan-copy {
			color: #ccc;
		}
	}
	.user_collect {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		.icon-shoucang {
		}
	}
}
.album_wrap {
	padding: 20rpx;
	.album_title {
		padding: 10rpx 0;
	}
	.album_list {
		.album_item {
			display: flex;
			padding: 10rpx 0;
			border-bottom: 10rpx solid #eee;
			.album_cover {
				flex: 1;
				image {
					width: 180rpx;
					height: 180rpx;
				}
			}
			.album_info {
				flex: 3;
				padding-left: 20rpx;
				position: relative;
				.album_info_text {
					width: 100rpx;
					height: 50rpx;
					background-color: $color;
					color: #ffffff;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.album_name {
					padding: 10rpx 0;
					color: #888;
				}
				.icon-zyojiantou {
					font-size: 40rpx;
					position: absolute;
					transform: translateY(-50%);
					right: 10%;
					color: #000;
				}
			}
		}
	}
}

.comment {
	.comment_title {
		padding: 15rpx;
		.icon-huo {
			color: red;
			font-size: 40rpx;
		}
		.comment_text {
			font-weight: 600;
			font-size: 28rpx;
			color: #666;
			margin-left: 10rpx;
		}
	}
	.comment_list {
		.comment_item {
			border-bottom: 15rpx solid #ccc;
			.comment_user {
				padding: 20rpx 0;
				display: flex;
				.user_icon {
					width: 15%;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 90%;
					}
				}
				.user_name {
					flex: 1;
					.user_nickname {
						color: #777;
					}
					.user_item {
						color: #ccc;
						font-size: 24rpx;
						padding: 5rpx;
					}
				}
				.user_badge {
					image {
						width: 40rpx;
						height: 40rpx;
						display: inline-block;
					}
				}
			}
			.comment_desc {
				display: flex;
				padding: 30rpx 0;
				.comment_content {
					flex: 1;
					padding-left: 15%;
					color: #000;
				}
				.comment_like {
					text-align: right;
					padding-right: 10rpx;
					.icon-dianzan-copy {
						color: #ccc;
					}
				}
			}
		}
	}
}
.download{
	height: 120rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	.download_but{
		width: 90%;
		height: 80%;
		background-color: $color;
		color: #FFFFFF;
		font-size: 50%;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
.icon-pinglun-copy-copy {
	color: #007aff !important;
}
</style>
