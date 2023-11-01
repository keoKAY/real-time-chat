// // import ampq from 'amqplib';

// class RabbitMQService{
// constructor(){
//     this.queue = 'product_inventory';
//     this.connection = null; 
//     this.channel = null;

// }

// async connect(){
//     try{
//         this.connection = await ampq.connect('amqp://localhost:5672');
//         this.channel = await this.connection.createChannel(); 
//         await this.channel.assertQueue(this.queue, {durable: false});


//         // this is to close the connection when the process is terminated
//         process.once('SIGINT', async () => {
//            await this.channel.close();
//            await this.connection.close();
//         }); 

//     }catch(err){
//     console.log("Error : ", err)
//     }
// }

// async sendMessage(message){
//     if(!this.channel){
//         console.error(" You must connect before sending a message")
//         return; 
//     }

//     this.channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(message)))
//     console.log("[x] Sent %s", message)


// }

// async consumeMessage(callback){
//     if(!this.channel){
//         console.log("You must connect before consuming messages")
//         return; 
//     }

//     await this.channel.consume(
//         this.queue, 
//         (message)=>{
//             if(message){
//                 callback(JSON.parse(message.content.toString()))
//                 // this.channel.ack(message)
//                 console.log("[x] Received %s", message.content.toString())
//             }
//         }, {
//             noAck: true // this is to tell the server that we have received the message
//         }
//     ); 
//     console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", this.queue)
// }

// async closeConnection() {
//     if (this.channel) {
//       await this.channel.close();
//     }
//     if (this.connection) {
//       await this.connection.close();
//     }
//   }
  

// }

// export default new RabbitMQService();



