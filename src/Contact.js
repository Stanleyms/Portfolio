import { Button, Col, Container, Row, Toast } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";

function Contact() {
    const form = useRef();
    const Handlesubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zop50ej', 'template_4nibgv1', form.current, 'gvnb3cDIup6CsZwrM')
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent", { position: "top-right", theme: "dark" })
            }, (error) => {
                console.log(error.text);
                toast.success("something went wrong,please try again", { position: "top-right", theme: "dark" })
            });
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            
            <Container fluid className="contacttopp pb-5">
                <Container className="contacttop pt-5 text-center">
                    <h1 className="chead fs-1 mt-5 pt-5">Contact me</h1>
                    <p className="contactcontent fs-6 mt-4 ">Want to get in touch? I'd love to hear from you.Here's how you can reach me...</p>
                    <Row className="mt-2 pt-5 justify-content-center">
                        <Col lg="7" >
                            <form onSubmit={Handlesubmit} ref={form}>
                                <input type="Text" placeholder="Enter your name" className="call pt-2" name="name"></input>
                                <input type="mail" placeholder="Enter your mail" className="call pt-2 mt-4 " name="email"></input>
                                <textarea type="Text" placeholder="Enter your message" className="callm pt-2 mt-4" name="message"></textarea>
                                <Button className="mt-2  sm p-2" type="submit">Send message</Button>
                            </form>

                        </Col>
                    </Row>
                </Container>



            </Container>
        </div>
    )
}
export default Contact;
