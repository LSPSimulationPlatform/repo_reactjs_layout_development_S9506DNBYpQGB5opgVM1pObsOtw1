import { Button, Space } from "antd";

export const FormActions = () => {
  return (
    <Space style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button htmlType="reset">Reset</Button>
      <Button type="primary" htmlType="submit">
        Send Message
      </Button>
    </Space>
  );
};
