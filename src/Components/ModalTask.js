import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText, InputGroup, Input, buttonColor} from 'reactstrap';

function ModalTask(props) {
    const {priorities, statuses,addNewTask, buttonColor, buttonLable, task, updateTask} = props;

    const [modal, setModal] = useState(false);
    const [name, setName] = useState(buttonLable === 'Update' ? task.name : '');
    const [description, setDescription] = useState(buttonLable === 'Update' ? task.description : '');
    const [priority, setPriority] = useState(buttonLable === 'Update' ? task.priority :  priorities[0]);
    const [status, setStatus] = useState(buttonLable === 'Update' ? task.status : statuses[0]?.status);

    const addTaskButtonHandler = () => {
        const newTask = {
            name,
            description,
            priority,
            status
        }
        buttonLable === 'Update' ? updateTask({...newTask, _id:  task._id}) : addNewTask(newTask)

    toggle()
    }
    const toggle = () => {
        setModal(!modal);
        setName(buttonLable === 'Update' ? task.name : '');
        setDescription(buttonLable === 'Update' ? task.description : '');
        setPriority(buttonLable === 'Update' ? task.priority :  priorities[0]);
        setStatus(buttonLable === 'Update' ? task.status : statuses[0]?.status);
    }


    return (
        <>
            <Button color={buttonColor} onClick={toggle}>
                {buttonLable}
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{buttonLable}</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>
                            Task name
                        </InputGroupText>
                        <Input placeholder=''
                               value={name}
                               onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Description
                        </InputGroupText>
                        <Input placeholder=""

                               value={description}
                               onChange={e => setDescription(e.target.value)}/>
                    </InputGroup>

                    <br/>

                    <div className="form-floating">
                        <select className="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                value={priority}
                                onChange={e => setPriority(e.target.value)}>
                            {priorities.map((el, i) =>
                                <option key={i} value={el}>{el}</option>
                            )}

                        </select>
                        <br/>
                        <label htmlFor="floatingSelect">Choose status</label>
                    </div>
                    <div className="form-floating">
                        <select className="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                value={status}
                                onChange={e => setStatus(e.target.value)}>
                            {statuses.map(el =>
                                <option key={el._id} value={el.status}>{el.status}</option>
                            )}

                        </select>
                        <label htmlFor="floatingSelect">Choose priority</label>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addTaskButtonHandler}>
                      Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

export default ModalTask;