const express = require('express');
let app = express();
app.use(express.static(__dirname+"/dist/secondhome"));
app.post('/signIn',(req,res)=>{
    console.log(Object.keys(req))
    console.log(req.query)
})
app.listen(3000,()=>{console.log("Listening on port 3000")})