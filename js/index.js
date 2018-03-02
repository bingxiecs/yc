// $(".container").on("click",function(){
//     alert("00000")
// })
// $(".part2_contain ul li").hover(function(){
//     console.log("aaaa")
//       var that = $(this)
//     that.addClass("active").siblings(that).removeClass('active');
// })
  $(".part5_contain_right_top2 .tab li").on("click", function () {
            var that = $(this),
            	index = that.index();
            	parent =  $(".part5_contain_right_top2 .block") 
            that.addClass('active').siblings(that).removeClass('active');
            parent.eq(index).removeClass('none').siblings('.part5_contain_right_top2 .block').addClass('none').trigger("scroll");
        })

  $(".parts1_contain_right_top2 .tab li").on("click", function () {
            var that = $(this),
            	index = that.index();
            	parent =  $(".parts1_contain_right_top2 .block") 
            that.addClass('active').siblings(that).removeClass('active');
            parent.eq(index).removeClass('none').siblings('.parts1_contain_right_top2 .block').addClass('none').trigger("scroll");
        })

