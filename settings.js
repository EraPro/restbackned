const fs = require('fs')

global.creator = 'ZeroGanz' 
global.apikey = ["9g57f6", "j8f6h9", "ZeroTeam"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
