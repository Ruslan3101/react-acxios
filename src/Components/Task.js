import React, {useState} from 'react';
import DeleteModal from "./DeleteModal";
import {Button} from "reactstrap";
import ModalTask from "./ModalTask";

const Task = (props) => {
const {task, updateTask, changePriority, moveTask, priorities, statuses, deleteTask} = props
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Priority: {task.priority}
                    <button
                            type="button" className="btn btn-outline-secondary"
                            disabled={+task.priority === priorities[priorities.length-1]}
                            onClick={()=> changePriority(task._id, +task.priority + 1)}
                    >↑</button>
                    <button
                            type="button" className="btn btn-outline-secondary"
                            disabled={+task.priority === priorities[0]}
                            onClick={()=> moveTask(task._id, +task.priority - 1)}
                    >↓</button>

                    </li>
                    <li className="list-group-item">Status: {task.status}</li>

                </ul>

                <div className="card-body">
                    <button type="button" className="btn btn-outline-primary"
                        disabled={task.status === statuses.map(el =>  el.status)[0]}
                        onClick={()=>moveTask(task._id, task.status, -1)}
                    >←</button>
                    {/*<button type="button" className="btn btn-primary" onClick={()=>updateTask(task._id)} >Update</button>*/}
                         {/*Button trigger modal*/}

                    <ModalTask buttonColor ={"primary"}
                               buttonLable={"Update"}
                               priorities={priorities}
                               statuses={statuses}
                               task={task}
                               updateTask={updateTask}
                    />


                    <Button  type="button" className="btn btn-danger" onClick={toggle}>
                        Delete
                    </Button>
                    <button type="button" className="btn btn-outline-primary"
                            disabled={task.status === statuses.map(el =>  el.status[statuses.length -1])}
                            onClick={()=> moveTask(task._id, task.status, 1) }
                    >→</button>
                    {modal && <DeleteModal task={task}
                                 toggle={toggle}
                                 modal={modal}
                                 deleteTask={deleteTask}
                                />
                    }

                </div>
            {/*{console.log(task.status )}*/}

        </div>
    );
};

export default Task;