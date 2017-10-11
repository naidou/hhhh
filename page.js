window.onload=function(){


$('.submit_anniu').bind('click',function(){
		checkCode(1);
	}) ;
/*******************公用的验证函数***************************/
function checkCode(numb){
	var isVailed  = $('#tel').val() && $('#code').val() ;//暂时只判断了不为空的情况
	if(isVailed){
		$('.submit_anniu').hide();
		$('#loginBox').html('');
		var $p1 = '<p>对不起，您不是上海移动的员工!<br >无法进行账号绑定!</p>',
		    $p2 = '<p>恭喜您，绑定成功!</p>';
		if (numb == 1) {
			$('#loginBox').html($p1);
		}else{
			$('#loginBox').html($p2);
		};

	}else {
		$('.submit_anniu').unbind();
		$('.wrong_numb').show();
		setTimeout(function(){
			$('.wrong_numb').fadeOut(300);
			$('.submit_anniu').bind('click',function(){
				checkCode(1);
			}) ;
		},1500);
	}
}

var timer=null,getCheck_btn=$('#getCheck_btn');
	getCheck_btn.bind('click',getCheck);
	
function getCheck(){
	getCheck_btn.unbind('click');
	getCheck_btn.html('已发送(60s)');
	var cur=60;
	timer=setInterval(function(){
		/*parseInt(getCheck_btn.html())*/
		cur--;
		if(cur>0){
			getCheck_btn.html('已发送('+cur+'s)');
		}else{
			clearInterval(timer);
			getCheck_btn.html('获取验证码');
			getCheck_btn.bind('click',getCheck);
		}
	},1000);
	
}























}