<template>
	<view class="index">
		<view class="video_tab">
			<view class="video_tab_title">
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
			<view class="video_tab_content">
				<view v-if="current < 4"><videoMain :urlobj="{url:items[current].url,params:items[current].params}"></videoMain></view>
				<view v-if="current === 4"><videoCategory></videoCategory></view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue';
import videoMain from './video-main/video-main'
import videoCategory from './video-category/video-category'
export default {
	components: {
		uniSegmentedControl,
		videoMain,
		videoCategory
	},
	data() {
		return {
			items: [
				{ title: '推荐', url:'/videoimg/v1/videowp/featured', params:{limit:30, skip:0, order:'hot'}}, 
				{ title: '娱乐', url:'/videoimg/v1/videowp/category/59b25abbe7bce76bc834198a', params:{limit:30, skip:0, order:'new'} }, 
				{ title: '最新', url:'/videoimg/v1/videowp/videowp', params:{limit:30, skip:0, order:'new'} }, 
				{ title: '热门', url:'/videoimg/v1/videowp/videowp', params:{limit:30, skip:0, order:'hot'} },
				{ title: '分类', url:'/videoimg/v1/videowp/category', params:{} },
			],
			current: 0
		};
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
	.video_tab{
		.video_tab_title{
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
		.video_tab_content{
			
		}
	}
</style>
