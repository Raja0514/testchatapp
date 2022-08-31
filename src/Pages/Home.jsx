import React, { useEffect, useState,} from 'react'
import io from 'socket.io-client'
import './Home.css'
import {useNavigate} from 'react-router-dom'

let socket;
const Home = () => {

    const navigate=useNavigate()

    
    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const socketUrl = 'https://rakmoni.herokuapp.com/'

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const user = params.get('name');
        const room = params.get('room');

        setUser(user)
        setRoom(room)

        socket = io(socketUrl);



        socket.emit('join', { user, room }, (err) => {
            if (err) {
                // alert(err)
            }
        })

        return () => {
            // User leaves room
            socket.disconnect();

            socket.off()
        }

    }, [socketUrl])

    useEffect(() => {
        socket.on('message', msg => {
            setMessages(prevMsg => [...prevMsg, msg])

            setTimeout(() => {

                var div = document.getElementById("chat_body");
                div.scrollTop = div.scrollHeight - div.clientWidth;
            }, 10)
        })

        socket.on('roomMembers', usrs => {
            setUsers(usrs)
        })
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
       
        socket.emit('sendMessage', message, () => setMessage(""))
        setTimeout(() => {
            var div = document.getElementById("chat_body");
            div.scrollTop = div.scrollHeight ;
        }, 100)
    }

    const handleClick = () => {
        localStorage.clear();
        //window.location.reload();
        navigate('/')
      };
    

    return (
        <>
        
        <div className="container mt-4 ">
            <div className="row chat-window" id="chat_window_1" >
                <div className="col-xs-4 col-md-4">
                    <p>Active Users</p>
                    <ul>
                        {
                            users.map((e, index) => (
                                <li key={index}>{e.user}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-xs-8 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading top-bar">
                            <div className="col-md-12 col-xs-8">
                                <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span>{room}</h3>
                            </div>

                        </div>
                        <div className="panel-body msg_container_base" id="chat_body">
                            {
                                messages.map((e, index) => (
                                    e.user === user?.toLowerCase() ? <>
                                        <div key={index} className="row msg_container base_receive">
                                            <div className="col-xs-10 col-md-10">
                                                <div className="messages msg_receive">
                                                    <p>{e.text}</p>
                                                    <time>{e.user}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </> : <>
                                        <div key={index} className="row msg_container base_sent">
                                            <div className="col-xs-10 col-md-10">
                                                <div className="messages msg_sent">
                                                    <p>{e.text}</p>
                                                    <time>{e.user}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                        <div className="panel-footer">
                            <div className="input-group">
                                <input id="btn-input" type="text"
                                    value={message}
                                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                                    onChange={(event) => setMessage(event.target.value)}
                                    className="form-control input-sm chat_input" placeholder="Write your message here..." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary   m-5" onClick={handleClick}>
        logout
      </button>
        </div>
        
        </>
    )
}

export default Home;
