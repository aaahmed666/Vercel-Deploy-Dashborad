import React from "react";
import NavItem from "./NavItem";

const Nav = ({ items, moveItem, handleEdit, isEditing }) => {
  return (
    <div>
      {items.map((item, index) => (
        <NavItem
          key={item.id}
          item={item}
          index={index}
          moveItem={moveItem}
          handleEdit={handleEdit}
          isEditing={isEditing}
        />
      ))}
    </div>
  );
};

export default Nav;
