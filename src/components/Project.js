import { Tab } from 'react-bootstrap'
import {Container, Col, Row, Nav, TabContent} from 'react-bootstrap'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import workImg1 from "../assets/img/foxconn.png";
import workImg2 from "../assets/img/oracle.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import { ProjectCard } from './ProjectCard';

export const Project =() =>{
    const works = [
        {
            title: "Software Engineer I - Oracle Cerner",
            description: "Developed web products with React.js \n Maintain back-end data that optimizes RESTful APIs / microservices performance",
            imgUrl: workImg1,
          },
          {
            title: "Software Engineer Intern - Foxconn",
            description: "Utilized Python and Django Framework to built up API for data exchange between the branch companies",
            imgUrl: workImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ]
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
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