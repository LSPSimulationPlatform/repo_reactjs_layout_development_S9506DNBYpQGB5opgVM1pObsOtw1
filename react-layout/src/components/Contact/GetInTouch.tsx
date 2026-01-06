import { Card, Space, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export const GetInTouch = () => {
  return (
    <Card>
      <Title level={4}>Get in Touch</Title>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Space>
          <MailOutlined />
          <Text>info@eduapp.com</Text>
        </Space>

        <Space>
          <PhoneOutlined />
          <Text>+1 (555) 123-4567</Text>
        </Space>

        <Space>
          <EnvironmentOutlined />
          <Text>123 Education St, Learning City, LC 12345</Text>
        </Space>
      </Space>

      <Title level={5} style={{ marginTop: 24 }}>
        About This Contact Page
      </Title>

      <Paragraph>
        This contact page demonstrates:
      </Paragraph>

      <ul style={{ paddingLeft: 18, margin: 0 }}>
        <li>Ant Design Form components</li>
        <li>Client-side form validation</li>
        <li>Success messages using Ant Design</li>
        <li>Responsive layout with Row and Col</li>
      </ul>
    </Card>
  );
};
