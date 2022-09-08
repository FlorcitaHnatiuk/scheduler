let eventList = [];

socketIO.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    /*
    The event listener adds the new event 
        to the top of the array, and 
        sends the array to the React app
    */
    socket.on("newEvent", (event) => {
        eventList.unshift(event);
        //sends the events back to the React app
        socket.emit("sendSchedules", eventList);
    });

    socket.on("disconnect", () => {
        socket.disconnect();
    });
});