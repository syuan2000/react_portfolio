import { Tab } from 'react-bootstrap'
import {Container, Col, Row, Nav, TabContent} from 'react-bootstrap'
import workImg1 from "../assets/img/oracle.png";
import workImg2 from "../assets/img/foxconn.png";
import workImg3 from "../assets/img/mizzou.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

import { ProjectCard } from './ProjectCard';

export const Project =() =>{
    const works = [
        {
            title: "Software Engineer I - Oracle Cerner",
            description: "Developed web products with React.js. Maintain back-end data that optimizes RESTful APIs / microservices performance",
            imgUrl: workImg1,
          },
          {
            title: "Software Engineer Intern - Foxconn",
            description: "Utilized Python and Django Framework to built up API for data exchange between the branch companies",
            imgUrl: workImg2,
          },
          {
            title: "Teaching Assistant - University of Missouri",
            description: "Assist in a total of 4 classes in IT program ex. Python problem solving and database system courses. \n Hold office hour to help students with questions and challenges.",
            imgUrl: workImg3,
          },
    ]
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: workImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: workImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: workImg1,
          },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2> Experience </h2>
                        <p></p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Project</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            works.map((work, index) =>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...work} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">testing</Tab.Pane>
                                <Tab.Pane eventKey="third">testingg</Tab.Pane>
                            </TabContent>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-index-right" src={colorSharp2} alt="img" /> */}
        </section>

    )
}