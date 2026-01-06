import { Card, Form, message } from "antd";
import { ContactFields } from "./ContactFields";
import { FormActions } from "./FormActions";

export const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Message sent successfully!");
    form.resetFields();
  };

  return (
    <Card>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <ContactFields />
        <FormActions />
      </Form>
    </Card>
  );
};
