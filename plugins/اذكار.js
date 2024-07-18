import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'

//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let pp = './menu1.jpg'
let str = `
*‏﴿ وَاذْكُر ربَّكَ إِذَا نَسِيتَ ﴾*

*‏- سُبحان الله* 
*‏- الحمدلله*
*‏- الله أكبر*
*‏- أستغفر الله*
*‏- لا إله الا الله*
*‏- لاحول ولا قوة إلا بالله*
*‏- سُبحان الله وبحمده*
*‏- سُبحان الله العظيم*
*‏- اللهم صلِّ وسلِّم على نبيِّنا محمَّد*
`
  const e = [
    "💞",
    "🌄",
    "🕋",
      ]
  const emoji2 =
        e[Math.floor(Math.random() * e.length)]
  
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, )
m.react(emoji2);

}
handler.customPrefix = /^(اذكار|الاذكار)$/i
handler.command = new RegExp
export default handler