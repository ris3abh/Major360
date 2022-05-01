const express=require('express');
const app=express(); 
const mysql=require('mysql');
const port=5050;
const bodyParser=require('body-parser');

const urlEncodedBodyParser=bodyParser.urlencoded({extended:false});
//app.use(urlEncodedBodyParser);
app.use(bodyParser.json());

const usernames=[];
app.post('/register',(request,response)=>{
var username=request.body.username;
if(usernames.find((u)=>u==username))
{
response.send({success:false});
}else
{
usernames.push(username);
response.send({success:true});
}

});

app.post('/sendMessage',(request,response)=>{
var userMessage=request.body.message;
console.log(userMessage);
var obj={};
obj.botMessage="Kya bhai sb thik, le gana sun :(";
obj.mood="sad";
obj.songs=["jo tu na mila mujhe","tere naam","isme tera ghata","bada pachtaoge","channa mereya"];
response.send(obj);
});



app.use(express.static("learn")) // esa likh ke humne smjha diya ki static contents ke liye request aaye to learn folder me se serve krna

app.get("/",function(request,response){	
response.redirect("/index.html");  //yha humne ye smjha diya ki request me agar resource name na ho to index.html ko request bheji jaaye
});


app.listen(port,function(error){	
if(error)
{
console.log("Some problem ${error}");
}
console.log(`Server is ready to accept request on port ${port}`);
});


