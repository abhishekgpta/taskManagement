import React from 'react';
import CreateTask from './createTask';
import add from './add.svg'
export default class TaskColumn extends React.Component {
    state = {
        modalOpen: false,
        modalName: ""
    }
    handleAdd = (e) => {
        e.stopPropagation()
        const name = e.target.name || "";
        this.setState((prevState) => {
            return {
                modalOpen: !prevState.modalOpen,
                modalName: name
            }
        })
    }
    modalClose = (e) => {
        e.stopPropagation();
        this.setState({ modalOpen: false })
    }
    render() {
        let { data = [] } = this.props;
        return (
            <div className="container__header container__column">
                <ul>
                    {
                        data.map((column, index) => {
                            return <li key={index}>
                                <div className="container__header__content">
                                    <span><span><strong>{column.name}</strong></span>
                                        <button style={{ border: "0px", outline: "none", verticalAlign: "middle", cursor: "pointer" }} name={column.key} onClick={this.handleAdd}>
                                            <img src={add} alt="" width="25px" name={column.key} />
                                        </button></span>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <CreateTask {...this.state} handleAdd={this.handleAdd} modalClose={this.modalClose} handleAddData={this.props.handleAddData} />
            </div>
        )
    }
} 