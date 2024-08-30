"use client";
import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  ListItem,
  ListItemText,
  Collapse,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Edit,
  Check,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const NavItem = ({ item, index, moveItem, handleEdit }) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "NAV_ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [, drag] = useDrag({
    type: "NAV_ITEM",
    item: { index },
  });

  drag(drop(ref));

  const hasChildren = item?.children && item?.children?.length > 0;

  const handleChange = (e) => {
    const updatedItem = { ...item, [e.target.name]: e.target.value };
    handleEdit(updatedItem, index);
  };

  const handleToggleVisibility = () => {
    handleEdit({ ...item, visible: !item.visible }, index);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "#e9e9e9",
        marginBottom: 1,
        borderRadius: "5px",
        cursor: "move",
        width: "100%",
      }}
    >
      <ListItem
        button
        onClick={() => setOpen(!open)}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {isEditing ? (
          <TextField
            name="title"
            value={item?.title}
            onChange={handleChange}
            variant="standard"
            size="small"
            style={{ marginRight: 8, flexGrow: 1 }}
          />
        ) : (
          <ListItemText
            primary={item?.title}
            sx={{ opacity: item?.visible === true ? 0.5 : 1, flexGrow: 1 }}
          />
        )}

        <IconButton
          onClick={handleToggleVisibility}
          size="small"
          aria-label="toggle visibility"
        >
          {item?.visible !== false ? <Visibility /> : <VisibilityOff />}
        </IconButton>

        <IconButton
          onClick={handleToggleEdit}
          size="small"
          aria-label={isEditing ? "save" : "edit"}
        >
          {isEditing ? <Check /> : <Edit />}
        </IconButton>

        {hasChildren ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
      {hasChildren && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <div>
            {item?.children?.map((child, childIndex) => (
              <NavItem
                key={child?.id}
                item={child}
                index={childIndex}
                moveItem={moveItem}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </Collapse>
      )}
    </Box>
  );
};

export default NavItem;
