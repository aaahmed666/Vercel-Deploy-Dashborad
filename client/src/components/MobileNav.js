"use client";
import React, { useState } from "react";
import { Drawer, List, IconButton, Box } from "@mui/material";
import { Settings, ArrowBack } from "@mui/icons-material";
import NavItem from "./NavItem";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableNavItem = ({ item, index, moveItem, handleEdit, isEditing }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "NAV_ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index && isEditing) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    canDrop: () => isEditing,
  });

  const [, drag] = useDrag({
    type: "NAV_ITEM",
    item: { index },
    canDrag: isEditing,
  });

  drag(drop(ref));

  return (
    <div ref={ref}>
      <NavItem
        item={item}
        index={index}
        moveItem={moveItem}
        handleEdit={handleEdit}
        isEditing={isEditing}
        level={0}
      />
    </div>
  );
};

const MobileNav = ({
  open,
  onClose,
  items,
  moveItem,
  handleEdit,
  isEditing,
}) => {
  const [editMode, setEditMode] = useState(isEditing);

  const handleEditToggle = () => {
    const newEditMode = !editMode;
    setEditMode(newEditMode);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{
          width: "100%",
          flexShrink: 0,
          height: "100%",
          maxWidth: "none",
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "100%",
            padding: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 2,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{ color: "black" }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={handleEditToggle}
              sx={{ color: "black" }}
            >
              <Settings />
            </IconButton>
          </Box>

          <List>
            {items.map((item, index) => (
              <DraggableNavItem
                key={item.id}
                item={item}
                index={index}
                moveItem={moveItem}
                handleEdit={handleEdit}
                isEditing={editMode}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </DndProvider>
  );
};

export default MobileNav;
