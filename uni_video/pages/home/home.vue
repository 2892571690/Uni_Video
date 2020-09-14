<template>
	<view class="index">
		<view class="home_tab">
			<view class="home_tab_title">
				<view class="title_inner">
					<uni-segmented-control
						:current="current"
						:values="items.map(v => v.title)"
						@clickItem="onClickItem"
						style-type="text"
						active-color="#d4237a"
					></uni-segmented-control>
				</view>
				<view class="iconfont icon-sousuo"></view>
			</view>
			<view class="home_tab_content">
				<view class="content">
					<view v-if="current === 0"><homeRcommend></homeRcommend></view>
					<view v-if="current === 1"><homeCategory></homeCategory></view>
					<view v-if="current === 2"><homeNew></homeNew></view>
					<view v-if="current === 3"><homeAlbum></homeAlbum></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import homeAlbum from './home-album/home-album';
import homeCategory from './home-category/home-category';
import homeNew from './home-new/home-new';
import homeRcommend from './home-recommend/home-recommend';
import uniSegmentedControl from '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue';
export default {
	components: {
		homeAlbum,
		homeCategory,
		homeNew,
		homeRcommend,
		uniSegmentedControl
	},
	data() {
		return {
			items: [{ title: '推荐' }, { title: '分类' }, { title: '最新' }, { title: '专辑' }],
			current: 0
		};
	},
	onLoad() {

	},
	methods: {
		onClickItem(e) {
			if (this.current !== e.currentIndex) {
				this.current = e.currentIndex;
			}
		}
	}
};
</script>

<style lang="scss">
	.home_tab{
		.home_tab_title{
			position: relative;
			.title_inner{
				width: 60%;
				margin: 0 auto;
			}
			.icon-sousuo{
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 5%;
				font-size: 36rpx;
			}
		}
		.home_tab_content{
			
		}
	}
</style>
