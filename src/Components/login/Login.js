import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import background from '../login/background.png';

 import { useNavigate } from "react-router-dom";
 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin =()=>{
    if(email ==="login@test.com" && password ==="123456"){
      navigate('/dashboard')
    }
    else{
      message.error("Login Failed")
    }
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="main-div">
    <div><p style={{color:"red"}}>email: login@test.com && password: 123456 </p></div>
    
      <card className="card-login-form">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
      <h2 style={{textAlign:"center"}}>Login</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            autoComplete="off"
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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLogin}

          >
            Log in
          </Button>
          <div></div>
          Or <a onClick={()=>navigate("/signup")} style={{fontWeight:"600"}}>Register now!</a>
        </Form.Item>
      </Form>
      </card>
    </div>
  );
};

export default Login;