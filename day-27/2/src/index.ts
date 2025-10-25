import express from 'express';
import { userInfo } from 'node:os';
const app = express();
const port = 3000;

const prismaClient = require('@prisma/client');

app.use(express.json());

app.get('/', async (req, res) => {
  try{
    const user = await prismaClient.user.findFirst();
    if(!user){
      return res.status(404).json({message: 'No user found'});
    }
    res.status(200).json({
      id: user.id,
      username: user.username,
      password: user.password
    });
  }
  catch(error){
    res.status(500).send('Error retrieving user');
  }
}); 

app.post('/', async (req, res) => {
  try{
    // const username = req.body.username;
    // const password = req.body.password;
    const user = await prismaClient.user.create({
      data: {
        // username: username,
        // password: password
        username : Math.random().toString(36).substring(7),
        password : Math.random().toString(36).substring(7)
      }
    });
    res.status(201).send('User created successfully');
  }
  catch(error){
    res.status(500).send('Error creating user');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});