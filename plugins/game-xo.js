import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `*لــم يــنــتـهي الــجـيم بــعد !*\n*اكــتـب : ${usedPrefix} surrender لأنــهـاء الــجـيم !*`
    if (!text) throw `*اكــتب شـيـئا مــميـز !*`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('*حــسـناً، وجــدنــا الــروم !*')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
*⟐─── ◟ ─── ☁️ ─── ◝ ───⟐*
*انــت الـلاعــب الأول ! @${room.game.currentTurn.split('@')[0]}* 
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
*⟐─── ◟ ─── ☁️ ─── ◝ ───⟐*

*┇ الــشـرح*
*┇ اصــنـع ثــلاث صــفـوف عــمودــية او افــقـيـة او انـــحرافـي*
*┇ لـلانــسـحـاب اكــتب : surrender !*
`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str, m, {
            mentions: conn.parseMention(str)
        })
        await conn.reply(room.o, str, m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
     conn.reply(m.chat, `*┇  حسنا! تحتاج الان لشخص اخر ليلعب معك اكتب .اكس او   ليتم اضافتك في الجوله الحاليه!*
     
*┇ ${usedPrefix + command} ${text}*`, m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <tag number>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'اكس', 'xo']

export default handler
