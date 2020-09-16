<template>
	<scroll-view class="ablum_scroll_view" scroll-y @scrolltolower="_handleToLower">
		<!-- 轮播开始 -->
		<view class="album_swiper">
			<swiper autoplay indicator-dots circular interval="3000">
				<swiper-item v-for="item in banner" :key="item.id"><image :src="item.thumb"></image></swiper-item>
			</swiper>
		</view>
		<!-- 轮播结束 -->
		<!-- 列表开始 -->
		<view class="ablum_list">
			<navigator :url="`/pages/ablum/ablum?id=${item.id}`" class="ablum_item" v-for="item in album" :key="item.id">
				<view class="ablum_img"><image mode="aspectFill" :src="item.cover"></image></view>
				<view class="ablum_info">
					<view class="ablum_name">{{ item.name }}</view>
					<view class="ablum_desc">{{ item.desc }}</view>
					<view class="ablum_btn"><view class="ablum_attention">关注</view></view>
				</view>
			</navigator>
		</view>
		<!-- 列表结束 -->
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			params: {
				limit: 30,
				order: 'new',
				skip: 0
			},
			// 轮播图
			banner: [],
			// 列表数组
			album: [],
			// 是否还有分页数据
			hasMore: true
		};
	},
	created() {
		uni.setNavigationBarTitle({ title: '专辑' });
		this.getAlbumList();
	},
	methods: {
		// 获取数据
		async getAlbumList() {
			let res = await this.request({
				url: '/image/v1/wallpaper/album',
				data: this.params
			});
			// console.log(res);
			if (this.banner.length === 0) {
				this.banner = res.res.banner;
			}
			if (res.res.album.length === 0) {
				this.hasMore = false;
				uni.showToast({
					title:"没有数据了...",
					icon:"none"
				})
				return
			}
			this.album = [...this.album, ...res.res.album];
		},
		// 上拉加载
		_handleToLower() {
			if (this.hasMore) {
				this.params.skip += this.params.limit;
				this.getAlbumList();
			} else {
				uni.showToast({
					title: '没有数据了...',
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style lang="scss">
.ablum_scroll_view {
	height: calc(100vh - 36px);
}
swiper {
	height: calc(750rpx / 2.3);
	image {
		height: 100%;
	}
}
.ablum_list {
	padding: 10rpx;
	.ablum_item {
		padding: 10rpx 0;
		display: flex;
		border-bottom: 1rpx solid #ccc;
		.ablum_img {
			flex: 1;
			padding: 10rpx;
			image {
				width: 200rpx;
				height: 200rpx;
			}
		}
		.ablum_info {
			flex: 2;
			padding: 0 10rpx;
			overflow: hidden;
			.ablum_name {
				font-size: 30rpx;
				color: #000;
				padding: 10rpx 0;
			}
			.ablum_desc {
				padding: 10rpx 0;
				font-size: 24rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			.ablum_btn {
				padding: 10rpx;
				display: flex;
				justify-content: flex-end;
				.ablum_attention {
					color: $color;
					border: 1rpx solid $color;
					padding: 10rpx;
				}
			}
		}
	}
}
</style>
