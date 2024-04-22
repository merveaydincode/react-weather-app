import React, { useState } from 'react';
import axios from 'axios';
import './Card.css';
import { FaFloppyDisk } from "react-icons/fa6";

function Card(){
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6ec5b352c3a22b7f7418049329d046cc`

    const searchLocation =  (event) => {
        if(event.key === 'Enter') {
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
        })
    }
    }


    return (
        <div className="card">
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>Dallas</p>
                    </div>
                    <div className="temp">
                        <p>60°F</p>
                    </div>
                    <div className="description">
                        <p>Clouds</p>
                    </div>
                    </div>
                    <div className="bottom">
                        <div className="feels">
                        <p>Feels Like</p>
                            <p className='bold'>65°F</p>
                        </div>
                        <div className="humidity">
                        <p>Humidity</p>
                            <p className='bold'>%20</p>
                        </div>
                        <div className="wind">
                        <p>Wind Speed</p>
                            <p className='bold'>12 MPH</p>
                        </div>

                    </div>
                </div>
            </div>

            
    );
}

export default Card;