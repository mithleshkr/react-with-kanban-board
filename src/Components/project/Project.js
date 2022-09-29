import React, { useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./project.css";
import { Button, Dropdown, Menu, Avatar, Modal, Form, Input,Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import AddIcon from "@mui/icons-material/Add";

//menu for project dropdown
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a rel="noopener noreferrer" href="/#/dashboard">
            iTaskManagement
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a rel="noopener noreferrer" href="/#/dashboard">
            iWardRobe
          </a>
        ),
      },
    ]}
  />
);

const Project = () => {

  const [projectName, setProjectName] = useState("");
  const [leadName, setLeadName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Navbar />
        </div>
        <div className="project-main-container">
          <div className="select-project-container">
            <div>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button className="dropdown-button">
                  Select Project &nbsp;
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-menu-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </span>{" "}
                </Button>
              </Dropdown>
            </div>
            <div>
              <Button
                type="primary"
                title="Create New Project"
                onClick={showModal}
              >
                <AddIcon />
              </Button>
              <Modal
                title="Project Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
              <Form
             
            >
              <Form.Item label="Project Name">
                <Input
                 placeholder="Enter Your Project Name" 
                 value={projectName}
                 />
              </Form.Item>
              <Form.Item label="Lead Name">
                <Input placeholder="Enter Lead Name" />
              </Form.Item>
              <Form.Item label="Upload" valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload Project Profile
                    </div>
                  </div>
                </Upload>
              </Form.Item>
            </Form>
              </Modal>
            </div>
          </div>
          <br />
          <div className="project-details-container custom-scroll">
            <h2 className="project-data-title">Projects</h2>
            <div className="project-details-data">
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>iWardRobe</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>AWC</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>BMW</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>TC</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
            </div>
            <div className="project-details-data">
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>iTaskManagement</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>Careeratlas</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>SAP</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
              <div className="project-data">
                <div>
                  <Avatar
                    className="avatar-container"
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </div>
                <div title="Project Title">
                  <h2>Mendix</h2>
                </div>
                <div title="Lead Name">
                  <p>Mithlesh Kumar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
