import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:3000");
ws.addEventListener("open", (s) => {
    ws.send("Teste Client")
})
ws.addEventListener("message", (msg) => {
    console.log(msg.data);
})

