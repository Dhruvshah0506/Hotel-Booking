import React, { useState} from "react";
import {Modal, Button, Carousel} from 'react-bootstrap'
function Room({ room }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        {room.imageurls && room.imageurls.length > 0 ? (
          <img
            src={room.imageurls[0]} // Display the first image
            className="smallimg"
            alt={room.name}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="col-md-7">
        <h5>{room.name}</h5>
       <b>
       <p>Max Count :{room.maxcount}</p>
        <p>Phone Number :{room.phonenumber}</p>
        <p>Type :{room.type}</p>
       </b>

        <div style={{float: 'right'}}>
            <button className="btn btn-primary" onClick={handleShow}>View Details</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            
        <Carousel>
  {room.imageurls.map((url, index) => (
    <Carousel.Item key={index} interval={2000}>
      <img className="d-block w-100 bigm" src={url} alt={`Slide ${index}`} />
    </Carousel.Item>
  ))}
</Carousel>
    <p>
        {room.description}
    </p>
    </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
