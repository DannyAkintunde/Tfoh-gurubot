let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.fromMe
    ? conn.user.jid
    : m.sender;
  if (!(who in global.db.data.users))
    throw `✳️ The user is not found in my database`;

  let pp = "./Assets/Gurulogo.jpg";
  let more = String.fromCharCode(8206);
  let readMore = more.repeat(850);

  let lkr;
  switch (command) {
    case "list":
      lkr =
        "*Get ready for the ride, here are your ticket options:*\n\n" +
        "🤖 *" +
        usedPrefix +
        "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
        "👑 *" +
        usedPrefix +
        "ownermenu* - The sacred scroll only for the chosen one. Yep, that's you, Boss!\n\n" +
        "🧑‍🤝‍🧑 *" +
        usedPrefix +
        "groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n";
      break;

    case "botmenu":
      lkr = `❀° ┄──•••───╮
          𝘽𝙊𝙏 𝙈𝙀𝙉𝙐  
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲👑 _${usedPrefix}gita_
   ⎪⌲👑 _${usedPrefix}ping_
   ⎪⌲👑 _${usedPrefix}uptime_
   ⎪⌲👑 _${usedPrefix}bot_
   ⎪⌲👑 _${usedPrefix}owner_
   ⎪⌲👑 _${usedPrefix}script_
   ⎪⌲👑 _${usedPrefix}runtime_
   ⎪⌲👑 _${usedPrefix}infobot_
   ⎪⌲👑 _${usedPrefix}donate_
   ⎪⌲👑 _${usedPrefix}groups_
   ⎪⌲👑 _${usedPrefix}blocklist_
   ⎪⌲👑 _${usedPrefix}listprem_
   ⎪⌲👑    Guru
   ┗━━━ʕ•㉨•ʔ━━━┛`; // Your bot menu message here
      break;
    case "ownermenu":
      lkr = `❀° ┄──•••───╮
          𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}banchat_
     ⎪⌲👑 _${usedPrefix}unbanchat_
     ⎪⌲👑 _${usedPrefix}banuser_
     ⎪⌲👑 _${usedPrefix}unbanuser_
     ⎪⌲👑 _${usedPrefix}Broadcast_
     ⎪⌲👑 _${usedPrefix}Broadcastgc_
     ⎪⌲👑 _${usedPrefix}join_
     ⎪⌲👑 _${usedPrefix}setppbot_
     ⎪⌲👑 _${usedPrefix}setprefix_
     ⎪⌲👑 _${usedPrefix}resetprefix_
     ⎪⌲👑 _${usedPrefix}getfile_
     ⎪⌲👑 _${usedPrefix}getplugin_
     ┗━━━ʕ•㉨•ʔ━━━┛`; //
      break;
    case "groupmenu":
      lkr = `❀° ┄──•••───╮
          𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲💎_${usedPrefix}kick *<@tag>*_
    ⎪⌲💎_${usedPrefix}promote *<@tag>*_
    ⎪⌲💎 _${usedPrefix}demote *<@tag>*_
    ⎪⌲💎 _${usedPrefix}infogroup_
    ⎪⌲💎 _${usedPrefix}resetlink_
    ⎪⌲💎 _${usedPrefix}link_
    ⎪⌲💎 _${usedPrefix}setpp *<image>*_
    ⎪⌲💎 _${usedPrefix}setname *<text>*_
    ⎪⌲💎 _${usedPrefix}setdesc *<text>*_
    ⎪⌲💎 _${usedPrefix}setwelcome *<text>*_
    ⎪⌲💎 _${usedPrefix}setbye *<text>*_
    ⎪⌲💎 _${usedPrefix}hidetag *<text/image/audio/vid>*_
    ⎪⌲💎 _${usedPrefix}warn *<@tag>*_
    ⎪⌲💎 _${usedPrefix}unwarn *<@tag>*_
    ⎪⌲💎 _${usedPrefix}group *<open/close>*_
    ⎪⌲💎 _${usedPrefix}enable
    ┗━━━ʕ•㉨•ʔ━━━┛`; //
      break;

    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`;
  }

  conn.sendFile(m.chat, pp, "perfil.jpg", lkr, m, false, { mentions: [who] });

  let done = "👍";
  m.react(done);
};

handler.help = ["list", "botmenu", "ownermenu", "groupmenu"];
handler.tags = ["main"];
handler.command = ["list", "botmenu", "ownermenu", "groupmenu"];

export default handler;
