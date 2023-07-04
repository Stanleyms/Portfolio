import { Col, Container, Row } from "react-bootstrap";
import { GrMail } from "react-icons/gr";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BsLinkedin, BsGithub, } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";

function Footer() {
    return (
        <div>
            <Container fluid className="bg-dark">
                <Container className="bg-dark p-4">
                    <Row>
                        <Col className="text-center " lg="4">
                            <a href="mailto:stanleyms247@gmail.com" className="ms-2 mt-5"><GrMail className="footer-logo" /></a>
                            < a href="https://github.com/Stanleyms/" className="ms-2 mt-5"><BsGithub className=" ms-2 footer-logo" /></a>
                            <a href="https://www.linkedin.com/in/stanley-ms-7b6302279" className="ms-2 mt-5"><BsLinkedin className=" ms-2 footer-logo" /></a>
                            <a href="https://instagram.com/stan_ley__24?igshid=NGExMmI2YTkyZg==" className="ms-2 mt-5"><BsInstagram className=" ms-2 footer-logo" /></a>
                            <a href="https://wa.me/qr/QJGQOURGQIWQA1 " className="ms-2 mt-5"><BsWhatsapp className=" ms-2 footer-logo" /></a>
                        </Col>
                        <Col className="text-light text-center mt-2" lg="4" >&#169; 2023 stanley  </Col>
                        <Col lg="4" className="text-light text-center mt-1"><VscLocation className="copyright" /> Bangalore</Col>

                    </Row>
                </Container>
            </Container>
        </div>
    )
}
export default Footer;