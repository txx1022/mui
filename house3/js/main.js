 // 调取地图
  	$('#map').on('tap',function(){
  		 plus.geolocation.getCurrentPosition( successCB, errorCB);
  	})
  	function successCB(position){
  		// 设置目标位置坐标点和其实位置坐标点
	var dst = new plus.maps.Point(position.coords.longitude,position.coords.altitude); // 郑州
	var src = new plus.maps.Point(116.335,39.966); // 大钟寺
	// 调用系统地图显示 
	plus.maps.openSysMap( dst, "郑州", src );
  	}
  	function errorCB(){
  		alert("获取地图出错啦~")
  	}
  	 
  // 点击e跳转
  document.getElementById("e").addEventListener('tap',function(){
  	mui.openWindow({
  		url:'my.html',
  		id:'my.html'
  	})
  })
 document.getElementById("d").addEventListener('tap',function(){
  	mui.openWindow({
  		url:'pic.html',
  		id:'pic.html'
  	})
  })
 document.getElementById("b").addEventListener('tap',function(){
  	mui.openWindow({
  		url:'find.html',
  		id:'find.html'
  	})
  })
 document.getElementById("a").addEventListener('tap',function(){
  	mui.openWindow({
  		url:'main.html',
  		id:'main.html'
  	})
  })