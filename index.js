
const express = require('express'); 
const app = express(); 
  
app.get('/' , (req,res)=>{ 
   // 200 status code means OK 
   //res.status().send(200);  
   res.send(row.dimensionValues[0])
   
}) 
  
// Server setup 
app.listen(8081 , ()=>{ 
    console.log("server running -hello"); 
});


/* == testing ->working on port 8080
const express = require('express');
const app = express();
const port = 8080; // Change this to the desired port number

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/