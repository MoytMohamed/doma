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
let pp = './menu5.jpg'
let str = `
*موقع مطوري © ❗*
https://ahmed-senan-website.netlify.app
`
 m.react('🥷🏻')
  
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, )


}
handler.customPrefix = /^(دوما من صنعك|المطور)$/i
handler.command = new RegExp
export default handler


