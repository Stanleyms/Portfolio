import { Button, Col, Container, Row } from "react-bootstrap";
import html from './images/html.jpg';
import css from './images/csspic.jpg';
import bootstrap from './images/bootstrap.jpg';
import javascript from './images/javascriptpic.jpg';
import react from './images/reactpic.jpg';
import redux from './images/reduxpic.jpg';
import node from './images/nodepic.jpg';
import { Link } from "react-router-dom";

function Skills() {
    return (
        <div>
            <Container fluid className="sktop">
                <Container className="sktop">
                    <h1 className="skhead fs-1 pt-5">My Skills</h1>
                    <Container className="icontainer">
                        <Row>
                            <Col lg="3" md="3" sm="6" xs="6" className="mt-5 text-center text-light sl"><img src={html} className="d-block ms-auto me-auto"></img>Html</Col>
                            <Col lg="3" md="3" sm="6" xs="6" className="mt-5 text-center text-light sl"><img src={css} className="d-block ms-auto me-auto"></img>Css</Col>
                            <Col lg="3" md="3" sm="6" xs="6" className="mt-5 text-center text-light sl"><img src={bootstrap} className="d-block ms-auto me-auto"></img>Bootstrap</Col>
                            <Col lg="3" md="3" sm="6" xs="6" className="mt-5 text-center text-light sl"><img src={javascript} className="d-block ms-auto me-auto"></img>Javascript</Col>

                            <Col lg="4" md="4" sm="6" xs="6" className="mt-5 text-center text-light sl"><img src={react} className="d-block ms-auto me-auto"></img>React js</Col>
                            <Col lg="4" md="4" sm="6" xs="6" className="mt-5 text-center text-light sl"><img src={redux} className="d-block ms-auto me-auto"></img>Redux</Col>
                            <Col lg="4" md="4" sm="12" xs="12" className="mt-5 text-center text-light sl"><img src={node} className="d-block ms-auto me-auto"></img>Node basic</Col>

                        </Row>
                    </Container>
                    <Container className="line mt-5 "></Container>
                    <Container>
                        <h1 className="mt-2 pt-5 fs-2 certi">Certification </h1>
                        <p className="certiplace mt-3">Full stack web development - <span className="certilocation">Nschool academy</span></p>
                        <Row className="view text-center mt-4">
                            <Link to={"https://drive.google.com/file/d/11RGlD-BfC44ItN2V8J0xW4adVyNsfNnk/view?usp=drivesdk"}> <Button className="zoom">View Certificate</Button></Link>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}
export default Skills;
