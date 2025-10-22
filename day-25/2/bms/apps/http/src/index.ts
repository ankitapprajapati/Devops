import express from 'express';
import { Request, Response } from 'express';
import {client} from '@repo/db/client'


const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, World!');
});

app.post('/signup', async (req:Request, res:Response) => {

    try{
        const username = req.body.username;
        const password = req.body.password;
        console.log("Signing up user:", username, password);

        if( !username || !password ){
            throw new Error("Username and password are required");
        }
        
        const user =  await client.user.create({data: {username, password}});
        return res.status(201).json(
            {
                id: user.id, 
                username: user.username,
                message : "User signed up successfully"
            }
        );
    }
    catch(err){
        return res.status(500).send("Error signing up user");
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
