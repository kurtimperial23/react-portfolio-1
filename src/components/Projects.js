import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img-PPU.png";
import projImg2 from "../assets/img/project-img-DACC.png";
import projImg3 from "../assets/img/project-img-BG.png";
import projImg4 from "../assets/img/project-img-BM.jpg";
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {

    const webProjects = [
        {
            title: "Unfinished portfolio",
            description: "Personal Project",
            imgUrl: projImg1,
            link: "https://kurtimperial23.github.io/"
        },
        {
            title: "Dental Art Care Clinic",
            description: "Client Requirement",
            imgUrl: projImg2,
            link: "https://github.com/kurtimperial23/Dental-Art-Care-Clinic"
        },
        {
            title: "Blue Giraffe",
            description: "Personal Project",
            imgUrl: projImg3,
            link:"https://github.com/kurtimperial23/blue-giraffe"
        },
        {
            title: "Python Music Player",
            description: "Personal Project",
            imgUrl: projImg1,
            link: "https://github.com/kurtimperial23/Python-Music-Player"   
        },
        
    ];

    const mobileProjects = [
        {
            title: "Bookmarked",
            description: "Group Project",
            imgUrl: projImg4,
            link: "https://github.com/kurtimperial23/Bookmarked"
        },
        {
            title: "Kwek-Quick",
            description: "Group Project",
            imgUrl: projImg1,
            link: "https://github.com/kurtimperial23/Dental-Art-Care-Clinic"
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility once offset={400}>
                            {({ isVisible })=> (
                                <div>
                                      <div className={isVisible ? "animate__animated animate__fadeInUp animate__slow" : ""}>
                                        <h2 className="mb-5">Projects</h2>
                                    </div>
                                    <div className={isVisible ? "animate__animated animate__fadeInUp animate__slow" : ""}>
                                        <p>As a Student and an aspiring IT expert, i keep on improving my craft in any means possible. With that being said, my works are uploaded in github. It is available for the general public to view and give feedback to my works. I may not be the best in my craft, but i surely aspire to improve further in my career </p>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web Apps</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Game</Nav.Link>
                                </Nav.Item>
                            </Nav>  
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            webProjects.map((project, index) => {
                                                return(
                                                    <ProjectCards 
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            mobileProjects.map((project, index) => {
                                                return(
                                                    <ProjectCards 
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>      
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
}
export default Projects 