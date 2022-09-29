import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button,  Form, Input } from "antd";

import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return ( <div className="main-div">
  <card className="card-signup-form">
  <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
  <h2 style={{textAlign:"center"}}>Signup</h2>
    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: "Please input your Name!",
        },
      ]}
    >
      <Input
        autoComplete="off"
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your Password!",
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Item>
    

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={handleSignup}

      >
        Sign up
      </Button>
      Or <a  onClick={()=>navigate("/")}>login now</a>
    </Form.Item>
  </Form>
  </card>
</div>);
};

export default Signup;