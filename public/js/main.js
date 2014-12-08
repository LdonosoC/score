$("p[src]").each(function () {
	var dom = this,
	url = $(dom).attr('src');

	$.get(url, function (res) {
		$(dom).html(res);
	});
});