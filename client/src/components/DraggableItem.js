"use client";
import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        backgroundColor: isDragging ? "lightgreen" : "lightgray",
        border: "1px solid black",
        cursor: "move",
      }}
    >
      {item.title}
    </div>
  );
};

export default DraggableItem;
