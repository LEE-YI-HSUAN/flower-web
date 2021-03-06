$(document).ready(function () {
    //得到本身網址並解碼
    var url = decodeURI(window.location.href);
    //進行切割，將剛剛傳的花名切割出來
    var choice = url.split('?');
    //將title更改
    document.title = choice[1];
    var all_flower = [
        {
            image: "img/rose.jpg",
            name: "玫瑰",
            price: "NT$8 /朵",
            language: "愛情、高貴、愛與美、容光煥發、純潔的愛、美麗的愛情、美好常在",
            life: "大約3-5天",
            place: "日本",
            color1: "紅色",
            color2: "藍色",
            color3: "黃色",
            color4: "粉色",
            color5: "紫色",
            color6: "白色"

                },
        {
            image: "img/Hyacinthus.jpg",
            name: "風信子",
            price: "NT$1290 /盆",
            language: "喜悅、競賽、賭注、遊戲、勝負、悲傷的愛、永遠的懷念",
            life: "第二年可再開花(球莖)",
            place: "荷蘭",
            color1: "藍色",
            color2: "黃色",
            color3: "橘色",
            color4: "白色",
            color5: "紫色",
            color6: "紅色"
                },
        {
            image: "img/Calla.jpg",
            name: "海芋",
            price: "NT$23 /枝",
            language: "雄偉之美、潔淨、青春活力",
            life: "大約5-7天",
            place: "南非",
            color1: "白色",
            color2: "紅色",
            color3: "粉色",
            color4: "黃色",
            color5: "橘色",
            color6: "綠色"
                },
        {
            image: "img/Phalaenopsis.jpg",
            name: "蘭花",
            price: "NT$1290 /盆",
            language: "高雅、賢德、淡泊、友誼、自信",
            life: "大約4-5年",
            place: "台中",
            color1: "白色",
            color2: "紫色",
            color3: "藍色",
            color4: "橘色",
            color5: "黃色",
            color6: "粉色"
                },
        {
            image: "img/Azalea.jpg",
            name: "杜鵑花",
            price: "NT$26 /朵",
            language: "愛的欣喜、節制、節制慾望、永遠屬於你",
            life: "大約3-5天",
            place: "台北",
            color1: "粉色",
            color2: "紅色",
            color3: "紫色",
            color4: "黃色",
            color5: "藍色",
            color6: "橘色"
                },
        {
            image: "img/Camellia_japonica.jpg",
            name: "茶梅花",
            price: "NT$72 /盆",
            language: "清雅、謙讓、理想的愛",
            life: "大約2-3年",
            place: "台中",
            color1: "粉色",
            color2: "紫色",
            color3: "紅色",
            color4: "白色",
            color5: "橘色",
            color6: "藍色"
                },
        {
            image: "img/Camellia.jpg",
            name: "山茶花",
            price: "NT$50 /盆",
            language: "質樸、希望",
            life: "大約2-3年",
            place: "台中",
            color1: "粉色",
            color2: "紅色",
            color3: "綠色",
            color4: "橘色",
            color5: "白色",
            color6: "紫色"
                },
        {
            image: "img/Campanula.jpg",
            name: "風鈴草",
            price: "NT$1290 /枝",
            language: "溫柔的愛",
            life: "大約3-4天",
            place: "中國東北",
            color1: "紫色",
            color2: "黃色",
            color3: "紅色",
            color4: "粉色",
            color5: "藍色",
            color6: "橘色"
                },
        {
            image: "img/Carnation.jpg",
            name: "康乃馨",
            price: "NT$18 /枝",
            language: "母親我愛您、熱情、真情",
            life: "大約7-9天",
            place: "南投",
            color1: "紅色",
            color2: "黃色",
            color3: "藍色",
            color4: "綠色",
            color5: "白色",
            color6: "橘色"
                },
        {
            image: "img/chrysanthemum.jpg",
            name: "菊花",
            price: "NT$400 /盆",
            language: "幽香暗藏，清淨、高潔、我愛你、真情",
            life: "大約3-4年",
            place: "中國長沙",
            color1: "橘色",
            color2: "黃色",
            color3: "粉色",
            color4: "紅色",
            color5: "綠色",
            color6: "藍色"
                },
        {
            image: "img/Daffodils.jpg",
            name: "水仙花",
            price: "NT$330 /盆",
            language: "自我、傲慢、愚笨、代表新的開始",
            life: "大約2-3年",
            place: "福建漳州",
            color1: "黃色",
            color2: "白色",
            color3: "紅色",
            color4: "紫色",
            color5: "藍色",
            color6: "橘色"
                },
        {
            image: "img/Dianthus_flowers.jpg",
            name: "石竹花",
            price: "NT$15 /盆",
            language: "純潔的愛、才能、大膽、女性美",
            life: "大約2-3年",
            place: "中國",
            color1: "粉色",
            color2: "紅色",
            color3: "紫色",
            color4: "藍色",
            color5: "白色",
            color6: "綠色"
                },
        {
            image: "img/Gardenia_jasminoides.jpg",
            name: "梔子花",
            price: "NT$300 /盆",
            language: "永恆的愛，一生守候和喜悅",
            life: "大約2-3年",
            place: "台南",
            color1: "白色",
            color2: "黃色",
            color3: "綠色",
            color4: "藍色",
            color5: "紅色",
            color6: "粉色"
                },
        {
            image: "img/iris.jpg",
            name: "鳶尾",
            price: "NT$50 /株",
            language: "好消息的使者、想念你、優雅的心、使命、愛的使者、熱情、適應力強",
            life: "大約8-10天",
            place: "日本",
            color1: "紫色",
            color2: "紅色",
            color3: "黃色",
            color4: "綠色",
            color5: "白色",
            color6: "藍色"
                },
        {
            image: "img/lavender.jpg",
            name: "薰衣草",
            price: "NT$74 /盆",
            language: "只要用力呼吸，就能看見奇蹟、浪漫、與愛再相遇、等待愛情的奇蹟",
            life: "大約1年",
            place: "葡萄牙",
            color1: "紫色",
            color2: "白色",
            color3: "紅色",
            color4: "分色",
            color5: "藍色",
            color6: "橘色"
                },
        {
            image: "img/Lilac.jpg",
            name: "紫丁香",
            price: "NT$60 /盆",
            language: "回憶、光輝",
            life: "大約1-2年",
            place: "中國遼寧",
            color1: "紫色",
            color2: "藍色",
            color3: "黃色",
            color4: "橘色",
            color5: "粉色",
            color6: "白色"
                },
        {
            image: "img/lily.jpg",
            name: "百合",
            price: "NT$30 /枝",
            language: "順利、心想事成、祝福、高貴、純潔、高雅、財富、榮譽、神聖、百年好合",
            life: "大約10-12天",
            place: "花蓮",
            color1: "白色",
            color2: "黃色",
            color3: "橘色",
            color4: "藍色",
            color5: "綠色",
            color6: "紫色"
                },
        {
            image: "img/manjusaka.jpg",
            name: "曼珠沙華(紅色彼岸花)",
            price: "NT$27 /枝",
            language: "無望的愛、相互思念、分離、傷心、不吉祥、死亡之美",
            life: "大約12-14天",
            place: "日本",
            color1: "紅色",
            color2: "粉色",
            color3: "桃紅色",
            color4: "綠色",
            color5: "白色",
            color6: "紫色"
                },
        {
            image: "img/Morning_Glory.jpg",
            name: "牽牛花",
            price: "NT$17 /盆",
            language: "愛情、冷靜、虛幻",
            life: "大約5-6年",
            place: "高雄",
            color1: "紫色",
            color2: "黃色",
            color3: "紅色",
            color4: "粉色",
            color5: "藍色",
            color6: "綠色"
                },
        {
            image: "img/Paeonia_lactiflora.jpg",
            name: "芍藥",
            price: "NT$112 /盆",
            language: "美麗動人、依依不捨、難捨難分、害羞、思念、嬌艷、情有所鐘、含羞、羞恥心",
            life: "大約2-3年",
            place: "中國浙江",
            color1: "白色",
            color2: "紅色",
            color3: "粉色",
            color4: "藍色",
            color5: "桃紅色",
            color6: "紫色"
                },
        {
            image: "img/Poppy.jpg",
            name: "虞美人",
            price: "NT$97 /盆",
            language: "安慰、遺忘、休息",
            life: "大約1-2年",
            place: "紐西蘭",
            color1: "紅色",
            color2: "白色",
            color3: "黃色",
            color4: "綠色",
            color5: "藍色",
            color6: "粉色"
                },
        {
            image: "img/sunflower-flowers-bright-yellow-colorful.jpg",
            name: "向日葵",
            price: "NT$25 /枝",
            language: "沉默的愛、愛慕、光輝、忠誠",
            life: "大約10-12天",
            place: "俄羅斯",
            color1: "黃色",
            color2: "綠色",
            color3: "藍色",
            color4: "紅色",
            color5: "粉色",
            color6: "白色"
                },
        {
            image: "img/tulip.jpg",
            name: "鬱金香",
            price: "NT$16 /枝",
            language: "愛的表白、榮譽、祝福、永恆",
            life: "大約7天",
            place: "荷蘭",
            color1: "黃色",
            color2: "紅色",
            color3: "粉色",
            color4: "綠色",
            color5: "紫色",
            color6: "橘色"
                },
        {
            image: "img/wild_pansy.jpg",
            name: "三色堇",
            price: "NT$100 /盆",
            language: "沉思，快樂，請思念我",
            life: "大約2年",
            place: "彰化",
            color1: "紫色",
            color2: "橘色",
            color3: "白色",
            color4: "粉色",
            color5: "藍色",
            color6: "綠色"
                },
        {
            image: "img/Gypsophila.jpg",
            name: "滿天星",
            price: "NT$1999 /束",
            language: "關心、純潔、喜悅",
            life: "大約14天",
            place: "嘉義",
            color1: "白色",
            color2: "藍色",
            color3: "綠色",
            color4: "黃色",
            color5: "橘色",
            color6: "紫色"
                },
        {
            image: "img/peony.jpg",
            name: "牡丹花",
            price: "NT$399 /盆",
            language: "圓滿、濃情、富貴、雍容華貴",
            life: "大約3-4年",
            place: "杉林溪",
            color1: "粉色",
            color2: "紅色",
            color3: "綠色",
            color4: "藍色",
            color5: "白色",
            color6: "紫色"
                }
             ];

    //看剛才花名是哪一筆資料
    var flower;
    for (var i = 0; i < all_flower.length; i++) {
        if (choice[1] == all_flower[i].name) {
            flower = i;
        }
    }

    //顯示第flower的購買資料
    var init_flower = function () {

        var $cw1 = $('<div id="flower_img"><img id="flower_imaage"></div><div id="flower_buy_infor"><div id="flower_name"></div><div id="flower_price"></div><div id="flower_buy_num"><p>數量<button type="button" id="flower_subnum">-</button><input id="flower_shownum" type="text" value ="1"><button type="button" id="flower_addnum">+</button></p></div><div id="flower_color_win"><div id="flower_color">顏色</div><div id="all_color"><div id="color1" class="color"></div><div id="color2" class="color"></div><div id="color3" class="color"></div><div id="color4" class="color"></div><div id="color5" class="color"></div><div id="color6" class="color"></div></div></div><div id="flower_cart"><button id ="flower_btncart"><img src="img/cart.png" alt="">加入購物車</button></div></div>');

        $cw1.find('#flower_imaage').attr('src', all_flower[flower].image);
        $cw1.find('#flower_name').text(all_flower[flower].name);
        $cw1.find('#flower_price').text(all_flower[flower].price);
        $cw1.find('#color1').text(all_flower[flower].color1);
        $cw1.find('#color2').text(all_flower[flower].color2);
        $cw1.find('#color3').text(all_flower[flower].color3);
        $cw1.find('#color4').text(all_flower[flower].color4);
        $cw1.find('#color5').text(all_flower[flower].color5);
        $cw1.find('#color6').text(all_flower[flower].color6);

        $('#flower').append($cw1);
    };

    //顯示第flower的詳細資料
    var infor_flower = function () {
        var $cw2 = $('<div id = "flower_item_infor">詳細資訊</div><div id="flower_lan"><div id="flower_language">花語</div><div id="flower_item_language"></div></div><div id="flower_li"><div id="flower_life">保存期限</div><div id="flower_item_life"></div></div><div id="flower_pl"><div id="flower_place">原產地</div><div id="flower_item_palce"></div></div>');

        $cw2.find('#flower_item_language').text(all_flower[flower].language);
        $cw2.find('#flower_item_life').text(all_flower[flower].life);
        $cw2.find('#flower_item_palce').text(all_flower[flower].place);

        $('#flower_infor').append($cw2);
    };

    init_flower();
    infor_flower();

    //進行數量加減
    var sub_num = $('#flower_subnum'),
        add_num = $('#flower_addnum'),
        show_num = $('#flower_shownum');

    sub_num.click(function () {
        var num = show_num.val();
        num = parseInt(num);
        if (num > 0)
            num -= 1;
        document.getElementById("flower_shownum").setAttribute("value", num + "");
    });
    add_num.click(function () {
        var num = show_num.val();
        num = parseInt(num);
        num += 1;
        document.getElementById("flower_shownum").setAttribute("value", num + "");
    });

    //判斷顏色選擇(mouser)
    var color = $('.color'),
        color1 = $('#color1'),
        color2 = $('#color2'),
        color3 = $('#color3'),
        color4 = $('#color4'),
        color5 = $('#color5'),
        color6 = $('#color6')

    color.mousemove(function () {
        color.css({
            cursor: 'pointer'
        });
        color1.mousemove(function () {
            color1.css({
                backgroundColor: 'rgb(255, 252, 242)'
            });
        });
        color1.mouseout(function () {
            color1.css({
                backgroundColor: 'rgba(100,100,130,0.01)'
            });
        });
        color2.mousemove(function () {
            color2.css({
                backgroundColor: 'rgb(255, 252, 242)'
            });
        });
        color2.mouseout(function () {
            color2.css({
                backgroundColor: 'rgba(100,100,130,0.01)'
            });
        });
        color3.mousemove(function () {
            color3.css({
                backgroundColor: 'rgb(255, 252, 242)'
            });
        });
        color3.mouseout(function () {
            color3.css({
                backgroundColor: 'rgba(100,100,130,0.01)'
            });
        });
        color4.mousemove(function () {
            color4.css({
                backgroundColor: 'rgb(255, 252, 242)'
            });
        });
        color4.mouseout(function () {
            color4.css({
                backgroundColor: 'rgba(100,100,130,0.01)'
            });
        });
        color5.mousemove(function () {
            color5.css({
                backgroundColor: 'rgb(255, 252, 242)'
            });
        });
        color5.mouseout(function () {
            color5.css({
                backgroundColor: 'rgba(100,100,130,0.01)'
            });
        });
        color6.mousemove(function () {
            color6.css({
                backgroundColor: 'rgb(255, 252, 242)'
            });
        });
        color6.mouseout(function () {
            color6.css({
                backgroundColor: 'rgba(100,100,130,0.01)'
            });
        });
    });


    //判斷顏色選擇(click)
    color1.click(function () {
        color1.addClass('choice');
        if (color2.hasClass('choice'))
            color2.removeClass('choice');
        if (color3.hasClass('choice'))
            color3.removeClass('choice');
        if (color4.hasClass('choice'))
            color4.removeClass('choice');
        if (color5.hasClass('choice'))
            color5.removeClass('choice');
        if (color6.hasClass('choice'))
            color6.removeClass('choice');
    });

    color2.click(function () {
        color2.addClass('choice');
        if (color1.hasClass('choice'))
            color1.removeClass('choice');
        if (color3.hasClass('choice'))
            color3.removeClass('choice');
        if (color4.hasClass('choice'))
            color4.removeClass('choice');
        if (color5.hasClass('choice'))
            color5.removeClass('choice');
        if (color6.hasClass('choice'))
            color6.removeClass('choice');
    });

    color3.click(function () {
        color3.addClass('choice');
        if (color1.hasClass('choice'))
            color1.removeClass('choice');
        if (color2.hasClass('choice'))
            color2.removeClass('choice');
        if (color4.hasClass('choice'))
            color4.removeClass('choice');
        if (color5.hasClass('choice'))
            color5.removeClass('choice');
        if (color6.hasClass('choice'))
            color6.removeClass('choice');
    });

    color4.click(function () {
        color4.addClass('choice');
        if (color1.hasClass('choice'))
            color1.removeClass('choice');
        if (color3.hasClass('choice'))
            color3.removeClass('choice');
        if (color2.hasClass('choice'))
            color2.removeClass('choice');
        if (color5.hasClass('choice'))
            color5.removeClass('choice');
        if (color6.hasClass('choice'))
            color6.removeClass('choice');
    });

    color5.click(function () {
        color5.addClass('choice');
        if (color1.hasClass('choice'))
            color1.removeClass('choice');
        if (color3.hasClass('choice'))
            color3.removeClass('choice');
        if (color4.hasClass('choice'))
            color4.removeClass('choice');
        if (color2.hasClass('choice'))
            color2.removeClass('choice');
        if (color6.hasClass('choice'))
            color6.removeClass('choice');
    });

    color6.click(function () {

        color6.addClass('choice');
        if (color1.hasClass('choice'))
            color1.removeClass('choice');
        if (color3.hasClass('choice'))
            color3.removeClass('choice');
        if (color4.hasClass('choice'))
            color4.removeClass('choice');
        if (color5.hasClass('choice'))
            color5.removeClass('choice');
        if (color2.hasClass('choice'))
            color2.removeClass('choice');
    });

    //按下加入購物車按鈕
    $('#flower_cart').click(function () {
        //增加第flower筆資料
        var $cart_item = $('<div class="cart_item"><img class="cart_img"><div class="cart_text"></div><div class="cart_n">數量</div><div class="cart_num"></div><div class="cart_c">顏色</div><div class="cart_color"></div><div class="cart_c">價錢</div><div class="cart_price">NT$</div><button class="cart_cancel_item">刪除</button></div>');

        $cart_item.find('.cart_img').attr('src', all_flower[flower].image);
        $cart_item.find('.cart_text').text(all_flower[flower].name);
        $cart_item.find('.cart_num').text($('#flower_shownum').val());

        //判斷選擇哪個顏色，沒有選擇則為第一個顏色
        var c;
        if (color2.hasClass('choice'))
            c = color2.text();
        else if (color3.hasClass('choice'))
            c = color3.text();
        else if (color4.hasClass('choice'))
            c = color4.text();
        else if (color5.hasClass('choice'))
            c = color5.text();
        else if (color6.hasClass('choice'))
            c = color6.text();
        else
            c = color1.text();
        console.log(c);
        $cart_item.find('.cart_color').text(c);

        //計算金額
        var price = all_flower[flower].price.split('/');
        price = price[0].split('$');
        parseInt(price[1]);
        price[1] *= $('#flower_shownum').val();
        console.log(price[1]);
        $cart_item.find('.cart_price').text('NT$' + price[1]);

        $("#cart_win").append($cart_item);

    });
    //一開始購物車隱藏
    $("#cart_win").hide();

    //按下購物車
    $('.cart_click').click(function () {
        $("#cart_win").slideToggle(400);
    });
    $('.cart_click').mousemove(function () {
        $('.cart_click').css({
            cursor: 'pointer'
        })
    })
    //關閉購物車
    $('#cart_close').click(function () {
        $("#cart_win").slideToggle(400);
    });
    $('#cart_close').mousemove(function () {
        $('#cart_close').css({
            cursor: 'pointer',
            background: 'lightgray'
        });
    });
    $('#cart_close').mouseout(function () {
        $('#cart_close').css({
            background: 'whitesmoke'
        });
    });
    //清空購物車
    $('#cart_canel').click(function () {
        $(".cart_item").remove();
    });
    //刪除單筆
    $('#cart_win').click(function () {
        $('.cart_cancel_item').click(function () {
            var $item = $(this).closest('.cart_item');
            var num = parseInt($('.buy_num').text());
            $item.remove();
        });
    });
});