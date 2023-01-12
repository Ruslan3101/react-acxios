import React from 'react';
import Task from "./Task";

const Column = (props) => {
    const {status, tasks, updateTask, changePriority, moveTask, priorities, statuses, deleteTask}= props
    return (
        <div className="col">
            <h2>
            {status.title}
            </h2>
            {tasks.filter(el => el.status === status.title)
                .map(task=>
                    <Task
                        task={task}
                        key={task._id}
                        updateTask={updateTask}
                        changePriority={changePriority}
                        priorities={priorities}
                        moveTask={moveTask}
                        statuses={statuses}
                        deleteTask={deleteTask}
                    />)}
        </div>
    );
};

export default Column;
