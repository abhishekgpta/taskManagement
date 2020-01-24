import React from 'react';
import md5 from 'md5';

class CreateTask extends React.Component {
    state={
        taskHeading:"",
        inputFocus:false
    }
    handleChange=(e)=>{
        const value = e.target.value;
        this.setState({taskHeading:value})
    }
    handleSubmit=(e)=>{
        let { modalName,modalOpen } = this.props;
        if(this.state.taskHeading){
            let data ={
                heading:this.state.taskHeading,
                status:modalName,
                id:md5(this.state.taskHeading)
                
            }
            this.setState({taskHeading:""})
            this.props.handleAddData(data,"taskData");
            this.props.modalClose(e);
        }
    }
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
                        <input type="text" id="taskHeading" onChange={this.handleChange} onFocus={()=>{this.setState({inputFocus:true})}} onBlur={()=>{this.setState({inputFocus:false})}} value={this.state.taskHeading}/>
                        <label  htmlFor="taskHeading" className={this.state.inputFocus?"active":""}>Task Name</label>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.handleSubmit}>Submit</button>
                        </div>
                </div>
            </div>
        )
    }
}
export default CreateTask;