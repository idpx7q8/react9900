import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "./9900logo.jpg"; // 导入9900logo的图片
import "./LoginPage.css"; // 导入自定义的background CSS 样式文件
import { Button, Checkbox, Form, Input } from "antd";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = (props, ref) => {
  const [status, setStatus] = useState("login");

  const handleRegister = () => {
    setStatus("register");
  };
    
    const handleForgotten = () => {
        setStatus("forgotten");
    };
        return (
            <div className="login-page">
                <div className="content">
                    <img
                        src={logoImage}
                        alt="Logo"
                        className="logo"
                        style={{ width: "100%", height: "30%" }}
                    />
                    {status == 'login' ? 
                    <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
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
                        >
                    <h2>Welcome to Single Sign On</h2>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
    
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <div className="forgetten" onClick={handleForgotten}>Forgotten password?</div>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" style={{ width: '100%' }} onClick={handleRegister}>
                            Create New Account
                        </Button>
                    </Form.Item>
                </Form>
                    
                        : status == 'register' ? <RegisterPage status={status} setStatus={setStatus }></RegisterPage> : <ForgotPasswordPage status={status} setStatus={setStatus }></ForgotPasswordPage >}
                    
                </div>
            </div>
        );
  
};

export default LoginPage;
