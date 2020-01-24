import React from 'react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import TaskHeaders from './taskHeaders';
import TaskBody from './taskBody';
import CustomDragLayer from './customDragLayer';
import AddColumn from './addColumn';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: JSON.parse(localStorage.getItem("task_type")),
            taskData: JSON.parse(localStorage.getItem("task_list"))
        }
    }
    handleDrop = (result) => {
        this.setState((prevState) => {
            let updatedData = prevState.taskData.filter((data) => data.id !== result.id).concat({ heading: result.heading, id: result.id, status: result.key })
            return {
                taskData: updatedData
            }
        })
    }
    handleAddData = (task, type) => {
        this.setState((prevState) => {
            return {
                [type]: prevState[type].concat(task)
            }
        })
    }
    render() {
        let { columns, taskData } = this.state;
        return (
            <div>
                <div className="container" style={{ width: "10%", float: "left" }}>
                    <AddColumn handleAddData={this.handleAddData} />
                </div>
                <div className="container" style={{ width: "90%", float: "right" }}>
                    <DndProvider backend={Backend}>
                        <TaskHeaders data={columns} handleAddData={this.handleAddData} />
                        <TaskBody taskData={taskData} data={columns} handleDrop={this.handleDrop} />
                        <CustomDragLayer />
                    </DndProvider>

                </div>
            </div>
        )
    }
}
export default Main;