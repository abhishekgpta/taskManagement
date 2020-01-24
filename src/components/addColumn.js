import React from 'react';
import add from './add.svg';
class AddColumn extends React.Component {
    state = {
        enableEdit: false,
        cloumnValue: "",
        inputFocus:false
    }
    handleAdd = () => {
        this.setState({ enableEdit: true })
    }
    handleChange = (e) => {
        this.setState({ cloumnValue: e.target.value })
    }
    handleClose = () => {
        this.setState({ enableEdit: false })
    }
    handleSave = (e) => {
        if (this.state.cloumnValue) {
            let data = {
                name: this.state.cloumnValue,
                key: this.state.cloumnValue
            }
            this.props.handleAddData(data, "columns")
            this.setState({
                enableEdit: false,
                cloumnValue: ""
            })
        }
    }
    render() {
        return (
            <div className={this.state.enableEdit ? "add_column_edit  add_column" : " add_column"}>
                <ul style={{ listStyle: "none", padding: "0px" }}>
                    <li>
                        <div >
                            {
                                this.state.enableEdit ? <div className="container__header__add_column" >
                                    <input type="text" value={this.state.cloumnValue} id="addColumn" onFocus={()=>{this.setState({inputFocus:true})}} onBlur={()=>{this.setState({inputFocus:false})}} onChange={this.handleChange} />
                                    <label  htmlFor="addColumn" className={this.state.inputFocus?"active":""}>Add Column</label>
                                    <div>
                                        <div className="close" onClick={this.handleSave}>&#10004;</div>
                                        <div className="close" onClick={this.handleClose} >&#10006;</div>
                                    </div>
                                </div> :
                                    <div className="container__header__content ">
                                        <span>
                                            {<span><small><strong>{"ADD COLUMN"}</strong></small></span>}
                                            {<button style={{ border: "0px", outline: "none", verticalAlign: "middle", cursor: "pointer",backgroundColor:"transparent",
                                        paddingLeft: "4px",
                                        paddingRight: "0" }} name={"add_column"} onClick={this.handleAdd}>
                                                <img src={add} alt="" width="15px" name={"add_column"} />
                                            </button>}</span>
                                    </div>
                            }
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default AddColumn;