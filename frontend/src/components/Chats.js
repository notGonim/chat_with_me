import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'


let socket
export const Chats = ({ location }) => {

    const [name, setName] = useState()
    const [room, setRoom] = useState()

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        socket = io('localhost:5000')
        setName(name)
        setRoom(room)
        console.log(socket)
    }, [location.search])


    return (
        <div>
            chat
        </div>
    )
}
