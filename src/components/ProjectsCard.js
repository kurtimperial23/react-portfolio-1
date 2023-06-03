import { Col } from "react-bootstrap"

export const ProjectCards = ({title, description, imgUrl, link}) => {
    return(
        <Col size={12} sm={6} md={4}>
            <div className="proj-img-box">
                <a href={link} target="_blank">
                    <img src={imgUrl} />
                </a>
                <div className="proj-txt">
                    <a href={link} target="_blank">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCards