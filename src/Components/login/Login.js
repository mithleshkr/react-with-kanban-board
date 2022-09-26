import React,{useState} from 'react'
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const handleLogin=()=>{
     navigate('/dashboard')
 }
    
    const onFinish = (values) => {
             console.log("Received values of form: ", values);
           };
  return (
    <div style={{height:"100vh",backgroundColor:"gray"}}>
      <card style={{position:"absolute",top:"38%",left:"42%",height:"42vh"}}>
      <Form
        name="normal_login"
        style={{display:"block"}}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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

          <a className="login-form-forgot" >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
          disabled= {!email + !password}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLogin}
            

          >
            Log in
          </Button>
          <div></div>
          Or <a  style={{fontWeight:"600"}}>Register now!</a>
        </Form.Item>
      </Form>
      </card>
    </div>
  )
}

export default Login


// import React, { useState } from "react";
// import "antd/dist/antd.css";
// import "./Style.css";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Checkbox, Form, Input, message } from "antd";

//  import { useNavigate } from "react-router-dom";
 

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     auth.signInWithEmailAndPassword(email, password).then(
//       (result) =>
      
//         navigate("/dashboard") + sessionStorage.setItem("email", email),
//       (error) => {
//         message.error(error.message)
//         // swal({
//         //   title: "Oops!",
//         //   text: error.message,
//         //   icon: "error",
//         //   timer: "1500",
//         //   button: false,
//         // });
//       }
//     );
//   };

//   const triggerResetEmail = async () => {
//     await auth.sendPasswordResetEmail( email).then((result)=>{
//       message.success("Reset Mail sent Sucessfully")
    
//       // swal({
//       //   title: "GREAT",
//       //   text: "Reset Mail sent Sucessfully",
//       //   icon: "success",
//       //   timer: "1500",
//       //   button: false,
//       // })
    
//   }
    
//       ,(error)=>{
//         message.error(error.message)
//       //   swal({
//       //   title: "Oops!",
//       //   text: error.message,
//       //   icon: "error",
//       //   timer: "1500",
//       //   button: false,
//       // });
//     }
//     );
//     console.log("Password reset email sent")
//   }

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };

//   return (
//     <div className="main-div">
//       <card className="card">
//       <Form
//         name="normal_login"
//         className="login-form"
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//       >
//         <Form.Item
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Username!",
//             },
//           ]}
//         >
//           <Input
//             autoComplete="off"
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="Username"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Password!",
//             },
//           ]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Item>
//         <Form.Item>
//           <Form.Item name="remember" valuePropName="checked" noStyle>
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>

//           <a className="login-form-forgot" onClick={triggerResetEmail}>
//             Forgot password
//           </a>
//         </Form.Item>

//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="login-form-button"
//             onClick={handleLogin}

//           >
//             Log in
//           </Button>
//           <div></div>
//           Or <a onClick={()=>navigate("/registration")} style={{fontWeight:"600"}}>Register now!</a>
//         </Form.Item>
//       </Form>
//       </card>
//     </div>
//   );
// };

// export default Login;