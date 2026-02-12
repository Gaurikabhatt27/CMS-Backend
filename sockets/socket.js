import { sendChatService } from "../service/chat.service.js";

export const registerSocketHandlers = (io) => {
    const onlineUsers = new Map();

    io.on("connection", (socket) => {
        console.log("User connected: ", socket.id);

        // USER ONLINE
        socket.on("user-online", (userId) => {
            onlineUsers.set(userId, socket.id);

            console.log("Online users: ", onlineUsers);
            
        });
        
        // SEND MESSAGE
        socket.on("send-message", async ( data) => {
            try{
                const{ senderId, receiverId, message} = data;

                if(!senderId || !receiverId || !message){
                    return;
                }

                const chat =  await sendChatService({
                    senderId, receiverId, message
                });

                const receiverSocketId = onlineUsers.get(receiverId);

                if(receiverSocketId){
                    io.to(receiverSocketId).emit("receive-message", chat);
                }

                socket.emit("message-sent", chat)
            }catch(error){
                console.log("Socket error: ",error.message);
                
            }
        });

        // Disconnect

        socket.on("disconnect", () => {
            for(let [userId, sockId] of onlineUsers.entries()){
                if(sockId === socket.id){
                    onlineUsers.delete(userId);
                    break;
                }
            }

            console.log("User Disconnected:", socket.id);
            
        });
    });
};