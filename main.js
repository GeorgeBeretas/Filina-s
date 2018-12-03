function reply_click(e) {
	var editimg = document.getElementById("sunnyimg");
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'IMG') {
        //alert(editimg.src);
		editimg.src=e.src;
    }
}