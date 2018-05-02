// JavaScript Document
(function (global){
	function remChange ()
	{
		document.documentElement.style.fontSize=25*document.documentElement.clientWidth/375+'px';	
	}
	remChange();
	global.addEventListener('resize',remChange,false);
})(window);