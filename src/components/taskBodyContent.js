import React from 'react'
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
class TaskBodyContent extends React.Component{
    componentDidMount() {
        const { connectDragPreview } = this.props
        if (connectDragPreview) {
          // Use empty image as a drag preview so browsers don't draw it
          // and we can draw whatever we want on the custom drag layer instead.
          connectDragPreview(getEmptyImage(), {
            // IE fallback: specify that we'd rather screenshot the node
            // when it already knows it's being dragged so we can hide it with CSS.
            captureDraggingState: true,
          })
        }
      }
    render(){
        let {taskData={},connectDragSource} = this.props;
        return(
            <div className="container__body__content__card" ref={connectDragSource}>{taskData.heading}</div>
        )
    }
};
export default DragSource(
  "card",
  {
    beginDrag: props => {
        return { id: props.taskData.id,heading:props.taskData.heading }},
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview:connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }),
)(TaskBodyContent)