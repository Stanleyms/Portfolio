import { Container } from "react-bootstrap";
import error from "./images/error.jpg"
function Nopage(){
    return(
        <div>
            <Container fluid className="pagetop">
                <Container className=" pagetop text-center">
              <img src={error} className="w-25 mt-5"></img>
<h1 className="pagehead fs-1 ">404</h1>
<p className="pagecontent fs-1"> Page not found</p>
                </Container>
            </Container>
        </div>
    )
}
export default Nopage;