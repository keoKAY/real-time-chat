const WebSocket = require('websocket').server;
const http = require('http');

const server = http.createServer((request, response) => {
  // handle HTTP request here
});

const webSocketServer = new WebSocket({
  httpServer: server,
});

webSocketServer.on('request', (request) => {
  const connection = request.accept(null, request.origin);
  connection.on('message', (message) => {
    // handle incoming websocket messages here
    console.log('Received message:', message.utf8Data);
    // Broadcast the received message to all connected clients
    webSocketServer.broadcastUTF(message.utf8Data);
  });

  connection.on('close', (reasonCode, description) => {
    // handle connection closed here
    console.log('Connection closed:', reasonCode, description);
  });
});

server.listen(3001, () => {
  console.log('WebSocket Server is listening on port 3001');
});
