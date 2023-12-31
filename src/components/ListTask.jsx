

// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import TodoCss from "./TodoCss.css";
// import { AiFillDelete } from "react-icons/ai";
// import { MdEdit } from "react-icons/md";
// import { MdOutlineDoneAll } from "react-icons/md";

// const ListTask = (props) => {
//     const [editedValue, setEditedValue] = useState(props.task.task);
//     const [isEditing, setEditing] = useState(false);
//   const handleDelete = () => {
//     console.log("Deleting task at index:", props.index);
//     props.removeTask(props.index);
//   };

//   const handleDone = () => {
//     props.doneTask(props.index);
//   };

//   const handleEdit = () => {
//     props.editTask(props.index);
//     props.setEditing(true);
//   };

//   const handleEditChange = (e) => {
//     setEditedValue(e.target.value);
//   };
  
//   const handleEditSubmit = () => {
//     // Save the edited value
//     props.editItem(props.index, editedValue);
//     props.setEditing(false); // Exit edit mode
//   };

//   const editItem = () =>{
//     editTask(value);
//     setValue("");
//   }

  

//   return (
//     <>
//       <div className="bg-primary my-2 d-flex justify-content-between p-2 list-task-body w-75 m-4">
//         <div>
//         {props.isEditing ? (
//             <Form.Control
//               type="text"
//               value={editedValue}
//               onChange={handleEditChange}
//             />
//           ) : (
//             <p className={`text-white m-1 ${props.task.done && 'strike'}`}>{props.task.task} value={value}</p>

//            )} 
//         </div>
//         <div className="d-flex gap-0">
//           <Button className="mx-1 bg-primary btn-sm" onClick={handleDelete}>
//             <AiFillDelete />
//           </Button>
//           {props.isEditing ? (
//             <Button className="mx-1 bg-primary btn-sm" onClick={handleEditSubmit}>
//             <MdEdit />
//             </Button>
//           ):( 
//              <Button className="mx-1 bg-primary btn-sm" onClick={handleEdit}>
//           <MdEdit />
//         </Button>
//         )}
         
//           <Button className="mx-1 bg-primary btn-sm" onClick={handleDone}>
//           <MdOutlineDoneAll />
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ListTask;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit, MdOutlineDoneAll } from "react-icons/md";

const ListTask = (props) => {
  const [editedValue, setEditedValue] = useState(props.task.task);
  const [isEditing, setEditing] = useState(false);
  const [editIndex,setEditIndex] = useState(null)

  const handleDelete = () => {
    console.log("Deleting task at index:", props.index);
    props.removeTask(props.index);
  };

  const handleDone = () => {
    props.doneTask(props.index);
  };

  const handleEdit = (index) => {
    if(!props.task.done){
        setEditedValue(props.task.task);
        setEditing(true);
        setEditIndex(index)
    }
  };



  const handleEditSubmit = () => {
    // props.editTask(props.index, editedValue); // Call editTask with the index and edited value
    console.log(editIndex);
    props.setTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        if (newTasks[editIndex]) {
          newTasks[editIndex].task = editedValue;
        }
        return newTasks;
      });
    setEditing(false);
  };

  return (
    <>
      <div className={`bg-primary my-2 d-flex justify-content-between p-2 list-task-body w-75 m-4 ${props.task.done && 'strike'}`}>
        <div>
          {isEditing ? (
            <Form.Control
              type="text"
              value={editedValue}
              onChange={(e) =>setEditedValue(e.target.value)}
            />
          ) : (
            <p className="text-white m-1">{props.task.task}</p>
          )}
        </div>
        <div className="d-flex gap-0">
          <Button className="mx-1 bg-primary btn-sm" onClick={handleDelete}>
            <AiFillDelete />
          </Button>
          {isEditing ? (
            <Button
              className="mx-1 bg-primary btn-sm"
              onClick={handleEditSubmit}
            >
              <MdOutlineDoneAll />
            </Button>
          ) : (
            <Button className="mx-1 bg-primary btn-sm" onClick={() => handleEdit(props.index)}>
              <MdEdit />
            </Button>
          )}
          <Button className="mx-1 bg-primary btn-sm" onClick={handleDone}>
            <MdOutlineDoneAll />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ListTask;
