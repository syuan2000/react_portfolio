import { useState } from "react"
import {Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/connect.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Contact =() =>{
    const formInitialDetails={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    }

    const [formDetail, setFormDetail] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({});

    // leaves the rest of the details intact only change one field
    const onFormUpdate = (category, value) =>{
        setFormDetail({
            ...formDetail,
            [category]: value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setButtonText('Sending');
        let response = await fetch('http://localhost:5000/contact', {
            method:"Post",
            headers:{
                "Content type": "Application/json; charset=utf-8"
            },
            body: JSON.stringify(formDetail),
        });

        setButtonText('Send')
        setFormDetail(formInitialDetails)
        
        let result = response.json();

        if (result.code===200){
            setStatus({success:true, message:"Message sent successfully."})
        }else{
            setStatus({success:false, message:"Something went wrong, please try again later."})
        }
    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetail.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value) }/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetail.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value) }/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetail.email} placeholder="Email Address" onChange={(e)=> onFormUpdate('email', e.target.value) }/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetail.phone} placeholder="Phone No." onChange={(e)=> onFormUpdate('phone', e.target.value) }/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea row="6" value={formDetail.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value) }/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col >
                                        <p className={status.success===false?"danger":"success" }>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}