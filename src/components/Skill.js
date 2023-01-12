import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Row, Container} from 'react-bootstrap'
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skill = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Belows are my key feature skills:)
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">   
                                <div className="c100 p90 orange meter">
                                    <span>90%</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                                <h5>Web Development</h5>
                            </div> 
                            <div className="item">   
                                <div className="c100 p90 orange meter">
                                    <span>90%</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                                <h5>Problem Solving</h5>
                            </div> 
                            <div className="item">   
                                <div className="c100 p90 orange meter">
                                    <span>95%</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                                <h5>Team work</h5>
                            </div> 
                            <div className="item">   
                                <div className="c100 p90 orange meter">
                                    <span>95%</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                                <h5>Fullstack Python Programming</h5>
                            </div> 
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}