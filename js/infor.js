$(document).ready(function () {
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
    //顯示所有資料
    var init_flower = function () {
        for (var i = 0; i < all_flower.length; i++) {
            var $cw = $('<div class="produce_item_win"><div class="produce_look">look<div class="look_item"></div></div><img class="produce_img"><div class="produce_text"></div><div class="produce_price"></div><img class="produce_buy" src="img/cart.png"></div>');

            $cw.find('.produce_img').attr('src', all_flower[i].image);
            $cw.find('.produce_text').text(all_flower[i].name);
            $cw.find('.produce_price').text(all_flower[i].price);
            $cw.find('.look_item').text(all_flower[i].name);

            $('#produce_win').append($cw);
        }
    };
    //預覽資料
    var look_flower = function (s) {
        //判斷哪筆資料
        var i;
        for (i = 0; i < all_flower.length; i++) {
            if (all_flower[i].name == s)
                break;
        }

        var $cw = $('<div id="look"><p id="close">X</p><div id="look_img"><img id ="look_image"></div><div id="look_buy_infor"><div id="look_name"></div><div id="look_price"></div><div id="look_infor"><div id="look_item_infor">詳細資訊</div><div id="look_lan"><div id="look_language">花語</div><div id="look_item_language"></div></div><div id="look_li"><div id="look_life">保存期限</div><div id="look_item_life"></div></div><div id="look_pl"><div id="look_place">原產地</div><div id="look_item_palce"></div></div></div><div id="look_cart"><button id="look_btncart"><img src="img/cart.png" alt="">前往購買</button></div></div></div>');

        $cw.find('#look_image').attr('src', all_flower[i].image);
        $cw.find('#look_name').text(all_flower[i].name);
        $cw.find('#look_price').text(all_flower[i].price);
        $cw.find('#look_item_language').text(all_flower[i].language);
        $cw.find('#look_item_life').text(all_flower[i].life);
        $cw.find('#look_item_palce').text(all_flower[i].place);

        $('#over_look').append($cw);
    };
    init_flower();

    //是否跳轉網頁   
    var to = true;
    //搜尋個數
    var searchNum = 0;
    var cart = $('.cart'),
        cart_img = cart.find('img'),
        produce = $('.produce_item_win'),
        production_cart = $('.produce_buy'),
        look = $('.produce_look'),
        search = $('#sear');

    look.hide();
    search.hide();
    //預覽一開始隱藏(沒有資料)
    $('.look_item').hide();
    //購物車的圖
    cart.mouseover(function () {
        //console.log("mouseover");
        cart_img.css({
            opacity: '0.7'
        });
        $('.buy_num').css({
            color: 'black'
        });
    });
    cart.mouseout(function () {
        cart_img.css({
            opacity: '1'
        });
        $('.buy_num').css({
            color: 'yellow'
        });
    });

    //每一個商品
    produce.mouseover(function () {
        $(this).css({
            boxShadow: '1px 2px 10px dimgray'
        });
        $(this).find(look).show();
        look.mousemove(function () {
            look.css({
                cursor: 'pointer'
            });

        });
    });
    produce.mouseout(function () {
        $(this).css({
            boxShadow: '0px 0px 0px dimgray'
        });
        look.hide();
    });

    //商品中的購物車小圖
    production_cart.mousemove(function () {
        production_cart.css({
            cursor: 'pointer'
        });
    });
    production_cart.click(function () {
        to = false;
    });

    //按下預覽
    look.click(function () {
        fname = $(this).find('.look_item').text();
        look_flower(fname);

        to = false;
        var close = $('#close'),
            overlook = $('#over_look');

        overlook.show();
        //關閉預覽
        close.mousemove(function () {
            close.css({
                cursor: 'pointer',
                backgroundColor: 'lightgray'
            });
        });
        close.mouseout(function () {
            close.css({
                backgroundColor: 'whitesmoke'
            });

        });
        close.click(function () {
            $('#look').remove();
            to = true;
            // window.location.assign("infor.html");
        });
        //前往單獨商品頁面
        $('#look_btncart').click(function () {
            var choice_flower = $('#look_name').text();
            window.location.assign("flower_1.html?" + choice_flower);
        });
    });

    //前往單獨商品頁面 
    produce.click(function () {
        console.log(to);
        if (to != false) {
            var choice_flower = $(this).find('.produce_text').text();
            window.location.assign("flower_1.html?" + choice_flower);
        } else {
            to = true;
        }
    });

    //搜尋
    var search_flower = function (key) {
        var $allcw = $('.produce_item_win');
        $allcw.hide();
        var num = 0;
        for (var i = 0; i < all_flower.length; i++) {
            if (all_flower[i].name.indexOf(key) != -1 || all_flower[i].language.indexOf(key) != -1 ||
                all_flower[i].color1.indexOf(key) != -1 || all_flower[i].color2.indexOf(key) != -1 ||
                all_flower[i].color3.indexOf(key) != -1 || all_flower[i].color4.indexOf(key) != -1 ||
                all_flower[i].color5.indexOf(key) != -1 || all_flower[i].color6.indexOf(key) != -1) {
                $allcw.eq(i).show();
                num++;
            }
        }
        if (num == 0) {
            $('#no_infor').text("抱歉，查無資料！");
        } else {
            $('#no_infor').text("共查到" + num + "筆資料");
        }
    };

    var search_click = $('.fa-search'),
        search = $('#search'),
        search_val = $('#search_inputval'),
        search_submit = $('#search_btnsubmit');

    $('#search_input').hide();
    search.hide();
    search_click.mousemove(function () {
        search_click.css({
            cursor: 'pointer'
        });
    });
    //按下搜尋
    search_click.click(function () {
        $('#no_infor').text("");
        $('#search_input').slideToggle(400);
        search.slideToggle(400);

        search_val.click(function () {
            this.style.color = "black";
            this.value = "";
        });

        search_submit.click(function () {
            var s = document.getElementById('search_inputval');
            //執行搜尋並傳輸入的值
            search_flower(s.value);
            $('#search_input').hide();
            search.hide();
        });

    });
    //加入購物車
    $('.produce_buy').click(function () {
        var num = parseInt($('.buy_num').text());
        num++;
        $('.buy_num').text(num + "");
        //console.log(num);
        var $item = $(this).closest('.produce_item_win');
        /*往下找 attr存到哪*/
        var src = $item.find('.produce_img').attr('src');
        var text = $item.find('.produce_text').text();
        var price = $item.find('.produce_price').text();

        var item_obj = {
            src: src,
            text: text,
            price: price
        };

        var $cart_item = $('<div class="cart_item"><img class="cart_img"><div class="cart_text"></div><div class="cart_n">數量</div><div class="cart_num">1</div><div class="cart_c">顏色</div><div class="cart_color"></div><div class="cart_c">價錢</div><div class="cart_price">NT$</div><button class="cart_cancel_item">刪除</button></div>');

        $cart_item.find('.cart_img').attr('src', item_obj.src);
        $cart_item.find('.cart_text').text(item_obj.text);

        for (var i = 0; i < all_flower.length; i++) {
            if (all_flower[i].name == item_obj.text) {
                $cart_item.find('.cart_color').text(all_flower[i].color1);
                break;
            }
        }
        var price = item_obj.price.split('/');
        $cart_item.find('.cart_price').text(price[0]);

        $("#cart_win").append($cart_item);

    });
    $("#cart_win").hide();

    $('.cart_click').click(function () {
        $("#cart_win").slideToggle(400);
    });
    $('.cart_click').mousemove(function () {
        $('.cart_click').css({
            cursor: 'pointer'
        })
    })
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
    $('#cart_canel').click(function () {
        $('.buy_num').text("0");
        $(".cart_item").remove();
    });
    //刪除單筆
    var num_sub = true;
    $('#cart_win').click(function () {
        num_sub = true;
        $('.cart_cancel_item').click(function () {
            var $item = $(this).closest('.cart_item');
            if (num_sub == true) {
                var num = parseInt($('.buy_num').text());
                // console.log(num);
                num -= 1;
                $('.buy_num').text(num + "");
                num_sub = false;
            }
            $item.remove();
        });
    });
});