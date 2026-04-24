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

fs.writeFile('./docs/blog1.txt', "You can't build a city with someone who still seeks...", () =>{
    console.log('file was written')
})


//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
    if(err){
        console.log(err)
    }
    console.log('folder created.');
})
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}




//deleting files