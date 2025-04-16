import React, { useContext } from "react";

import {AuthContext} from '../context/Authentication';

export default function About() {
    const {user, loggedIn} = useContext(AuthContext);

    return (
        <div className="box">
            <p className="title">Hi {loggedIn ? user.name : 'guys'}!</p>
            <p className="content">im vduczz!</p>
        </div>
    )
}