"use client";
import React from "react";
import { useDrop } from "react-dnd";

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isOver ? "lightblue" : "lightgray",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Drop here
    </div>
  );
};

export default DroppableArea;
