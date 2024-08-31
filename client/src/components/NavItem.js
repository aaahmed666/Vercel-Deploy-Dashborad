"use client";
import React, { useState, useEffect } from "react";
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

const NavItem = ({ item, index, moveItem, handleEdit, isEditing, level }) => {
  const [open, setOpen] = useState(false);
  const [localItem, setLocalItem] = useState(item);
  const [isItemEditing, setIsItemEditing] = useState(false);
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

  useEffect(() => {
    setLocalItem(item); // Update localItem when item changes
    if (!isEditing) {
      setOpen(false);
    }
  }, [item, isEditing]);

  const hasChildren = item?.children && item?.children?.length > 0;

  const handleChange = (e) => {
    const updatedItem = { ...localItem, [e.target.name]: e.target.value };
    setLocalItem(updatedItem);
  };

  const handleToggleVisibility = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    const updatedItem = { ...localItem, visible: !localItem.visible };
    setLocalItem(updatedItem);
    handleEdit(updatedItem, item.id); // Use item.id for updates
  };

  const handleEditToggle = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    if (isItemEditing) {
      handleEdit(localItem, item.id); // Use item.id for updates
    }
    setIsItemEditing(!isItemEditing);
  };

  const handleListItemClick = () => {
    if (!isItemEditing) {
      setOpen(!open);
    }
  };

  if (item?.visible === false && !isEditing) {
    return null;
  }

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: isItemEditing ? "#e0f7fa" : "#e9e9e9",
        marginBottom: 1,
        borderRadius: "5px",
        cursor: isEditing ? "move" : "default",
        width: "100%",
        paddingLeft: level * 2,
      }}
    >
      <ListItem
        button
        onClick={handleListItemClick}
        sx={{ display: "flex", alignItems: "center", padding: 1 }}
      >
        {isItemEditing ? (
          <TextField
            name="title"
            value={localItem?.title}
            onChange={handleChange}
            variant="standard"
            size="small"
            style={{ marginRight: 8, flexGrow: 1 }}
            onClick={(e) => e.stopPropagation()} // Prevents click from bubbling
          />
        ) : (
          <ListItemText
            primary={localItem?.title}
            sx={{
              opacity: localItem?.visible === false ? 0.5 : 1,
              flexGrow: 1,
            }}
          />
        )}

        {isEditing && (
          <>
            <IconButton
              onClick={handleToggleVisibility}
              size="small"
              aria-label="toggle visibility"
              sx={{ marginLeft: 1 }}
            >
              {localItem?.visible !== false ? (
                <Visibility />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>

            <IconButton
              onClick={handleEditToggle}
              size="small"
              aria-label={isItemEditing ? "save" : "edit"}
              sx={{ marginLeft: 1 }}
            >
              {isItemEditing ? <Check /> : <Edit />}
            </IconButton>
          </>
        )}

        {hasChildren ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
      {hasChildren && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <div>
            {item?.children?.map((child) => (
              <NavItem
                key={child?.id} // Ensure each child has a unique key
                item={child}
                index={child.index} // Ensure child.index is correctly passed
                moveItem={moveItem}
                handleEdit={handleEdit}
                isEditing={isEditing}
                level={level + 1}
              />
            ))}
          </div>
        </Collapse>
      )}
    </Box>
  );
};

export default NavItem;
