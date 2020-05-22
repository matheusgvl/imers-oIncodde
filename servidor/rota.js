const express=require("express");
const router=require("router");
const rota=router();
const app = express();
app.get("/",(res,req) => {
    req.status(200).send(
      "hello world"
    );
  });
  
  app.listen("500");