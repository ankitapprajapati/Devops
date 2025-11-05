import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (ws) => {
    const res = await prisma.user.create({
        data: { username:( Math.random()*100).toString(), password: "ws_pass" },
    })
    // console.log("New user created via WebSocket:", res);
    ws.send("Welcome to the WebSocket server!");
});

console.log("WebSocket server is running on ws://localhost:3001");