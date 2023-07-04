import { Col, Container, Row, Table } from "react-bootstrap";
import image from "./images/profile.jpg"

function About() {
    return (
        <div>
            <Container fluid className="abt">
                <Container className="abt">
                    <img className="profile mt-5" src={image} ></img>
                    <Container className="divider mt-5"></Container>
                    <Container className="objective fs-4">
                        <p className="objective mt-5 pt-3 mb-0"> Hello,I'm Stanley . I'm a front end developer seeking a position where I can make the best of my potential and contribute to the company to the organization's growth. </p>
                        <p className="mb-0 pb-5"> I am a team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.I create user-friendly and efficient websites that are visually appealing and easy to navigate. I utilize my skills in HTML, CSS, JavaScript, and React to develop websites that meet all the requirements of the client.</p>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}
export default About;