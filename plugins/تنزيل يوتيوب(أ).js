import { 
  youtubedl,
  youtubedlv2 
} from '@bochilteam/scraper'

var handler = async (m, { conn, args }) => {
if (!args[0]) throw '*ارســل الرابــط !*'
let q = '128kbps'
let v = args[0]

// Ambil info dari video
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH

await	m.react('🎶')

// Tampilkan informasi file beserta thumbnail
const info = `
*⦊─── ── ─ ☁️ ─ ── ───⦉*
*📥╏ الــعـنوان: ${ttl}*
*📥╏ الــمــساحــة: ${size}*
*📥╏ الـــرابــط: ${v}*
*⦊─── ── ─ ☁️ ─ ── ───⦉*`

// Kirim pesan dan file audio ke user
await conn.sendMessage(m.chat, { 
  document: { url: dl_url }, 
  mimetype: 'audio/mpeg', 
  fileName: `${ttl}.mp3`,
  caption: info
}, {quoted: m})
}

// Jika ingin menambahkan tag, ubah code berikut:
handler.tags = ['downloader']
handler.command = /^yta|اغنية|اغنيه$/i
export default handler