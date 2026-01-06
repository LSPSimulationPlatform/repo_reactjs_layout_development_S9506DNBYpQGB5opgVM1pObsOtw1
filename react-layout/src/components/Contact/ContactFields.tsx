import { Form, Input } from "antd";

const { TextArea } = Input;

export const ContactFields = () => {
  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Your full name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input placeholder="your.email@example.com" />
      </Form.Item>

      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: "Please enter a subject" }]}
      >
        <Input placeholder="What's this about?" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <TextArea rows={5} placeholder="Tell us more..." />
      </Form.Item>
    </>
  );
};
