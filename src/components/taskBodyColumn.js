import React from 'react';
import TaskBodyContent from './taskBodyContent';
import { DropTarget } from 'react-dnd';
class TaskBodyColumn extends React.Component{
    render(){
        let { columnData, data = [], taskData = [], connectDropTarget, isOver,
            canDrop,column } = this.props;
        const isActive = isOver && canDrop;
        let backgroundColor = '#f4f5f7';
        let border="2px solid #fff";
        if (isActive) {
            backgroundColor = '#92d992';
            border = "2px dashed #094309";
            
        } else if (canDrop) {
            backgroundColor = 'rgb(148, 175, 228)';
            border = "2px dashed  rgb(31, 47, 80)";
        }
        return(
            <li   ref={connectDropTarget} style={{ backgroundColor,border }}>
            <div className="container__body__content">
            {
                columnData.map((taskData, task_index) => {
                    return <TaskBodyContent key={`${task_index}-${column.key}-data`}  taskData={taskData} handleDrop={this.props.handleDrop} />
                })
            }
        </div>
        </li>
        )
    }
}

export default DropTarget(
    "card",
    {
        drop: (props, monitor,component) => {
            props.handleDrop({ ...monitor.getItem(),...props.column});
            return { ...monitor.getItem(),...props.column};
        },
    },

    (connect, monitor) => {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }
    },
)(TaskBodyColumn)