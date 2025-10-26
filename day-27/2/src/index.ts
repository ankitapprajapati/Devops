import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
   
    const data = await prisma.user.findMany();
    res.json({
        data : data
    })
})

app.post("/", async (req, res) => {
  try{
    const user = await prisma.user.create({
      data:{
        username: Math.random().toString(36).substring(7),
        password: Math.random().toString(36).substring(7)}
      }
    );
    res.json({
      message : "User created successfully",
      user
    })
  }catch(err){
    res.status(500).json({
      message : "Something went wrong",
      error: err
    })
  }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});