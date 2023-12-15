const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
	fgmods: 'https://api.fgmods.xyz'
}

// APIKEY \\
global.APIKeys = {
	'https://api.fgmods.xyz': 'S8mje6wW',
	'https://api.zeeoneofc.my.id': 'V24' // ISI APIKEY LU
}

global.namabot = "Mahiru" // UBAH JADI NAMA LU
global.namaowner = "Filo" // NAMA OWNER
global.footer_text = "©" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283834646499', '6285763934254'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/DaFIV489FMzL1TCX4tUEa7`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = false // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = true // BEBAS
global.autorespon = true // BEBAS
global.onlyprem = false // BEBAS
global.onlygrub = false // BEBAS
global.onlypc = false // BEBAS
global.antispam = true // TRUE AJA KALO NOMOR LU SERING KE BAN GW SARANIN PAKAI TRUE
// - \\
// PEMISAH \\
global.packname = 'FILO' //sticker wm ubah
global.author = 'Di Buat Oleh Mahiru' //sticker wm ganti nama kalian

// BUG MENU \\
global.jumlah = "5"
global.audionya = fs.readFileSync("./sound.mp3")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})