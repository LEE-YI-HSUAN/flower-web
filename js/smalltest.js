 $(document).ready(function () {
     //目前的問題
     var qas_num = 0;
     var all_question = [
         {
             num: "Q1",
             text: "以下保存鮮花方法哪些正確？（複選）",
             Q1: "將鮮花根部斜剪再放入花瓶。",
             Q2: "浸在水裡的葉子要摘掉。",
             Q3: "加一點啤酒在花瓶裡。",
             A1: "鮮花的根部斜剪，吸水的部位比較大，能吸收更多水分。",
             A2: "一定要把浸在水裡的葉子摘掉，否則葉子會爛掉。",
             A3: "插著鮮花的花瓶裡，加一點啤酒可使花的保鮮期延長，因為啤酒含有乙醇，能使花的切口消毒防腐。",
             A1_TF: "img/right.png",
             A2_TF: "img/right.png",
             A3_TF: "img/right.png"
                },
         {
             num: "Q2",
             text: "以下關於乾燥花的敘述哪些正確？（複選）",
             Q1: "乾燥花擺久了顏色會變深。",
             Q2: "避免潮溼及碰到水，可以保存較久。",
             Q3: "乾燥花在潮濕的氣候比較好保存。",
             A1: "沒錯，這是正常的喔。若希望花朵的原色保持較久一點，可以減少陽光直接照射的機會。",
             A2: "避免潮溼、碰到水及陽光直射，可以讓乾燥花保存更久。",
             A3: "不是喔，要在乾燥的氣候比較好保存，潮濕的氣候較不易保存。",
             A1_TF: "img/right.png",
             A2_TF: "img/right.png",
             A3_TF: "img/wrong.png"
                },
         {
             num: "Q3",
             text: "乾燥花大約可以保存多久？",
             Q1: "1-2個月",
             Q2: "2-4個月",
             Q3: "3-6個月",
             A1: "沒這麼短啦。",
             A2: "還可以保存更久喔。",
             A3: "沒錯，乾燥花基本上可以保存3-6個月喔。",
             A1_TF: "img/wrong.png",
             A2_TF: "img/wrong.png",
             A3_TF: "img/right.png"
                },
         {
             num: "Q4",
             text: "將玫瑰鮮花做成乾燥花的步驟哪些正確（複選）？",
             Q1: "選擇完全開花的玫瑰花。",
             Q2: "放在陽光不會直射的通風處曬乾。",
             Q3: "約7-11天花朵就會自然風乾。",
             A1: "千萬不要選擇完全燦開的玫瑰花，否則在乾燥的過程中，花瓣很容易脫落。玫瑰花在五分開含苞半放時，是最適合做乾燥花的時機。",
             A2: "這是正確的。",
             A3: "這是正確的。",
             A1_TF: "img/wrong.png",
             A2_TF: "img/right.png",
             A3_TF: "img/right.png"
                },
         {
             num: "Q5",
             text: "以下哪個是希臘神話中掌管美麗花朵的花神？",
             Q1: "克洛里斯(Chloris)",
             Q2: "維納斯(Venus)",
             Q3: "雅典娜(Minerva)",
             A1: "克洛里斯是代表春天、花卉和自然女神。",
             A2: "維納斯是代表愛、興趣、美麗、誘惑以及樂趣的女神。",
             A3: "雅典娜代表智慧、戰爭、戰略、戰鬥、手工業和理由的女神。",
             A1_TF: "img/right.png",
             A2_TF: "img/wrong.png",
             A3_TF: "img/wrong.png"
                }
            ];
     //顯示問題(一次一題)
     var qas = function () {
         var i;
         for (i = 0; i < all_question.length; i++) {
             if (i == qas_num)
                 break;
         }

         var $cw = $('<div id="qes_item"><div class="qes"><div class="qes_num"></div><div class="qes_text"></div></div><div><div class="op op1"></div><div class="op2 op"></div><div class="op3 op"></div></div><div class="ans"><img id="ans_img"><div class="ans_text"></div></div><button id="qus_next">下一題</button></div>');

         $cw.find('.qes_num').text(all_question[i].num);
         $cw.find('.qes_text').text(all_question[i].text);
         $cw.find('.op1').text(all_question[i].Q1);
         $cw.find('.op2').text(all_question[i].Q2);
         $cw.find('.op3').text(all_question[i].Q3);

         $('#qes_win').append($cw);
         $('.ans').hide();
     };
     qas();
     
     
     $('#qes_win').mousemove(function () {
         var op1 = $('.op1'),
             op2 = $('.op2'),
             op3 = $('.op3');
         //選項的控制
         op1.mousemove(function () {
             op1.css({
                 boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.15)',
                 cursor: 'pointer'
             });
         });
         op1.mouseout(function () {
             op1.css({
                 boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.15)'
             });
         });
         op1.click(function () {
             op1.css({
                 border: '2px solid black'
             });
             op2.css({
                 border: '1px solid gray'
             });
             op3.css({
                 border: '1px solid gray'
             });

             $('#ans_img').attr('src', all_question[qas_num].A1_TF);
             $('.ans_text').text(all_question[qas_num].A1);
             $('.ans').slideDown(400);
         });
         op2.mousemove(function () {
             op2.css({
                 boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.15)',
                 cursor: 'pointer'
             });
         });
         op2.mouseout(function () {
             op2.css({
                 boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.15)'
             });
         });
         op2.click(function () {
             op2.css({
                 border: '2px solid black'
             });
             op1.css({
                 border: '1px solid gray'
             });
             op3.css({
                 border: '1px solid gray'
             });


             $('#ans_img').attr('src', all_question[qas_num].A2_TF);
             $('.ans_text').text(all_question[qas_num].A2);
             $('.ans').slideDown(400);
         });
         op3.mousemove(function () {
             op3.css({
                 boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.15)',
                 cursor: 'pointer'
             });
         });
         op3.mouseout(function () {
             op3.css({
                 boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.15)'
             });
         });
         op3.click(function () {
             op3.css({
                 border: '2px solid black'
             });
             op2.css({
                 border: '1px solid gray'
             });
             op1.css({
                 border: '1px solid gray'
             });

             $('#ans_img').attr('src', all_question[qas_num].A3_TF);
             $('.ans_text').text(all_question[qas_num].A3);
             $('.ans').slideDown(400);
         });
     });
     //控制下一題
     //題目是否要改變
     var num_sum = true;
     $('#qes_win').click(function () {
         num_sum = true;
         $('#qus_next').click(function () {
             $('#qes_item').remove();
             if (num_sum == true) {
                 if (qas_num >= all_question.length - 1)
                     qas_num = 0;
                 else
                     qas_num++;
                 num_sum = false;
             }
             qas();
         });
     });

 });