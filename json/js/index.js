$(function(){
	
	$.get('books.json',null,function(res){
		var len=res.length,str='';
		for(var i=0;i<len;i++){
			var item=res[i];
			str+='书箱名字：'+item.title+'&nbsp;&nbsp;'+'作者：'+item.author+'</br></br>';
		}
		$('.json-box').html(str);
	});

	$.get('books.xml',null,function(res){

		var str='';
		$(res).find('book').each(function(){
			var title = $(this).children('title').text(),
				author = $(this).children('author').text();
				str+='书箱名字：'+title+'&nbsp;&nbsp;'+'作者：'+author+'</br></br>';
		});
		$('.xml-box').html(str);
	});
});