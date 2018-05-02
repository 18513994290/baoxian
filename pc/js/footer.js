document.write('<div class="foot"> \
      <div class="foot-cot"> \
        <h2></h2> \
        <p class="foot-cot-txt1">北京精准沟通传媒科技股份有限公司 版权所有 京ICP备11006567号-2</p> \
        <p class="foot-cot-txt2"> \
          <a href="http://www.pcmglobe.com/">www.pcmglobe.com</a> 2007-<b class="year"></b> © All Rights Reserved.</p> \
      </div> \
    </div>')


$(function (){
  //导航点击变色
  $('.main-nav li a').click(function (){
    $('.main-nav li a').removeClass('active');
    $(this).addClass('active');
  });
  
  //当滚动条的距离大于100是淡入，小于100是淡出
    $(window).scroll(function (){
      if ($(window).scrollTop()>100)  
      {
        $('#top').fadeIn(500);  
      }
      else
      {
        $('#top').fadeOut(500);   
      }
    });
    //点击top回到顶部
    $('#top').click(function (){
      $('body,html').stop().animate({scrollTop:0},500);
    });
    
//  获取年份
    var date=new Date;
    var year=date.getFullYear();
    $('.year').html(year);
});
