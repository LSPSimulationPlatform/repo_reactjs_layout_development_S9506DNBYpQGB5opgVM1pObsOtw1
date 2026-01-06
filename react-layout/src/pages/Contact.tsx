import { Row, Col, Typography } from "antd";
import { ContactForm } from "../components/Contact/ContactForm";
import { GetInTouch } from "../components/Contact/GetInTouch";

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <>
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        Have questions about this demo app? We'd love to hear from you.
      </Paragraph>

      <Row gutter={24}>
        {/* Left: Contact Form */}
        <Col xs={24} lg={14}>
          <ContactForm />
        </Col>

        {/* Right: Get in Touch */}
        <Col xs={24} lg={10}>
          <GetInTouch />
        </Col>
      </Row>
    </>
  );
};

export default Contact;
