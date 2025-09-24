"use client"

import React from "react";
import CountdownLib from "react-countdown";

const endingDate = new Date("2025-11-23")

const Countdown = () => {
    return (
        <CountdownLib className="font-bold text-5xl text-yellow-300" date={endingDate}/>
    )
}

export default Countdown;