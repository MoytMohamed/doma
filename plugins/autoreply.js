//Remove (/*  */) to use this plugin

let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})

  }
handler.customPrefix = /()/i
handler.command = new RegExp

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }


/*m.react = async (text) => {
  // send a reaction to the message
  await conn.sendMessage(m.chat, {
    react: {
      text: text,
      key: m.key
    }
  })
}*/