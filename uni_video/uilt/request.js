let urlTttp = 'http://157.122.54.189:9088'
export default (params) => {
	uni.showLoading({
		title:"加载中..."
	})
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urlTttp+params.url,
			data:params.data,
			header:params.header,
			method:params.method || 'GET',
			success:res=>{
				resolve(res.data)
			},
			fail:err=>{
				reject(err)
			},
			complete(){
				uni.hideLoading()
			}
		})
	})
}