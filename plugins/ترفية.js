let handler = m => m;  

 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^دوما اغاني$/i.test(m.text)) { 
     responses = [ 
 '*استغفر الله 🗿📿*',
     ]; 
} else if (/^دوما رقم عشوائي|رقم عشوائي$/i.test(m.text)) { 
     responses = [ 
       '1',
       '2',
       '3',
       '4',
       '5',
       '6',
       '7',
       '8',
       '9',
       '10',
       '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
       '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
       '31',
          '32',
          '33',
          '34',
          '35',
          '36',
          '37',
          '38',
          '39',
          '40',
       '41',
          '42',
          '43',
          '44',
          '45',
          '46',
          '47',
          '48',
          '49',
          '50',
       '51',
          '52',
          '53',
          '54',
          '55',
          '56',
          '57',
          '58',
          '59',
          '60',
       '61',
          '62',
          '63',
          '64',
          '65',
          '66',
          '67',
          '68',
          '69',
          '70',
       '71',
          '72',
          '73',
          '74',
          '75',
          '76',
          '77',
          '78',
          '79',
          '80',
          '81',
          '82',
          '83',
          '84',
          '85',
          '86',
          '87',
          '88',
          '89',
          '90',
          '91',
          '92',
          '93',
          '94',
          '95',
          '96',
          '97',
          '98',
          '99',
          
       
     ]; 
   }else if (/^دوما زوجني$/i.test(m.text)) { 
     responses = [       
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏زيرو تو╏ 🐸🎀*',       
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏ساكورا ام جبهه╏ 🐸🎀*',       
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏ميكاسا╏ 🐸🎀*',       
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏ارمين╏ 🐦🗿*',      
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏نامي╏ 🐸🎀*',   
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏لوسي╏ 🐸🎀*',       
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏ايرزا╏ 🐸🎀*',
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏هانجي╏ 🐸🎀*',
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏هيناتا هيوجا╏ 🐸🎀*',
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏نيزكو╏ 🐸🎀*',
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏هاشيرا الحب╏ 😩💗*',
     '*🎙️↭ زوجتك المستقبليه هي↓       ╏شيكيموري╏ 🐸🎀*',
     
  ];
     }else if (/^دوما$/i.test(m.text)) { 
      responses = [ 
     '*هلا يحب*',
       '*شتبي؟*',
       '*خير؟*',

   ];
      }else if (/^دوما ارسل صورته$/i.test(m.text)) { 
      responses = [ 
     '*بعطيك صوره محدده تحطها*',

   ];
      }else if (/^دوما عطني سلاح$/i.test(m.text)) { 
      responses = [ 
     '*خذ 🪓*',
        '*خذ🔪*',
        '*خذ🩴*',

   ];
      }else if (/^دوما احبك$/i.test(m.text)) { 
      responses = [ 
     '*ليش؟ 🗿*',
        '*وانا اكرهك*',

   ];
      }else if (/^دوما اكرهك$/i.test(m.text)) { 
      responses = [ 
     '*وانا بعد !*',

   ];
      }else if (/^دوما سلك له$/i.test(m.text)) { 
      responses = [ 
     '*هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه*',

   ];
      }else if (/^دوما ابكي له$/i.test(m.text)) { 
          responses = [ 
         '*اععععععععععععع*',

       ];
          }else if (/^دوما تحبني$/i.test(m.text)) { 
      responses = [ 
     '*اكيد*',
        '*لا 🗿*',
        '*يمكن*',

   ];
      }else if (/^دوما تتزوجني$/i.test(m.text)) { 
                                responses = [ 
                               '*كيف بتزوجك وانا ذكاء اصطناعي ياحمار؟*',

                             ];
                                }else if (/^دوما انت غبي$/i.test(m.text)) { 
      responses = [ 
     '*رأيك حطه بجيبك.*',

   ];
      }else if (/^دوما انت ذكي$/i.test(m.text)) { 
      responses = [ 
     '*مثلك ✨🐦*',

   ];
      }else if (/^دوما انت بوت$/i.test(m.text)) { 
        responses = [ 
       '🦉✨',

     ];
        }else if (/^دوما الو$/i.test(m.text)) { 
      responses = [ 
     '*؟*',

   ];
      }else if (/^السلام عليكم$/i.test(m.text)) { 
      responses = [ 
     '*وعليكم السلام ورحمه الله وبركاته*',

   ];
      }else if (/^دوما وينك$/i.test(m.text)) { 
      responses = [ 
     '*موجود*',

   ];
      }else if (/^دوما كيفك|كيفك$/i.test(m.text)) { 
                                   responses = [ 
                                  '*الحمدلله بخير وانت*',

                                ];
                                   }else if (/^دوما من عمك|من عمك$/i.test(m.text)) { 
      responses = [ 
     '*مطوري عمي وعمك*',

   ];
      }else if (/^دوما انت بوت$/i.test(m.text)) { 
      responses = [ 
     '*وش تشوف؟ 🗿*',

   ];
      }else if (/^دوما انت انسان$/i.test(m.text)) { 
      responses = [ 
     '*الي تشوفه انت 🗿*',

   ];
      }else if (/^دوما انت رجال$/i.test(m.text)) { 
      responses = [ 
     '*مامليت عينك؟*',

   ];
      }else if (/^دوما افزع لي$/i.test(m.text)) { 
      responses = [ 
     '*احتزم وينهم وربي اهجدهم* ',
     
   ];
      }else if (/^دوما تبا لك$/i.test(m.text)) { 
      responses = [ 
     '🗿',
        

   ];
      }else if (/^دوما نكته$/i.test(m.text)) { 
      responses = [ 
     '*وش شايفني مهرج؟ 🤡*',

   ];
      }else if (/^جني$/i.test(m.text)) { 
      responses = [ 
     '*يرفسك 🐦✨*',

   ];
      }else if (/^باص الحب$/i.test(m.text)) { 
      responses = [ 
    `
╭━ ♥━ ♥━ ♥━ ♥━ ♥
╰╮┏━┳┳┳┓  ┏┳┳┳┳┳┓
┏┻╋━╋┻┻┫  ┣┻┻┻┻┻┫
┗ⓞ━━━ⓞ┻━┻ⓞ━━┻ⓞ━━ⓞ╯`,

   ];
      }else if (/^دوما عطني شي$/i.test(m.text)) { 
      responses = [ 
     '*مثلا؟*',

   ];
      }else if (/^دوما ادعي له$/i.test(m.text)) { 
      responses = [ 
     '*يارب تتزوج 🐧*',

   ];
      }else if (/^دوما ادعي عليه$/i.test(m.text)) { 
      responses = [ 
     '*يارب يعضك كلب*',
     '*يارب تطيح في بير*',
     '*يارب تموت الكراش حقك 🗿*',

   ];
      }else if (/^دوما ادعي لي$/i.test(m.text)) { 
      responses = [ 
     '*ادعي لنفسك 🗿*',

   ];
      }else if (/^دوما انت اوتاكو؟$/i.test(m.text)) { 
      responses = [ 
     '*لا جاي للقروب واسطه*',

   ];
      }else if (/^دوما سولف معه$/i.test(m.text)) { 
      responses = [ 
     '*مشغول 🗿🤌🏻*',

   ];
      }else if (/^دوما العب معه$/i.test(m.text)) { 
      responses = [ 
     '*لــبـدأ جـولـة اكس أو اكتــب 『 .اكس او 』*',

   ];
      }else if (/^دوما حمار$/i.test(m.text)) { 
        responses = [ 
       '*زيك*',
       '*كلزق واسكت 🗿*',

     ];
        }else if (/^تسوق امها انت صح؟$/i.test(m.text)) { 
      responses = [ 
     '*وابوها عند شيء؟*',

   ];
      }else if (/^منور$/i.test(m.text)) { 
      responses = [ 
     '*بنوري الساطع المنعكس من نورك ✨*',

   ];
      }else if (/^باي$/i.test(m.text)) { 
      responses = [ 
     '*تمرجل وقول السلام عليكم*',

   ];
      }else if (/^شكرا$/i.test(m.text)) { 
      responses = [ 
     '*عفوا ✨*',

   ];
      }else if (/^هل استطيع سرقتك لقروبي$/i.test(m.text)) { 
      responses = [ 
     '*لي الشرف اجيك كلم مطوري يضيفيني لقروبك* 🐦✨',

   ];
      }else if (/^لا$/i.test(m.text)) { 
      responses = [ 
     '*من طلب رفضك؟*',
     '*ليشششش لا؟*',
     '*تسوقها بتقبل غصب عنك*',

   ];
      }else if (/^غبي$/i.test(m.text)) { 
      responses = [ 
     '*ماخذ من غبائك*',

   ];
      }else if (/^من انت|دوما من انت$/i.test(m.text)) { 
      responses = [ 
     '*انا بوت صُممت عشان اغير مودك واسولف معك 🦉✨* ',

   ];
      }else if (/^وش اسمك$/i.test(m.text)) { 
      responses = [ 
     '*Tengen Bot  🤖.*',

   ];
      }else if (/^دوما كم عمرك$/i.test(m.text)) { 
      responses = [ 
     '*ألف سنه*',

   ];
      }else if (/^اتفق$/i.test(m.text)) { 
      responses = [ 
     '*اطقع من يتفق*',

   ];
      }else if (/^كفو$/i.test(m.text)) { 
      responses = [ 
     '*كفوك الطيب*',

   ];
      }else if (/^دوما اقصف جبهته$/i.test(m.text)) { 
        responses = [ 
       '*لا مسكين*',

     ];
        }else if (/^مين زوجتك|دوما مين زوجتك$/i.test(m.text)) { 
      responses = [ 
     '*مايخصك 🗿*',

   ];
      }else if (/^يب$/i.test(m.text)) { 
      responses = [ 
     '*تمرجل وقول نعم*',

   ];
      }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
    '*استرجل و قول السلام عليكم*',

   ];
     }else if (/^\.$/i.test(m.text)) { 
      responses = [ 
     '*نقتطين*',

   ];
      }else if (/^صباح الخير$/i.test(m.text)) { 
     responses = [ 
    '*صباح العسل*',
       '*صباح التبن 🗿*',

   ];
     }else if (/^مساء الخير$/i.test(m.text)) { 
     responses = [ 
    '*مساء الورد*',
     '*مساء النور*',

   ];
     }else if (/^دوما انت افضل بوت$/i.test(m.text)) { 
     responses = [ 
    '🦉✨',

   ];
     }else if (/^دوما انا عمك$/i.test(m.text)) { 
     responses = [ 
    '*عم نفسك.*',
     '*كلزق واسكت 🗿*',

   ];
     }else if (/^يزينك$/i.test(m.text)) { 
     responses = [ 
    '*ماخذ من زينك*',

   ];
     }else if (/^انقلع$/i.test(m.text)) { 
     responses = [ 
    '*انقلعت عينك*',

       ];
        }else if (/^نعم$/i.test(m.text)) { 
        responses = [ 
       '*نعامه ترفسك 🐦✨*',

          ];
            }else if (/^كلزق$/i.test(m.text)) { 
            responses = [ 
           '*ما اقدر اكل معك.*',

              ];
                }else if (/^بوت$/i.test(m.text)) { 
                responses = [ 
               '*اسمي دومااا!🗿*',

                  ];
                    }else if (/^بخير$/i.test(m.text)) { 
                    responses = [ 
                   '*دوووم*',
                    
           ];
                        }else if (/^الحمد لله$/i.test(m.text)) { 
                        responses = [ 
                       '*دوووم*',

                          ];
                            }else if (/^كل زق$/i.test(m.text)) { 
                            responses = [ 
                           '*ما اقدر اكل معك.*',

                              ];
                                }else if (/^دوما كل زق$/i.test(m.text)) { 
                                responses = [   '*ما اقدر اكل معك.*',
                                  ];

     
                                    }else if (/^دوما سكته$/i.test(m.text)) { 
                                    responses = [ 
                                   '*سمعت وش قال عمك؟ *',
                                      '*لا وشدخلك فيه خله يسولف*',
                                       
                                    ];
                                      }else if (/^دوما اسكت$/i.test(m.text)) { 
                                        responses = [ 
                                       '*🗿*',
                                          '*تخسي 🗿*',

     ];       
   }

   
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
