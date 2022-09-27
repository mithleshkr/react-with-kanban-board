import React, { useEffect, useState } from "react";
import "./backlog.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Button, Dropdown, Menu } from "antd";

// const { useEffect, useState, } = React;
// const { DragDropContext, Draggable, Droppable } = ReactBeautifulDnd;

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

const DATA = [
  {
    id: "bl1",
    label: "Sprint",
    items: [
      { id: "sp1", label: "Task 1" },
      { id: "sp2", label: "Task 2" },
      { id: "sp3", label: "Task 3" },
      { id: "sp4", label: "Task 7" },
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

        <div className="layout__wrapper">
          <div className="dropdown-project">
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button className="dropdown-button">Select Project v</Button>
            </Dropdown>
          </div>
          <div className="layout__header">
            <div className="app-bar"></div>
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
            <div className="holder__content">
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
