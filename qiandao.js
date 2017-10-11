window.onload=function(){
var myDate = new Date(),
firstDay,numb=0,
alldays = 0,
weektoday = '',
dayValue,
showYear=0,
realyYear=0,
showMonth=0,
qiandao_Arr=['201798','201799','2017111'],//假如这三天是之前签到后台记录下来的
realyMonth=0,
showDay=0;
	showYear = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
	realyYear = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
	showMonth = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
	realyMonth = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
	showDay = myDate.getDate();


function days(year,month){//某年某月有几天
        var daysArr=[],dayCount;
        now = new Date(year,month, 0);
        dayCount = now.getDate();
        // console.log(dayCount);
        
        for (var i = 1; i <= dayCount; i++) {
        	daysArr.push(i);
        };
        return daysArr;
}
// dayValue =  myDate+;

// console.log(todayValue(showYear,showMonth));

function todayValue(myYear,myMonth){//处理年月——>第一天星期几
	dayValue = parseInt(myYear)+'-'+parseInt(myMonth)+'-1';
	// console.log(dayValue);
	firstDay = getWeekByDay(dayValue);//得到一个月的第一天是星期几
	return firstDay;
}
function getWeekByDay(dayValue){ //dayValue=“2014-01-01”
 var day = new Date(Date.parse(dayValue.replace(/-/g, '/'))); //将日期值格式化 
    var today = new Array("日","一","二","三","四","五","六"); //创建星期数组
    return today[day.getDay()];  //返一个星期中的某一天，其中0为星期日 
    // console.log(today[day.getDay()]); 
}




// console.log('2014年7月有'+days(2000,2)+'天');
/**************************************************************************************/
show(showYear,showMonth);
function show(showYear,showMonth){
	$('.day_ul li').html('');
	$('.show_YM').html(showYear + '年' + showMonth + '月');
	alldays = days(showYear,showMonth);//该月总天数的数组
	
	
	weektoday = todayValue(showYear,showMonth);//第一天星期几
	// console.log(weektoday);

$('.week_ul li').each(function(){
	var theLi;
	// console.log($(this).html());
	if (weektoday == $(this).html()) {
		// console.log($(this).index());
		theLi = $(this).index();

	for (var i = 0; i < alldays.length; i++) {
		// console.log(theLi);
		$($('.day_ul li')[i+theLi]).html(alldays[i]);
	};

		return false;
	};


});
checkDay();


}



$('.next_btn').bind('click',function(){
	showMonth++;
	if (showMonth<=12) {
		show(showYear,showMonth);
	}else{
		showMonth =1;showYear++;
		show(showYear,showMonth);
	};
});
$('.pre_btn').bind('click',function(){
	showMonth--;
	if (showMonth>=1) {
		show(showYear,showMonth);
	}else{
		showMonth =12;showYear--;
		show(showYear,showMonth);
	};
});

console.log(showYear + '年' + showMonth + '月');
function checkDay(){
	var new_Day;
	var qiandao_Day = ($('.show_YM').html()).replace(/[^0-9]/ig,"");
	console.log(qiandao_Day);



if (realyYear + '年' + realyMonth + '月' == $('.show_YM').html()) {
	console.log(showDay);
$('.day_ul li').each(function(){
	$(this).removeClass('choicing_Day').removeClass('choiced_Day');
	if ($(this).html() != '') {
	// console.log(qiandao_Arr);//存起来的签到日期数组
	// console.log(qiandao_Day+$(this).html());//目前展示的日期
	new_Day = qiandao_Day+$(this).html();//目前展示的日期


	if (parseInt($(this).html()) == showDay) {
			$(this).addClass('choicing_Day').one('click',function(){
			// var qiandao_Day;
			var stringDate = myDate.toLocaleDateString();
			var Datevalue = stringDate.replace(/[^0-9]/ig,""); 
				qiandao_Arr.push(Datevalue);
			$(this).removeClass('choicing_Day').addClass('choiced_Day').unbind();

			openModal({
				dTitle:'恭喜您获得<span>5</span>积分',
				dWords:'连续签到5天可另外多获得10积分'
			});
			$('.submit_btn').bind('click',function(){
				closeModal();
			});

		});
		
	}
for (var i = 0; i < qiandao_Arr.length; i++) {
		if (new_Day == qiandao_Arr[i]) {
			console.log('签到过了');
			$(this).addClass('choiced_Day');
		};
	};
};
});


}else{
	$('.day_ul li').each(function(){
			$(this).removeClass('choicing_Day').removeClass('choiced_Day');
		if ($(this).html() != '') {
			new_Day = qiandao_Day+$(this).html();//目前展示的日期
				console.log(qiandao_Arr);
				console.log(new_Day);
		for (var i = 0; i < qiandao_Arr.length; i++) {
			if (new_Day == qiandao_Arr[i]) {
				console.log('前面的也签到了');

				$(this).addClass('choiced_Day');
			}
		};

	}
	});
}
}


































}