import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


function HalfUpdateConfirmation(props) {
const navigate=useNavigate()
    
    
  return (
<>
<Modal
show={props.showModal}
onHide={()=>{
    props.hideUpdateModelhandler()
}}>
    <Modal.Header updateButton>
        <Modal.Title>{props.title}</Modal.Title>

    </Modal.Header>
    <Modal.Body>{props.body}</Modal.Body>
    <Modal.Footer>
        <Button
        variant="secondary"
        onClick={()=>{
            props.hideUpdateModelhandler()
        }}>
Close
        </Button>
        <Button variant="secondary" 	  
        onClick={() => navigate(`/update-fruit/${props.itemId}`)}>
Update Now
        </Button>
    </Modal.Footer>
</Modal>
</>
  )
}

export default HalfUpdateConfirmation
