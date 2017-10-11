(function  () {	
var count =0 ;
$(".go-btn").one("click",function(){//开始按钮
	var i = parseInt(Math.random()*8);
	gogo(i);
})
$('.dialogue-title,.dialogue-words').show();
function gogo(index){			
	count++;
	var arr = [0,1,2,3,4,5,6,7] ;//转盘分了六份
	var MM = '';

	console.log(index);

switch (index){
	case 0:	
		MM = 20					
		break;
	case 2:	
		MM = 10						
		break;
	case 4:	
		MM = 5						
		break;
	case 6:	
		MM = 50						
		break;
};

setTimeout(function(){	

if(index%2 ==1){//没有中奖
			openModal({
				dTitle:'很遗憾',
				dWords:'谢谢您的参与!'
			});
			$('#toget').bind('click',function(){
				closeModal();
			});
}else{
			openModal({
				dTitle:'恭喜您',
				dWords:'获得'+MM+'积分奖励'
			});
			$('#toget').bind('click',function(){
				closeModal();
			});
};

},3000);


	$('#dial').css({'transform':'rotate('+(1080*count+(45*arr[index]))+'deg)'});


}


})();
var oMarquee = document.getElementById("recentAwards"); //滚动对象


