import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner =() => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setisDeleting ] = useState(false);
    const toRotate = [ "Developer", "Designer", "Student"];
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const [ text, setText ] = useState('');
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === "") {
            setisDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
            <Row className="align-items-center">
                <Col xs={12} md={12} lg={12} xl={6}>
                    <span className="tagline">Welcome to my Portfolio!</span>
                    <h1>{`Hi, I'm Kurt Hydein Imperial. `}<span className="wrap"> {text}|</span></h1>
                    <p>A University Student's Portfolio made into a website. If you think the page looks good, you can contact me through Messenger or Email which can be found on the links below.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={6} className="banner-image">
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
        </section>
        
    );
}

export default Banner;