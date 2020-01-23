import React from 'react'
import TaskBodyColumn from './taskBodyColumn';

class TaskBody extends React.Component {
    groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    render() {
        let { data = [], taskData = [], connectDropTarget, isOver,
            canDrop, } = this.props;
        let modifiedData = this.groupBy(taskData, "status");
        return (
            <div className="container__body container__column">
                <ul>
                    {
                        data.map((column, index) => {
                            let columnData = modifiedData[column.key] || [];
                            return (<TaskBodyColumn key={index} columnData={columnData} column={column} handleDrop={this.props.handleDrop}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TaskBody;