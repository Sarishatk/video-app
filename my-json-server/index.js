// import json-server
const jsonServer = require('json-server')

// create json sever using json-server libary

const MediaPlayer = jsonServer.create()

// setup the path for db.json file
 const router=jsonServer.router("db.json")

//  return middle ware used by json sever
const middleware = jsonServer.defaults()

// set uo port for server app
const port = 4000 || process.env.PORT

// use middleware and route in server
MediaPlayer.use(middleware)
MediaPlayer.use(router)

// server should listen result for request from frontend
MediaPlayer.listen(port,()=>{
    console.log(`Meida Player Server started at port :${port},and waiting for resquest!!!`);
    
})