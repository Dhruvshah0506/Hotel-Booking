import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import Error from "../components/Error"

function Bookingscreen() {
    const { roomid } = useParams(); // Get roomid from URL parameters
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                setLoading(true);
                // Use roomid directly
                const { data } = await axios.post("/api/rooms/getroombyid", { roomid });
                setRoom(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchRoom();
    }, [roomid]);

    return (
        <div className='m-5'>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Error/>
            ) : (
                <div>
                <div className="row justify-content-center mt-5 bs">
                        <div className="col-md-5 style={{float: 'left'}}">
                            <h1>{room.name}</h1>
                            {room.imageurls && room.imageurls.length > 0 ? (
                                <img
                                    src={room.imageurls[0]} // Display the first image
                                    className="bigimg"
                                    alt={room.name}
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <div style={{textAlign:'right'}}>
                            <b>
                            <h1>Booking Details</h1>
                            <hr />
                            <p>Name:</p>
                            <p>From Date:</p>
                            <p>To Date:</p>
                            <p>Max Count: {room.maxcount}</p>
                            </b>
                            </div>


                            <div style={{textAlign:'right'}}>
                                <b>
                                <h1>Amount</h1>
                                <hr/>
                                <p>Total days :</p>
                                <p>Rent per day : {room.rentperday}</p>
                                <p>Total Amount :</p>
                                </b>
                            </div>

                            <div style={{float: 'right'}}> 
                                <button className='btn btn-primary'>pay now</button>
                            </div>
                        </div>
                    </div>
                    </div>
            )}
        </div>
    );
}

export default Bookingscreen;
