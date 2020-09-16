<template>
	<view>
		<!-- 专辑背景开始 -->
		<view class="album_bg">
			<image :src="album.cover"></image>
			<view class="album_info">
				<view class="album_name">{{ album.name }}</view>
				<view class="album_but">关注专辑</view>
			</view>
		</view>
		<!-- 专辑背景结束 -->

		<!-- 专辑作者开始 -->
		<view class="album_auther">
			<view class="album_auther_info">
				<image mode="widthFix" :src="album.user.avatar"></image>
				<view class="auther_name">{{ album.user.name }}</view>
			</view>
			<view class="album_auther_desc">
				<text>{{ album.desc }}</text>
			</view>
		</view>
		<!-- 专辑作者结束 -->

		<!-- 列表开始 -->
		<view class="album_list">
			<view class="album_item" v-for="(item,index) in wallpaper" :key="item.id">
				<goDetail :list="wallpaper" :index="index"><image mode="aspectFill" :src="item.thumb + item.rule.replace('$<Height>', 360)"></image></goDetail>
			</view>
		</view>
		<!-- 列表结束 -->
	</view>
</template>

<script>
import goDetail from '../../components/goDetail.vue';
export default {
	components: {
		goDetail
	},
	data() {
		return {
			params: {
				limit: 30,
				order: 'new',
				skip: 0,
				first: 1
			},
			id: -1,
			album: {},
			wallpaper: [],
			hasMore: true
		};
	},
	onLoad(options) {
		this.id = options.id;
		this.getAblumList();
	},
	methods: {
		async getAblumList(id) {
			let res = await this.request({
				url: `/image/v1/wallpaper/album/${this.id}/wallpaper`,
				data: this.params
			});
			console.log(res);
			if (Object.keys(this.album).length === 0) {
				this.album = res.res.album;
			}
			if (res.res.wallpaper.length === 0) {
				this.hasMore = false;
				uni.showToast({
					title: '没有数据了...',
					icon: 'none'
				});
				return;
			}

			this.wallpaper = [...this.wallpaper, ...res.res.wallpaper];
		}
	},
	onReachBottom() {
		if (this.hasMore) {
			this.params.first = 0;
			this.params.skip += this.params.limit;
			this.getAblumList();
		} else {
			uni.showToast({
				title: '没有数据了...',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss">
.album_bg {
	position: relative;
	image {
	}
	.album_info {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		align-items: center;
		color: #fff;
		padding: 0 15rpx;
		.album_name {
			font-size: 40rpx;
		}
		.album_but {
			background-color: $color;
			width: 152rpx;
			height: 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 10rpx;
		}
	}
}
.album_auther {
	padding: 10rpx;
	.album_auther_info {
		padding: 10rpx 0;
		display: flex;
		image {
			width: 50rpx;
		}
		.auther_name {
			color: #000;
			margin-left: 15rpx;
		}
	}
	.album_auther_desc {
	}
}
.album_list {
	display: flex;
	flex-wrap: wrap;
	.album_item {
		width: 33.33%;
		border: 3rpx solid #fff;
		image {
			display: block;
			height: 160rpx;
		}
	}
}
</style>
