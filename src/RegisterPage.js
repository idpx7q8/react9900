import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
const { Option } = Select;
const RegisterPage = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = () => { 
    props.setStatus('login')
  }
  return (
    <div>
      <h2>Register</h2>
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="small"
      >
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your firstName!",
            },
          ]}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input placeholder="firstName" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your lastName!",
            },
          ]}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input placeholder="lastName" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="password"/>
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your confirmPassword!",
            },
          ]}
        >
          <Input.Password placeholder="confirmPassword"/>
        </Form.Item>
        <Form.Item
          name="role"
          rules={[
            {
              required: true,
              message: "Please select role!",
            },
          ]}
          wrapperCol={{
            span: 24,
          }}
        >
          {/* <Input placeholder="role" /> */}
          <Select
            placeholder="please select"
            style={{
              width: '100%',
            }}
            options={[
              {
                value: '0',
                label: 'Teacher',
              },
              {
                value: '1',
                label: 'Students',
              },
            ]}
          >
            
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <div className="forgetten" onClick={handleLogin}>Login</div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
