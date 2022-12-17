const cors=require('cors');

const mysql=require('mysql');
const express = require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(cors());



//////////////////////////////////SQL CONNECTION//////////////////////////////////////////////


var mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Singh662@',
    database:'feedback_database',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('db connection suceeded.')
    else
    console.log('db connection failed \n Error :'+JSON.stringify(err,undefined,2));
});

app.listen(5000,()=>console.log('Express server is running at port no : 5000'))


/////////////////////////////SQL QUERY FOR ALL FUNCTIONALITY (CRUD)////////////////////////////



//for login admin
app.post("/login",async(req,res) =>{  
    try{
        var username=req.body.admin;
        var adminpassword=req.body.password;

        var sql='SELECT * FROM admin_table WHERE admin=? AND password=?';

        mysqlConnection.query(sql,[username,adminpassword],(err,result)=>{   
        if(!err)    
        res.send(result);
        else
        res.send("password are not matching");
        })
    }
      catch (error) {
        res.status(400).send("error")
      }   
  });


//get all userfeedback (Read Operation)
app.get('/getfeed',(req,res)=>
{
    mysqlConnection.query('SELECT TeacherName,SubjectName,Id_no FROM feedback_table',(err,result)=>{
        if(!err)
        res.send(result);
        else
        console.log(err);
    })
});

//get an particular feedback by id (Read Operation)
app.get('/getfeed/:id',(req,res)=>
{
    mysqlConnection.query('SELECT * FROM feedback_table WHERE Id_no=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})

//delete an particular teacher records by id (Delete Operation)
app.delete('/delete/:id',(req,res)=>
{
    mysqlConnection.query('DELETE FROM feedback_table WHERE Id_no=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send('deleted succesfully.');
        else
        console.log(err);
    })
})

//Insert an teacher record by admin (Create Operation)
app.post('/addteacher',(req,res)=>
{
    var TeacherNames=req.body.TeacherName;
    var SubjectNames=req.body.SubjectName;

    var sql="INSERT INTO feedback_table (TeacherName,SubjectName) VALUES (?,?)"

    mysqlConnection.query(sql,[TeacherNames,SubjectNames],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})


//Update an teacher record by student i.e feedback (Update Operation)
app.post('/addfeed',(req,res)=>
{
    var TeacherNames=req.body.TeacherName;
    var SubjectNames=req.body.SubjectName;
    var CommunicationSkills=req.body.CommunicationSkill;
    var PresentationSkills=req.body.PresentationSkill;
    var ExplanationSkills=req.body.ExplanationSkill;
    var TopicCovers=req.body.TopicCover;
    var LearningSatisfactions=req.body.LearningSatisfaction;
    var Totals=req.body.Total;

    var sql="UPDATE feedback_table SET CommunicationSkill=?,PresentationSkill=?,ExplanationSkill=?,TopicCover=?,LearningSatisfaction=? WHERE TeacherName=? AND SubjectName=?";

    mysqlConnection.query(sql,[CommunicationSkills,PresentationSkills,ExplanationSkills,TopicCovers,LearningSatisfactions,TeacherNames,SubjectNames],(err,rows,fields)=>{
        if(!err)
        res.send('updated successfully');
        else
        console.log(err);
    })
})