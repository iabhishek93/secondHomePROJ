const express = require('express');
let app = express();
app.get('/',(req,res)=>{
    res.send('Hello World....')
});
app.post('/signIn',(req,res)=>{
    console.log(Object.keys(req))
    console.log(req.query)
})
app.listen(3000,()=>{console.log("Listening on port 3000")})