let projectData = {};


const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const cors = require ("cors"); 



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('website')); 





app.post("/add", (req,res)=>{
    
    projectData = {...req.body};
    res.send();

})

app.get("/data", (req,res)=>{
    res.send(projectData);
    
})
app.listen(port , () => {
    console.log(`server running on http://localhost:${port}`);
});