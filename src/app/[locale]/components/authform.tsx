"use client";
import { Button, Card, Checkbox, Form, Input } from "antd";
import type { FormProps } from "antd";
import useMutateUsers from "../hooks/Auth/useMutateUser"; // adjust the path as needed
import { Product } from "../types/product";

type Props = {
  Header: string;
  ButtonText: string;
  mutationFn: (values: FieldType) => Promise<[Product]>;
};

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: boolean;
};

export default function AuthForm({ Header, ButtonText, mutationFn }: Props) {
  const { mutate, error, isPending } = useMutateUsers({ mutationFn });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Submitting:", values);
    mutate(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 gap-y-3">
      <Card
        hoverable
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-lg border-4"
      >
        <h1 className="text-center text-2xl text-black mb-6">{Header}</h1>

        <div className="flex flex-col items-center gap-y-4">
          <Form
            name="auth-form"
            style={{ width: "100%" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="w-full"
            >
              <Input size="middle" placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
              className="w-full"
            >
              <Input size="middle" placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="w-full"
            >
              <Input.Password size="middle" placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              className="w-full"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="w-full">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full sm:w-auto"
                loading={isPending}
              >
                {ButtonText}
              </Button>
            </Form.Item>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {(error as Error).message}
              </div>
            )}
          </Form>
        </div>
      </Card>
    </div>
  );
}
