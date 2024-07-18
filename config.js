import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//Number of owners
global.owner = [
  ['', '', true],
  ['967713659607', '𝕳𝖎𝖙𝖑𝖊𝖗', true],
] 

// Mods
global.mods = ['201206178781', '201223089789'] 
global.prems = ['201206178781', '201223089789']

// Sticker WM
global.ownername = '𝕳𝖎𝖙𝖑𝖊𝖗'
global.botname = '- 𝕋𝕖𝕟𝕘𝕖𝕟 𝔹𝕠𝕥™ 🍬⚡'
global.premium = 'true'
global.packname = '- 𝕋𝕖𝕟𝕘𝕖𝕟 𝔹𝕠𝕥™ 🍬⚡' 
global.author = 'صل عــلى الــنبي' 
global.darco_wa = 'https://chat.whatsapp.com/Har7Z8RPqDO0jZP2FeRApN'


global.APIs = {
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Fun
global.wait = '*⌛ انـــتـظر ▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '😊'
global.done = '🍁'
global.error = '❌' 
global.xmoji = '☘️' 

global.multiplier = 69 
global.maxwarn = '3' // maxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
