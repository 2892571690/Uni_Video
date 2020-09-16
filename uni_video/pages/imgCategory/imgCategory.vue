<template>
	<view>
		<view class="category_tab">
			<view class="category_tab_title">
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
			<scroll-view @scrolltolower="handleScrolltolower" enable-flex scroll-y class="category_tab_content">
				<view class="cate_item" v-for="(item,index) in vertical" :key="item.id">
					<image @click="handleImg(index)" :src="item.thumb" mode="widthFix"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue';
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: [{ title: '最新', order:'new' }, { title: '热门', order:'hot' }],
				current: 0,
				params:{
					limit:30,
					skip:0,
					order:'new'
				},
				id:0,
				vertical:[],
				hasMore:true
			}
		},
		onLoad(options){
			this.id = options.id
			this.getlist()
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}else{
					// 点击相同的标题
					return
				}
				this.params.skip = 0
				this.vertical = []
				this.params.order = this.items[e.currentIndex].order
				this.getlist()
			},
			async getlist(){
				let res = await this.request({
					url:`/image/v1/vertical/category/${this.id}/vertical`,
					data:this.params
				})
				// console.log(res)
				if(res.res.vertical.length === 0){
					this.hasMore = false
					uni.showToast({
						title:'没有数据了...',
						icon:'none'
					})
					return
				}
				this.vertical = [...this.vertical,...res.res.vertical]
			},
			handleScrolltolower(){
				if(this.hasMore){
					this.params.skip += this.params.limit
					this.getlist()
				}else{
					uni.showToast({
						title:'没有数据了...',
						icon:'none'
					})
				}
			},
			handleImg(index){
				let self = this
				uni.previewImage({
					current:index,
					urls:self.vertical.map(v => v.thumb),
					loop:true
				})
			}
		}
	}
</script>

<style lang="scss">
	.category_tab{
		.category_tab_title{
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
		.category_tab_content{
			display: flex;
			flex-wrap: wrap;
			height: calc(100vh - 36px);
			box-sizing: border-box;
			.cate_item{
				width: 33.33%;
				border: 5rpx solid #fff;
				image{
					
				}
			}
		}
	}
</style>
