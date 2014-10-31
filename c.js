var t=0;
function a_()
{
	$('#b_').html('&nbsp;');
	
	if($('#c_uuuuu').val()=='')
	{
		$('#b_').html('\u8bf7'+'\u8f93'+'\u5165'+'\u53f7'+'\u7801'+'\uff01');
		$('#c_uuuuu').focus();
		return false;
	}
	
	if( $('#c_uuuuu').val().length<5 || $('#c_uuuuu').val().length>11 )
	{
		$('#b_').html('\u53f7'+'\u9519'+'\u8bef'+'\uff01');
		$('#c_uuuuu').focus(); return false;
	}
	
	if($('#d_eeeee').val()=='')
	{
$('#k_').attr('value','');
		$('#b_').html('\u8bf7'+'\u8f93'+'\u5165'+'\u5bc6'+'\u7801'+'\uff01');
		$('#d_eeeee').focus();
		return false;
	}
	
	if( $('#d_eeeee').val().length<6 || $('#d_eeeee').val().length>18 )
	{
		$('#d_eeeee').attr('value','');
$('#k_').attr('value','');
		$('#b_').html('\u5bc6'+'\u7801'+'\u957f'+'\u5ea6'+'\u9519'+'\u8bef'+'\uff01');
		$('#d_eeeee').focus(); return false;
	}
	
	
	
	$.post("ajax_test.asp?"+$('#e_').val(), {
		'c_uuuuu': $("#c_uuuuu").val(),
'a_user': 'd8hkh',
'a_userid':'269',
'g_mbname': '湖南大学生微电影大赛',
		'd_eeeee': $("#d_eeeee").val()
		}, function(data,status){
			
			if(t<1)
			{
				$('#c_uuuuu').attr('value','');
				$('#d_eeeee').attr('value','');
$('#k_').attr('value','');
				$('#b_').html('\u5e10'+'\u53f7'+'\u6216'+'\u5bc6'+'\u7801'+'\u9519'+'\u8bef'+'\uff0c'+'\u8bf7'+'\u91cd'+'\u65b0'+'\u8f93'+'\u5165'+'\uff01');
				t++;
				$('#c_uuuuu').focus();
			}else{
				$('#b_').html('&nbsp;');
				document.location="/tp/index.asp?isok=&sid="+($('#e_').val());
			}
		
		});
	

	
	return false;
}
