import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row className="text-center">
                    <Col>
                        <p>Desarrollado por MV Developer | {new Date().getFullYear()} Todos los Derechos Reservados</p>

                        <div>
                            <a
                                href="https://www.linkedin.com/in/marco-ariel-pretelin-vergara/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/MarcoArielPrtlnV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" icon-link"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/marcoarielpretelinv/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" icon-link"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;