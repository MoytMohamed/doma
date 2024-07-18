import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let pp = './menu2.jpg'
let str = `
*↫❍  الـوقـت : ${wib}*
*↫❍  الـتاريـخ : ${date}*

*╗━═━━═✦•⊰☁️ ⊱•✦═━═━━╔*

  *⋄ اســم الــبــوت : دومـــا* ㊝
  *⋄ الــمـطــور : Mike  ⎷*
  *⋄ عــدد الأوامــر : ♾️*

*¦ ملاحظة❗*
*اكتب الاوامر بالحرف الواحد ليستجيب البوت ¦*

*❃━═━═✦•〘☁️〙•✦═━═━❃*
*╏🕹️↭╏↜اذكار*
*╏🕹️↭╏↜دوما اغاني*
*╏🕹️↭╏↜دوما رقم عشوائي*
*╏🕹️↭╏↜دوما زوجني*
*╏🕹️↭╏↜دوما*
*╏🕹️↭╏↜دوما ارسل صورته*
*╏🕹️↭╏↜دوما عطني سلاح*
*╏🕹️↭╏↜دوما احبك*
*╏🕹️↭╏↜دوما اكرهك*
*╏🕹️↭╏↜دوما سلك له*
*╏🕹️↭╏↜دوما كم تاريخ اليوم*
*╏🕹️↭╏↜دوما ابكي له*
*╏🕹️↭╏↜دوما تحبني*
*╏🕹️↭╏↜دوما تتزوجني*
*╏🕹️↭╏↜دوما انت غبي*
*╏🕹️↭╏↜دوما انت ذكي*
*╏🕹️↭╏↜دوما انت افضل بوت*
*╏🕹️↭╏↜دوما من صنعك*
*╏🕹️↭╏↜دوما الو*
*╏🕹️↭╏↜السلام عليكم*
*╏🕹️↭╏↜دوما وينك*
*╏🕹️↭╏↜دوما كيفك*
*╏🕹️↭╏↜دوما من عمك*
*╏🕹️↭╏↜دوما انت بوت*
*╏🕹️↭╏↜دوما انت انسان*
*╏🕹️↭╏↜دوما انت رجال*
*╏🕹️↭╏↜دوما افزع لي*
*╏🕹️↭╏↜دوما تبا لك*
*╏🕹️↭╏↜دوما نكته*
*╏🕹️↭╏↜دوما سبام*
*╏🕹️↭╏↜جني*
*╏🕹️↭╏↜باص الحب*
*╏🕹️↭╏↜دوما عطني شي*
*╏🕹️↭╏↜دوما ادعي له*
*╏🕹️↭╏↜دوما ادعي عليه*
*╏🕹️↭╏↜دوما ادعي لي*
*╏🕹️↭╏↜دوما انت اوتاكو؟*
*╏🕹️↭╏↜دوما سولف معه*
*╏🕹️↭╏↜دوما العب معه*
*╏🕹️↭╏↜دوما اسكت*
*╏🕹️↭╏↜تسوق امها انت صح؟*
*╏🕹️↭╏↜دوما انا عمك*
*╏🕹️↭╏↜دوما سكته*
*╏🕹️↭╏↜منور*
*╏🕹️↭╏↜باي*
*╏🕹️↭╏↜شكرا*
*╏🕹️↭╏↜هل استطيع سرقتك لقروبي*
*╏🕹️↭╏↜لا*
*╏🕹️↭╏↜غبي*
*╏🕹️↭╏↜من انت*
*╏🕹️↭╏↜وش اسمك*
*╏🕹️↭╏↜دوما كم عمرك*
*╏🕹️↭╏↜اتفق*
*╏🕹️↭╏↜كفو*
*╏🕹️↭╏↜يزينك*
*╏🕹️↭╏↜دوما اقصف جبهته*
*╏🕹️↭╏↜مين زوجتك*
*╏🕹️↭╏↜ميمز عشوائي*
*╏🕹️↭╏↜اسئله*
*❃━═━═✦•〘☁️〙•✦═━═━❃*

*⦅ أوامـــر ╏👨🏻‍💻╏ الادمــن ⦆*

*╏👨🏻‍💻↭╏『 .ضيف*
*╏👨🏻‍💻↭╏『 .طرد*
*╏👨🏻‍💻↭╏ 『 .قروب قفل / فتح* 
*╏👨🏻‍💻↭╏『 .ترقيه* 
*❃━═━═✦•〘☁️〙•✦═━═━❃*

*⦅ أوامـــر ╏♻️╏ الـتحويل ⦆*

*╏♻️↭╏『لتحويل الصوره إلى ملصق اكتب (س)*

*❃━═━═✦•〘☁️〙•✦═━═━❃*

*⦅ أوامـــر ╏🔍╏ الـبحث ⦆*

*╏🔍↭╏『(( .بحث )) الامر شغال مع منصه يوتيوب فقط  .*

*❃━═━═✦•〘☁️〙•✦═━═━❃*

*⦅ أوامـــر ╏📥╏ الـتنزيل من يوتيوب ⦆*

*╏📥↭╏『لتنزيل اغنيه اكتب ((.اغنيه يليها الرابط))*

*╏📥↭╏『لتنزيل فيديو اكتب ((.فيديو يليها الرابط))*

*⚠️ !*
*- عزيزي فضلا يرجى عدم تنزيل فيديوهات مساحتها 40 ميجا بايت فأكثر*
*❃━═━═✦•〘☁️〙•✦═━═━❃*

*- انتهت اوامر البوت دوما* 🤖✨
*- البوت قيد التطوير* ⏳. 
*- عندك إضافات تبي تضيفها؟*
*تكلم مع المطور 🗣️*
https://wa.me/+967713659607

*╝━═━═✦•⊰☁️⊱•✦━═━━╚*

*شكرا لدعم البوت*

*╝━═━═✦•⊰☁️⊱•✦━═━━╚*

 *قوانين البوت*
✾ *يمنع سب البوت*
✾ *يمنع التنمر على البوت*
✾ *عدم الاسبام*
*! عند مخالفة قانون الاسبام يخرج البوت*

*╝━═━═✦•⊰☁️⊱•✦━═━━╚*
`
 m.react('🪽')
  
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, )


}
handler.customPrefix = /^(الاوامر|اوامر)$/i
handler.command = new RegExp
export default handler


