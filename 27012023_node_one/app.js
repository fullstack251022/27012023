const fs = require('fs')

console.log('start')


fs.readFile('./files/myFile.txt', "utf-8", (err, data) => {
    if (err) {
        console.log('[ERROR]: ', err)
    } else {
        console.log('data: ',data)
    }

})


// try {
//     const fileText = fs.readFileSync('./files/myFile.txt', "utf-8");    
//     console.log(fileText)
// } catch (error) {
//     console.log('error: ',error)
// }

console.log('end')




// maSheBaLi.appendFileSync('myName.txt','My name is Beni')

//create file if not exist, add text into the file
// fs.appendFile('files/myfile.txt', 'hello world', (err) => {
//     if (err) {
//         console.log('[ERROR]:', err)
//     }
//     console.log('Saved')
// })



//remove directory
// fs.rmdir('./files', (err) => {
//     console.log(err)
// })


//remove file
// fs.unlink('files', (err) => {
//     if(err){
//         console.log(err)
//     }
//  })

