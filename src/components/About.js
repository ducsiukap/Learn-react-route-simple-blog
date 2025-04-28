// import React, { useContext } from "react";

export default function About({loggedIn, user}) {

    return (
        <div className="box">
            <p className="title">Hi {loggedIn ? user.name : 'guys'}!</p>
            <p className="content">im vduczz!</p>
        </div>
    )
}