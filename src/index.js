import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let taskData=[{
    heading:"watch Movie",
    status:"todo",
    id:1
},
{
    heading:"Study",
    status:"inprogress",
    id:2
},
{
    heading:"play",
    status:"inprogress",
    id:3
},
{
    heading:"code",
    status:"release",
    id:4
},{
    heading:"fight",
    status:"done",
    id:5
},]
let columns=[{
    name:"TO DO",
    key:"todo"
}
,{
    name:"IN PROGRESS",
    key:"inprogress"
},
{
    name:"DONE",
    key:"done"
},
{
    name:"RELEASE",
    key:"release"
}

];
let taskList = localStorage.getItem("task_list");
if(!taskList){
    localStorage.setItem("task_list",JSON.stringify(taskData));
}
let taskType = localStorage.getItem("task_type");
if(!taskType){
    localStorage.setItem("task_type",JSON.stringify(columns));
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
