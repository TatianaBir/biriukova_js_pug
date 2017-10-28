$(document).ready(function () {

		$('.menu').on('click', '.menu-item', function () {
			var contentName = $(this).attr("data-contentNumber");
            $('.menu-item').removeClass('active');
            $('.myCont').load(contentName);
            $(this).addClass('active');
        });
});


	