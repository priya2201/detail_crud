import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from '../components/shared/DeleteConfirmation';
import HalfUpdateConfirmation from '../components/shared/HalfUpdateConfirmation';

function AllFruits() {
    const[allFruits,setAllFruits]=useState([]);
    const navigate = useNavigate();
    const[showModal,setShowModal]=useState(false)
    const[itemToDeleteId,setItemToDeleteId]=useState(0)
    const[itemToUpdateId,setItemToUpdateId]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost:4000/fruits").then((response)=>{
            setAllFruits(response.data)
        })
    },[])
    


    const openConfirmationUpdateModalHandler=(id)=>{
        setShowModal(true)
        setItemToUpdateId(id)
    }
    
    const hideUpdateModelhandler=()=>{
        setShowModal(false)
        setItemToUpdateId(0)

    }

      
     
    const openConfirmDeleteModalHandler=(id)=>{
        setShowModal(true);
        setItemToDeleteId(id)
    }
    const hideDeleteModalHandler=()=>{
        setShowModal(false)
        setItemToDeleteId(0)
    }
   const confirmDeleteHandler= ()=>{
    axios.delete(`http://localhost:4000/fruits/${itemToDeleteId}`)
    .then((response)=>{
        setAllFruits((prevState)=>{
            return prevState.filter((_)=> _.id !== itemToDeleteId)
        });
        setItemToDeleteId(0)
        setShowModal(false)
    })
   }
   

   


  return (
    <>
    <DeleteConfirmation
    showModal={showModal}
    hideDeleteModalHandler={hideDeleteModalHandler}
    title="Delete Confirmation"
    body="Are you sure that you want to Delete this item?"
    confirmDeleteHandler={confirmDeleteHandler}
    >

    </DeleteConfirmation>
    <HalfUpdateConfirmation
    showModal={showModal}
    hideUpdateModelhandler={hideUpdateModelhandler}
    title="Update COnfirmation"
    body="Are yo sure that you want to update this item?"
    itemId={itemToUpdateId} />
          <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-fruit")}>
            Add New Fruit
          </Button>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-2">
        {allFruits.map((item)=>(
            <Col key={item.id}>
                <Card>
          < Card.Img variant='top' src={item.imageUrl} style={{height:300}}/>
          <Card.Body>
<Card.Title>{item.name}</Card.Title>
<Card.Text>Quanatity(KG Units)- {item.quantity}</Card.Text>
<Card.Text>Price - {item.price}</Card.Text>
<Button
	  variant="primary"
	  onClick={() => navigate(`/update-fruit/${item.id}`)}
	>
	  Edit
	</Button>
    <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
        <Button 
        variant="secondary"
        onClick={()=> {openConfirmationUpdateModalHandler(item.id)}}
        >Need to Update
            </Button> 


          </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
    </>
  )
}

export default AllFruits
