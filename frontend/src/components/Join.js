import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Join = () => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const history = useHistory()

    const signIn = e => {
        e.preventDefault()
        history.push(`/chat?name=${name}&room=${room}}`)
    }


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" value={room} placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
                <button type="submit" className="btn mt-20" onClick={signIn} >Sign In</button>
            </div>
        </div>
    )
}
