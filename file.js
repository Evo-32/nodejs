const fs = require('fs')

//reading files

fs.readFile('./docs/blog.txt', (error,data)=>{
    if(error){
        console.log(err)
    }
    console.log(data.toString())
})

console.log('welcome')

//write files

fs.writeFile('./docs/blog.txt', 'one day i am going to burn the bridge to just prove am not afraid of swimming.', () =>{
    console.log('file was written')
})


//directories



//deleting files