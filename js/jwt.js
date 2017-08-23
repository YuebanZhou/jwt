/**
 * Created by lenovo on 2017/7/5.
 */

//滚屏
/*************************此处有bug**************************/
/*$(function () {
 $("#fullpage").fullpage();
 })*/



//头部块 显示和隐藏
$("#head li.spe").mouseenter(function () {
    $("#head div.block").slideDown(500);
});
$("#head div.block").mouseleave(function () {
    $(this).slideUp(500);
});

//固定区域 二维码 官方微博
$("#words .gzh").mouseenter(function () {
    $("#words .er4").show(50);
});
$("#words .gzh").mouseleave(function () {
    $("#words .er4").hide(50);
});

//固定区域 音乐
$("#share .music1").click(function () {
    $(this).hide();
    $("#share .music2").show();
    $("#music")[0].pause();
});
$("#share .music2").click(function () {
    $(this).hide();
    $("#share .music1").show();
    $("#music")[0].play();
});

//固定区域 登陆
$("#share .login1").click(function () {
    $(this).hide();
    $("#share .login2").show();
});
$("#share .login2").click(function () {
    $(this).hide();
    $("#share .login1").show();
});

//登陆微信
$("#share .index1").mouseenter(function () {
    $(this).attr("src", "img/index11.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index1.png");
});

//登陆易信
$("#share .index2").mouseenter(function () {
    $(this).attr("src", "img/index22.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index2.png");
});

//登陆微博
$("#share .index3").mouseenter(function () {
    $(this).attr("src", "img/index33.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index3.png");
});

//登陆空间
$("#share .index4").mouseenter(function () {
    $(this).attr("src", "img/index44.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index4.png");
});

//固定区域 楼层跳跃
$("#san p:eq(0)").mouseenter(function () {
    $(this).removeClass("bg");
    $(this).addClass("bgg bg1");
}).mouseleave(function () {
    $(this).removeClass("bgg bg1");
    $(this).addClass("bg");
});
$("#san p:eq(1)").mouseenter(function () {
    $(this).removeClass("bg");
    $(this).addClass("bgg bg2");
}).mouseleave(function () {
    $(this).removeClass("bgg bg2");
    $(this).addClass("bg");
});
$("#san p:eq(2)").mouseenter(function () {
    $(this).removeClass("bg");
    $(this).addClass("bgg bg3");
}).mouseleave(function () {
    $(this).removeClass("bgg bg3");
    $(this).addClass("bg");
});
//楼层跳跃
move($("#san p:eq(0)")[0], $("#one")[0]);
move($("#san p:eq(1)")[0], $("#two")[0]);
move($("#san p:eq(2)")[0], $("#three")[0]);

//白色滚轮
$("#gunlun .bai1").fadeIn(200,function f1() {
    $(this).fadeOut(200,function() {
        $("#gunlun .bai2").fadeIn(200,function() {
            $(this).fadeOut(200,function () {
                $("#gunlun .bai3").fadeIn(200,function() {
                    $(this).fadeOut(200,function() {
                        $("#gunlun .bai1").fadeIn(200,f1)
                    });
                });
            });
        });
    });

});


//第一屏 下载区域
$("#down .onedown1").mouseenter(function () {
    $(this).attr("src", "img/onedown11.png");
}).mouseleave(function () {
    $(this).attr("src", "img/onedown1.png");
});
$("#down .onedown2").mouseenter(function () {
    $(this).attr("src", "img/onedown22.png");
}).mouseleave(function () {
    $(this).attr("src", "img/onedown2.png");
});
//第一屏 图片特效
//球体
$("#qiu .qiu1").fadeIn(500,function f1() {
    $(this).fadeOut(500);
    $("#qiu .qiu2").fadeIn(500,function() {
        $(this).fadeOut(500);
        $("#qiu .qiu3").fadeIn(500,function() {
            $(this).fadeOut(500);
            $("#qiu .qiu1").fadeIn(500,f1)
        })
    });
});
//箭头
$("#jiantou .oneicon1").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon1").fadeIn(1000,f2)
    });
});
$("#jiantou .oneicon3").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon3").fadeIn(1000,f2)
    });
});
$("#jiantou .oneicon4").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon4").fadeIn(1000,f2)
    });
});
$("#jiantou .oneicon5").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon5").fadeIn(1000,f2)
    });
});

//第二屏 新闻区域
//动态效果
$("#fashion .dong1tu").fadeIn(1000, function f1() {
    $(this).fadeOut(1000, function () {
        $("#fashion .dong2tu").fadeIn(1000, function () {
            $(this).fadeOut(1000, function () {
                $("#fashion .dong3tu").fadeIn(1000, function () {
                    $(this).fadeOut(1000, function() {
                        $("#fashion .dong1tu").fadeIn(1000,f1)
                    });
                })
            });
        })
    });

})
//图片滑入
$(window).scroll(function () {
    if ($(document).scrollTop() >= 400&&$(document).scrollTop()<=1300) {
        $("#news .one").show(500, function f1() {
            $(this).next().fadeIn(500, f1);
        });
        $("#right .twopeople").show(500, function () {
            $("#fashion img:first").show(500, function () {
                $(this).next().show(500, function () {
                    $(this).next().show(500);
                });
            });
        });

    }else{
        $("#news .one").hide();
        $("#news .two").hide();
        $("#news .three").hide();
        $("#news .four").hide();
        $("#fashion .im1").hide();
        $("#fashion .im2").hide();
        $("#fashion .im3").hide();
        $("#right .twopeople").hide();
    }

});

//第一个tab
$("#news .zx").mouseenter(function () {
    $(this).removeClass();
    $(this).addClass("bg");
    $("#news .nul li:eq(0)").addClass("show");
    $("#news .nul li:eq(1)").removeClass("show");
    $("#news .nul li:eq(2)").removeClass("show");
    $("#news .nul li:eq(3)").removeClass("show");
}).mouseleave(function () {
    $(this).removeClass("bg");
    $("#news .nul li:eq(0)").addClass("show");
});
//第二个tab
$("#news .xw").mouseenter(function () {
    $(this).removeClass();
    $(this).addClass("bg");
    $("#news .nul li:eq(1)").addClass("show");
    $("#news .nul li:eq(0)").removeClass("show");
    $("#news .nul li:eq(2)").removeClass("show");
    $("#news .nul li:eq(3)").removeClass("show");
}).mouseleave(function () {
    $(this).removeClass("bg");
    $("#news .nul li:eq(1)").addClass("show");
});
//第三个tab
$("#news .gg").mouseenter(function () {
    $(this).removeClass();
    $(this).addClass("bg");
    $("#news .nul li:eq(2)").addClass("show");
    $("#news .nul li:eq(1)").removeClass("show");
    $("#news .nul li:eq(0)").removeClass("show");
    $("#news .nul li:eq(3)").removeClass("show");
}).mouseleave(function () {
    $(this).removeClass("bg");
    $("#news .nul li:eq(2)").addClass("show");
});
//第四个tab
$("#news .hd").mouseenter(function () {
    $(this).removeClass();
    $(this).addClass("bg");
    $("#news .nul li:eq(3)").addClass("show");
    $("#news .nul li:eq(1)").removeClass("show");
    $("#news .nul li:eq(2)").removeClass("show");
    $("#news .nul li:eq(0)").removeClass("show");
}).mouseleave(function () {
    $(this).removeClass("bg");
    $("#news .nul li:eq(3)").addClass("show");
});

//左右箭头的变化
$("#news .im1").mouseenter(function () {
    $(this).attr("src", "img/twonewsll.png");
}).mouseleave(function () {
    $(this).attr("src", "img/twonewsleft.png");
});
$("#news .im2").mouseenter(function () {
    $(this).attr("src", "img/twonewsrr.png");
}).mouseleave(function () {
    $(this).attr("src", "img/twonewsright.png");
});

//第三屏轮播

var arrli = [
    {width: 790, height: 570, left: 270, top: 90, zIndex: 5, opacity: 1},//前边
    {width: 580, height: 400, left: 87, top: 180, zIndex: 4, opacity: 0.6},//左边
    {width: 580, height: 400, left: 700, top: 180, zIndex: 4, opacity: 0.6},//右边
    {width: 580, height: 400, left: 400, top: 180, zIndex: 3, opacity: 0.2} //后边
]
var arrim = [
    {height: 450, left: 0, top: 60},//前边
    {height: 290, left: 0, top: 50},//左边
    {height: 290, left: 0, top: 50},//右边
    {height: 290, left: 0, top: 50},//后边
]
var arrimm = [
    {height: 570, right: 0, top: 0},//前边
    {height: 400, right: 0, top: 0},//左边
    {height: 400, right: 0, top: 0},//右边
    {height: 400, right: 0, top: 0},//后边
]
var li1 = my$("pic").children[0].children[0];
var li2 = my$("pic").children[0].children[1];
var li3 = my$("pic").children[0].children[2];
var li4 = my$("pic").children[0].children[3];

//点击li2事件
li2.onclick = function () {
    //li2转到前边
    animate(li2, arrli[0]);
    animate(li2.children[0], arrim[0]);
    animate(li2.children[1], arrimm[0]);
    //li4转到左边
    animate(li4, arrli[1]);
    animate(li4.children[0], arrim[1]);
    animate(li4.children[1], arrimm[1]);
    //li1转到右边
    animate(li1, arrli[2]);
    animate(li1.children[0], arrim[2]);
    animate(li1.children[1], arrimm[2]);
    //li3转到后边
    animate(li3, arrli[3]);
    animate(li3.children[0], arrim[3]);
    animate(li3.children[1], arrimm[3]);
}
//点击li4事件
li4.onclick = function () {
    //li4转到前边
    animate(li4, arrli[0]);
    animate(li4.children[0], arrim[0]);
    animate(li4.children[1], arrimm[0]);
    //li3转到左边
    animate(li3, arrli[1]);
    animate(li3.children[0], arrim[1]);
    animate(li3.children[1], arrimm[1]);
    //li2转到右边
    animate(li2, arrli[2]);
    animate(li2.children[0], arrim[2]);
    animate(li2.children[1], arrimm[2]);
    //li1转到后边
    animate(li1, arrli[3]);
    animate(li1.children[0], arrim[3]);
    animate(li1.children[1], arrimm[3]);

}
//点击li3事件
li3.onclick = function () {
    //li3转到前边
    animate(li3, arrli[0]);
    animate(li3.children[0], arrim[0]);
    animate(li3.children[1], arrimm[0]);
    //li1转到左边
    animate(li1, arrli[1]);
    animate(li1.children[0], arrim[1]);
    animate(li1.children[1], arrimm[1]);
    //li4转到右边
    animate(li4, arrli[2]);
    animate(li4.children[0], arrim[2]);
    animate(li4.children[1], arrimm[2]);
    //li2转到后边
    animate(li2, arrli[3]);
    animate(li2.children[0], arrim[3]);
    animate(li2.children[1], arrimm[3]);
}
//点击li1事件
li1.onclick = function () {
    //li1转到前边
    animate(li1, arrli[0]);
    animate(li1.children[0], arrim[0]);
    animate(li1.children[1], arrimm[0]);
    //li2转到左边
    animate(li2, arrli[1]);
    animate(li2.children[0], arrim[1]);
    animate(li2.children[1], arrimm[1]);
    //li3转到右边
    animate(li3, arrli[2]);
    animate(li3.children[0], arrim[2]);
    animate(li3.children[1], arrimm[2]);
    //li4转到后边
    animate(li4, arrli[3]);
    animate(li4.children[0], arrim[3]);
    animate(li4.children[1], arrimm[3]);
}

