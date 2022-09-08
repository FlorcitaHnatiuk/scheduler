import React, { useEffect, useState } from "react";
import Clock from "./components/Clock";
import CreateSchedule from "./components/CreateSchedule";
import Schedules from "./components/Schedules";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

const App = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        //listens for the event list from the backend
        socket.on("sendSchedules", (schedules) => {
            setSchedules(schedules);
        });
    }, []);

    return (
        <div className='app__container'>
            <Clock />
            <CreateSchedule socket={socket} />
            <Schedules schedules={schedules} />
        </div>
    );
};

export default App;