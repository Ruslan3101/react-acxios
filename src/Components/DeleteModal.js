import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {
const {modal, toggle, deleteTask, task} = props
function okButtonHandler(){
    toggle();
    deleteTask(task._id);
}
    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                   Are you sure you wanna delete task: <b> {props.task.name} </b>
                </ModalBody>
                <ModalFooter>
                    <Button  type="button" className="btn btn-danger"  onClick={okButtonHandler}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;