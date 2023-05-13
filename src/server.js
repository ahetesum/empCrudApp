const express = require("express");
const bodyparser= require('body-parser');
const PORT = 8001;
const app = express();
app.use(bodyparser.json());
const connectDB= require('./config/db.config');


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

require("../src/route/auth.router")(app);
require("../src/route/employee.router")(app);
connectDB().then(()=>{
  console.log('DB connected Sucessfully')
}).catch((err)=>{
  console.log('failed to connect DB '+ err)

})