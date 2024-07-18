let handler  = async (m, { conn }) => {
conn.sendFile(m.chat, pickRandom(global.mems), m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.customPrefix = /^(ميمز عشوائي)$/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.mems = [
  
  'https://telegra.ph/file/77bda8f5f59773dfc1632.mp4',
    'https://telegra.ph/file/7b92c674dd447576f2f84.mp4',
    'https://telegra.ph/file/bb80189113f0415ab0c5b.mp4',
    'https://telegra.ph/file/f0f884bd5948b958ead3c.mp4',
    'https://telegra.ph/file/4bc4cb70ae91285f579d0.mp4',
    'https://telegra.ph/file/e8d4d871f85353ecd57c9.mp4',
    'https://telegra.ph/file/df13d3811505a0380c8da.mp4',
]

