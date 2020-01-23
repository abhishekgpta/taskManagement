import React from 'react';

class CreateTask extends React.Component {
    render() {
        let { modalName,modalOpen } = this.props;
        return (
            <div className={modalOpen ? "createTask_overlay--display createTask_overlay" : "createTask_overlay"} onClick={this.props.handleAdd}>
                <div className="createTask_modal-content" onClick={(e)=>{e.stopPropagation()}}>
                    <div className="modal-header">
                        <span className="close" onClick={this.props.modalClose}>&times;</span>
                        <h2>Add Task</h2>
                    </div>
                    <div className="modal-body">
                        <h5  className="modal-body-content">{`Create Task with status `}<span>{modalName}</span></h5>
                        <input type="text" id="taskHeading"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateTask;