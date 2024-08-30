"use client";
import React from "react";
import { Drawer, List, IconButton, Box } from "@mui/material";
import { Settings, ArrowBack } from "@mui/icons-material";
import NavItem from "./NavItem";

const MobileNav = ({ open, onClose, items, moveItem, handleEdit }) => {
  return (
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
          <IconButton sx={{ color: "black" }}>
            <Settings />
          </IconButton>
        </Box>

        <List>
          {items.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              index={index}
              moveItem={moveItem}
              handleEdit={handleEdit}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
