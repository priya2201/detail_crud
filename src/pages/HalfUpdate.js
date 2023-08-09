import React,{useState,useEffect,useRef} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function HalfUpdate() {
    const fruitName=useRef("")
    const price=useRef("")
    const quantity=useRef("")
    const imageUrl=useRef("")

    const {id}=useParams();
   const navigate=useNavigate(); 

   useEffect(()=>{
    axios.get(`http://localhost:4000/fruits/${id}`).then((res)=>{
        fruitName.current.value=res.data.name;
        quantity.current.value = res.data.quantity;
            price.current.value = res.data.price;
            imageUrl.current.value = res.data.imageUrl;
    })
   },[])

   const halfUpdateFruithandler=()=>{
    let payload={
        name: fruitName.current.value,
        quantity: quantity.current.value ? Number(quantity.current.value) : 0,
        price: price.current.value ? Number(price.current.value) : 0,
        imageUrl: imageUrl.current.value,
  }
  axios.put(`http://localhost:4000/fruits/${id}`, payload).then((response) => {
    navigate("/");
})

   }

  return (
<>
<legend> Half Update</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={fruitName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Quantity(KG Units)</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type="text" ref={imageUrl} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={halfUpdateFruithandler}>
          Update
        </Button>
      </Form>

</>
  )
}

export default HalfUpdate
