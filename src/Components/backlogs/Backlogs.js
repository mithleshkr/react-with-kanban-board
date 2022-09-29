import React, { useEffect, useState } from "react";

//react beautiful darg and drop c
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

//header
import Header from "../header/Header";

//navigation bar
import Navbar from "../navbar/Navbar";

//ant design
import { Button, Dropdown, Menu } from "antd";

//material ui icons
//import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//import PerfectScrollbar from 'react-perfect-scrollbar'

//css
import "./backlog.css";

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

//data of sprint and backlog tasks
const DATA = [
  {
    id: "bl1",
    label: "Sprint",
    items: [
      { id: "sp1", label: "Task 1" },
      { id: "sp2", label: "Task 2" },
      { id: "sp3", label: "Task 3" },
      { id: "sp4", label: "Task 7" },
      { id: "sp5", label: "Task 9" },
    ],
    tint: 1,
  },
  {
    id: "bl2",
    label: "Backlog Tasks",
    items: [
      { id: "bt1", label: "Task 4" },
      { id: "bt2", label: "Task 5" },
      { id: "bt3", label: "Task 6" },
      { id: "bt4", label: "Task 8" },
      { id: "bt5", label: "Task 10" },
    ],
    tint: 2,
  },
  // {
  //   id: 'af7', label: 'On hold',
  //   items: [
  //     {id: 'af8', label: 'Item 1'},
  //     {id: 'af9', label: 'Item 2'},
  //   ],
  //   tint: 3,
  // },
];

function Backlogs() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Navbar />
        </div>

        <div className="layout__wrapper custom-scroll">
          <div className="dropdown-project">
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
          
          <LeadsOverview />
        </div>
      </div>
    </div>
  );
}

function LeadsOverview() {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});

  useEffect(() => {
    // Mock an API call.
    buildAndSave(DATA);
  }, []);

  function buildAndSave(items) {
    const groups = {};
    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    }

    // Set the data.
    setItems(items);

    // Makes the groups searchable via their id.
    setGroups(groups);
  }

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { destination, draggableId, source, type } = result;

        if (!destination) {
          return;
        }

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }

        if ("group" === type) {
          const sourceIndex = source.index;
          const targetIndex = destination.index;

          const workValue = items.slice();
          const [deletedItem] = workValue.splice(sourceIndex, 1);
          workValue.splice(targetIndex, 0, deletedItem);

          buildAndSave(workValue);

          return;
        }

        const sourceDroppableIndex = groups[source.droppableId];
        const targetDroppableIndex = groups[destination.droppableId];
        const sourceItems = items[sourceDroppableIndex].items.slice();
        const targetItems =
          source.droppableId !== destination.droppableId
            ? items[targetDroppableIndex].items.slice()
            : sourceItems;

        // Pull the item from the source.
        const [deletedItem] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, deletedItem);

        const workValue = items.slice();
        workValue[sourceDroppableIndex] = {
          ...items[sourceDroppableIndex],
          items: sourceItems,
        };
        workValue[targetDroppableIndex] = {
          ...items[targetDroppableIndex],
          items: targetItems,
        };

        setItems(workValue);
      }}
    >
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable draggableId={item.id} key={item.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <DroppableList key={item.id} {...item} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

function DroppableList({ id, items, label, tint }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
        
          <div className={`holder holder--tint-${tint}`}>
            <div className="holder__title">{label}</div>
            
            <div className="holder__content custom-scroll">
              <ul className="list">
                {items.map((item, index) => (
                  <li className="list__item" key={item.id}>
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          className="card1"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.label}
                        </div>
                      )}
                    </Draggable>
                  </li>
                ))}
                {provided.placeholder}
              </ul>
            </div>
           
          </div>
          
        </div>
      )}
    </Droppable>
  );
}

export default Backlogs;

// import React from "react";
// import Header from "../header/Header";
// import Navbar from "../navbar/Navbar";
// import { Button, Dropdown, Menu } from "antd";
// import "./backlog.css";

// const menu = (
//   <Menu
//     items={[
//       {
//         key: "1",
//         label: (
//           <a rel="noopener noreferrer" href="/#/dashboard">
//             1st Project
//           </a>
//         ),
//       },
//       {
//         key: "2",
//         label: (
//           <a rel="noopener noreferrer" href="/#/dashboard">
//             2nd Project
//           </a>
//         ),
//       },
//       {
//         key: "3",
//         label: (
//           <a rel="noopener noreferrer" href="/#/dashboard">
//             3rd Project
//           </a>
//         ),
//       },
//     ]}
//   />
// );

// const Backlogs = () => {
//   return (
//     <div>
//       <Header />
//       <div style={{ display: "flex", flexDirection: "row" }}>
//         <div>
//           <Navbar />
//         </div>
//         <div className="backlog-main-container">
//           <div className="dropdown-project">
//             <Dropdown overlay={menu} placement="bottomRight" arrow>
//               <Button className="dropdown-button">Select Project v</Button>
//             </Dropdown>
//           </div>
//           <br />
//           <div className="sprint-container">
//           <h3>
//             Sprint
//             </h3>
//             <div >
//             <div className="sprint-data">
//             </div>
//             <div >
//             </div>
//             </div>
//           </div>
//           <br />
//           <div className="backlog-container">
//           <h3>
//             Backlog Task
//             </h3>
//             <div >
//             <div className="backlog-data">
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Backlogs;
