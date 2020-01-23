import React, { Component } from "react";
import { DragLayer } from "react-dnd";

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: "none"
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
    // width:"100%"
    width:"340px"
    // backgroundColor:"#fffff",
    // border:"1px solid black",
    // boxShadow: "0px 1px 2px 0px rgba(9, 30, 66, 0.25)"
  };
}
const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
   

  }

class CustomDragLayer extends Component {
  render() {
    const isDragging = this.props.isDragging;
    if (!isDragging) {
      return null;
    }

    // You can specify acceptable type:
    if (this.props.itemType !== "card") {
      return null;
    }
    // The component will work only when dragging
    return (
      <div style={layerStyles} >
  <div style={getItemStyles(this.props)} className="container__body__content__card">{this.props.item.heading}</div>
      </div>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

export default DragLayer(collect)(CustomDragLayer); // eslint-disable-line new-cap