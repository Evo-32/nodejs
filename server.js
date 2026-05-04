const http = require('http')

const server = http.createServer((req,res) =>{
    console.log(req.url,req.method)

    //set header content type

    res.setHeader('Content.Type', 'test/hml')

    res.write('<head><link rel= "stylesheet" href= "#"></head>')
    res.write('<p>Hello dear!</p>');
    res.write('<p>Helloooo thereeee!</p>');
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})