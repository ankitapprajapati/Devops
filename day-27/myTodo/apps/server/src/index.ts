import express from 'express';
import {prisma} from '@repo/db/client'

const app = express();
const port = 3002;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});   

app.get('/users', async (req, res) => {
  try{
    const response = await prisma.user.findMany();
    res.status(201).json(response); 
  }
  catch(error){
    res.status(500).json({ error: 'Failed to fetch users' }); 
  }
});

app.post('/user', async (req, res) => {
  try{
    const { username, password } = req.body;
    if( !username || !password ){
      return res.status(400).json({ error: 'Username and password are required' });
    }
    const response = await prisma.user.create({
      data: {
        username,
        password
      }
    });
    res.status(201).json(response); 
  }
  catch(error){
    res.status(500).json({ error: 'Failed to create user' }); 
  } 
});
  

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})