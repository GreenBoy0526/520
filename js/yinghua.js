/**
 * IIFE
 */
$(function() {
    $.fn.Cherry_Blossoms=function (params) {
        return this.each(function () {
            //璁剧疆榛樿鍊�
            var defaults={
                ele:'.cherry',//鍒囨崲瀵硅薄
                is_Cherry:true,//鏄惁鐢熸垚妯辫姳
                image_min:10,//鑺辩摚鏈€灏忓搴﹀拰楂樺害
                image_max:50,//鑺辩摚鏈€澶у搴﹀拰楂樺害
                time_min:10000,//鑺辩摚鏈€蹇笅鍧犳椂闂�
                time_max:20000,//鑺辩摚鏈€鎱笅鍧犳椂闂�
                interval:500//鑺辩摚鐢熸垚鏃堕棿闂撮殧
            };
            //瀹氫箟榛樿鍙傛暟锛屽叾涓嫢鍦╤tml椤甸潰璁剧疆浜唒aram鏄紝杩欓噷鐨刾arams浼氭浛鎹efaults
            var par = $.extend({}, defaults, params);
            /**
             * [m,n]闅忔満鏁板嚱鏁�
             */
            function randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            }

            /**
             * 鐢熸垚妯辫姳鑺辩摚
             */
            if(par.is_Cherry) {
                setInterval(function () {
                    var time;//涓嬭惤鐨勬寔缁椂闂达紝鍙栭殢鏈烘暟
                    var image_daxiao;//鑺辩摚澶у皬鍙栭殢鏈烘暟
                    var margin_left;//鑺辩摚鎵€鍦ㄤ綅缃紝鍙栭殢鏈烘暟
                    margin_left = randomNum(5, 100);
                    time = randomNum(par.time_min, par.time_max);
                    image_daxiao = randomNum(par.image_min, par.image_max);
                    $('#yinghua:last-child').after('<img id="yinghua" src="img/yinghua.png" alt="">');
                    $('#yinghua:last-child').css({
                        'margin-left': margin_left + '%',
                        'width': image_daxiao + 'px',
                        'height': image_daxiao + 'px'
                    });
                    $('#yinghua:last-child').animate({
                            left: -15 + '%',
                            top: 100 + '%',
                            deg: -540
                        },
                        {
                            step: function (deg) {
                                //console.log(deg);
                                $(this).css({"transform": "rotate3d(1,.2,0," + deg + "deg)"});
                            },
                            duration: time
                        }, time);
                    setTimeout(function () {
                        $('#yinghua:first-child').remove();
                    }, time-5000);
                }, par.interval);
            }
        })
    }
});

