import { Button, Col, Container, Row } from "react-bootstrap";
import image from "./images/developerimage.webp"
import { GrMail } from "react-icons/gr";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BsLinkedin, BsGithub, } from "react-icons/bs";
import eimage from './images/ecommerceimage.png'
import movie from "./images/movie.png"
import crud from "./images/crud.png"
import api from "./images/api.png"
import form from "./images/formimg.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="dev">
            <Container className="top pt-5 pb-5 ">
                <Row>
                    <Col lg='6' md='6' sm='12' xs='12'>
                        <h1 className="cn mt-5 pt-5 fs-1">Hello, I'm<span className="id fs-1"> Stanley</span></h1>
                        <p className="hc mt-5 fs-2"><span className="idd fs-2">Front end developer</span> seeking an entry-level front end developer role to be a valuable asset to the company.</p>
                        <Button className="btt p-2 mt-4"><a href="https://drive.google.com/file/d/11P9Sa0zH8elwJzKhOC6fGtuztDVdZDEQ/view?usp=drivesdk"> View Resume</a></Button>
                    </Col>
                    <Col className="" xs="12"></Col> <span className="mt-3 pt-5 ">
                        <a href="mailto:stanleyms247@gmail.com" className="ii"><GrMail className="icon" /></a>
                        < a href="https://github.com/Stanleyms/" className="ii"><BsGithub className="icon ms-4" /></a>
                        <a href="https://www.linkedin.com/in/stanley-ms-7b6302279" className="ii"><BsLinkedin className="icon ms-4" /></a>
                        <a href="https://instagram.com/stan_ley__24?igshid=NGExMmI2YTkyZg==" className="ii"><BsInstagram className="icon ms-4" /></a>
                        <a href="https://wa.me/qr/QJGQOURGQIWQA1 " className="ii"><BsWhatsapp className="icon ms-4" /></a>
                    </span>
                </Row>
                <Container>
                    <p className="text-center mt-5 mb-0  fs-1 projecthead "> My projects</p>
                </Container>
                <Row>
                    <h2 className="mt-5 heading">Shopping Cart</h2>
                    <Col lg={{span:8, order:1}} md={{order:2}} sm={{order:2}} xs={{order:2}} className="" >

                        <p className="project1 mt-3">

                            This project is a web application that allows users to browse and purchase products online. It incorporates a responsive and user-friendly interface, enabling customers to easily navigate through various categories and product listings. The application includes features like shopping cart functionality, and order.
                            This project utilizes React components along with Redux for efficient rendering, state management, and seamless shopping experience, enabling users to browse and purchase products online.</p>
                    <Link to={"https://github.com/Stanleyms/Ecommercewebsite"}>   <Button className="sm">View</Button></Link> 
                    </Col>
                    <Col className="m-auto"  lg={{span:4, order:2}} md={{order:1}} sm={{order:1}} xs={{order:1}}><img src={eimage} className="w-100 "></img></Col>
                </Row>
                <Row>
                    <h2 className="mt-5 heading">Cinescope</h2>
                    <Col  lg={{span:8, order:1}} md={{order:2}} sm={{order:2}} xs={{order:2}}>
                        <p className="project1 mt-3">
                            I developed a react project which fetches a vast collection of movie data, allowing users to effortlessly search and explore their favorite films. Dive deep into each movie's full details, including ratings, cast, and plot summaries. Leveraging the flexibility of Styled Components, I've crafted a visually stunning and responsive user interface that enhances the overall movie browsing experience.</p>
                       <Link to={"https://github.com/Stanleyms/Cinescope"}> <Button className="sm">View</Button></Link>

                    </Col>
                    <Col className="m-auto" lg={{span:4, order:2}} md={{order:1}} sm={{order:1}} xs={{order:1}}><img src={movie} className="w-100 "></img></Col>
                </Row>
                <Row>
                    <h2 className="mt-5 heading" >CRUD App</h2>
                    <Col  lg={{span:8, order:1}} md={{order:2}} sm={{order:2}} xs={{order:2}}>
                        <p className="project1 mt-3"> This project is a feature-rich CRUD app. With a sleek user interface, it enables seamless creation, retrieval, update, and deletion of data. Leveraging the power of Redux, the app ensures efficient state management and real-time updates</p>
                      <Link to={"https://github.com/Stanleyms/Crud-app"}> <Button className="sm">View</Button></Link> 
                    </Col>

                    <Col className="m-auto"lg={{span:4, order:2}} md={{order:1}} sm={{order:1}} xs={{order:1}}><img src={crud} className="w-100 "></img></Col>
                </Row>
                <Row>
                <h2 className="mt-5 heading">API fetch</h2>
                <Col  lg={{span:8, order:1}} md={{order:2}} sm={{order:2}} xs={{order:2}}>
                <p className="project1 mt-3">This project revolves around fetching data from an API and seamlessly integrating it into a dynamic user interface. Leveraging the power of React and API integration, this app retrieves real-time data and presents it in an intuitive and visually appealing manner. Experience the seamless retrieval of data, with the ability to filter, sort, and search for specific information.</p>
               <Link to={"https://github.com/Stanleyms/API-fetch"}> <Button className="sm">View</Button></Link>
                </Col>
                <Col className="m-auto" lg={{span:4, order:2}} md={{order:1}} sm={{order:1}} xs={{order:1}}><img src={api} className="w-100 "></img></Col>
                </Row>
                <Row>
                <h2 className="mt-5 heading">Form validation</h2>
                <Col  lg={{span:8, order:1}} md={{order:2}} sm={{order:2}} xs={{order:2}}>
                    <p className="project1 mt-3">This project focuses on form validation, ensuring data accuracy and integrity. Leveraging JavaScript's robust validation techniques, this app provides real-time feedback to users, ensuring they enter valid and complete information. With an intuitive user interface, users can easily navigate through the form, while receiving instant validation feedback.</p>
                <Link to={"https://github.com/Stanleyms/Form-Validation"}>   <Button className="sm">View</Button> </Link> 
                </Col>
                <Col className="m-auto" lg={{span:4, order:2}} md={{order:1}} sm={{order:1}} xs={{order:1}}><img src={form} className="w-100 "></img></Col>
                </Row>
            </Container>

        </div>
    );
}
export default Home;