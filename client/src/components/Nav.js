"use client";

import React from "react";
import { List } from "@mui/material";
import NavItem from "./NavItem";

const Nav = ({ items, moveItem, handleEdit }) => {
  return (
    <List>
      {items?.map((item, index) => (
        <NavItem
          key={item?.id}
          item={item}
          index={index}
          moveItem={moveItem}
          handleEdit={handleEdit}
        />
      ))}
    </List>
  );
};

export default Nav;
