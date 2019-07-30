var jing='117.272324',
	wei='34.268702',
	sheng='江苏省',
	shi='徐州市',
	qu='鼓楼区',
	wanzheng='江苏省徐州市鼓楼区奥特莱斯'
document.addEventListener('plusready', onPlusReady, false);
// 扩展API加载完毕，现在可以正常调用扩展API
function onPlusReady(){
	plus.geolocation.getCurrentPosition(function(p){
		console.log(JSON.stringify(p))
		jing=p.coords.longitude
		wei=p.coords.latitude
		sheng=p.address.province
		shi=p.address.city
		qu=p.address.district
		wanzheng=p.address.addresses
		myvue.setmap()
	}, function(e){
		plus.nativeUI.toast('定位失败，请检查网络和GPS');
		setTimeout(function(){
			onPlusReady()
		},1000)
	} );
}