import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Button, Dropdown, Menu } from "antd";
import "./backlog.css";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a rel="noopener noreferrer" href="/#/dashboard">
            1st Project
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a rel="noopener noreferrer" href="/#/dashboard">
            2nd Project
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a rel="noopener noreferrer" href="/#/dashboard">
            3rd Project
          </a>
        ),
      },
    ]}
  />
);

const Backlogs = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Navbar />
        </div>
        <div className="backlog-main-container">
          <div className="dropdown-project">
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button className="dropdown-button">Select Project v</Button>
            </Dropdown>
          </div>
          <br />
          <div className="sprint-container">
          <h3>
            Sprint
            </h3>
            <div >
            <div className="sprint-data">
            </div>
            <div >
            
            
            </div>
            </div>
          </div>
          <br />
          <div className="backlog-container">
          <h3>
            Backlog Task
            </h3>
            <div >
            <div className="backlog-data">
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backlogs;
