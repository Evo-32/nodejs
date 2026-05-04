const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) =>{
    console.log(req.url,req.method)

    //set header content type

    res.setHeader('Content.Type', 'test/hml')


    fs.readFile('./views/index.html',(err,data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            //res.write(data)
            res.end(data)
        }
    })

    // res.write('<head><link rel= "stylesheet" href= "#"></head>')
    // res.write('<p>Hello dear!</p>');
    // res.write('<p>Helloooo thereeee!</p>');
    // res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})