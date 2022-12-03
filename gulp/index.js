const fs  = require('fs')


// fs.writeFile('index.html', '<h1> salom </h1>', 'utf-8', (err) => {
//     if(err) return console.log(err)
//     console.log('file yasaldi');
// })

const path = './gulp/tasks'

const arrayPathFile = fs.readdirSync(path).map(file => `${path}/${file}`)

module.exports = arrayPathFile