"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import JobDetails from "../components/JobDetails";
import Header from "./Header";
import { fetchNavItems, trackReorder, saveNavItems } from "../utils/api";

const HomePage = () => {
  const [navItems, setNavItems] = useState([]);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    fetchNavItems()
      .then(setNavItems)
      .catch((error) =>
        console.error("Error fetching navigation data:", error)
      );
  }, []);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...navItems];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setNavItems(updatedItems);

    trackReorder(movedItem.id, fromIndex, toIndex).catch((error) =>
      console.error("Error tracking navigation reorder:", error)
    );
  };

  const handleEdit = (updatedItem, index) => {
    const updatedItems = [...navItems];
    updatedItems[index] = updatedItem;
    setNavItems(updatedItems);

    saveNavItems(updatedItems).catch((error) =>
      console.error("Error saving navigation data:", error)
    );
  };

  const handleToggleEditMode = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
      >
        <Header />

        <Box
          display="flex"
          flexDirection="column"
          flex={1}
        >
          {isMobile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px"
              sx={{
                backgroundColor: "white",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "gray",
                  color: "white",
                  width: "100%",
                }}
              >
                Companies
              </Button>
              <IconButton
                onClick={() => setMobileNavOpen(true)}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {!isMobile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              padding="10px"
              sx={{
                backgroundColor: "white",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <IconButton
                onClick={handleToggleEditMode}
                sx={{ color: "black" }}
              >
                <SettingsIcon />
              </IconButton>
            </Box>
          )}

          <Box
            display="flex"
            flex={1}
          >
            {!isMobile && (
              <Box
                sx={{
                  width: 300,
                  backgroundColor: "white",
                  padding: "10px",
                  boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
                  marginTop: 2,
                }}
              >
                <Nav
                  items={navItems}
                  moveItem={moveItem}
                  handleEdit={handleEdit}
                  isEditing={isEditing}
                />
              </Box>
            )}

            <Container sx={{ marginTop: 2, flex: 1 }}>
              <JobDetails />
            </Container>

            {isMobile && (
              <MobileNav
                open={mobileNavOpen}
                onClose={() => setMobileNavOpen(false)}
                items={navItems}
                moveItem={moveItem}
                handleEdit={handleEdit}
                isEditing={isEditing}
              />
            )}
          </Box>
        </Box>
      </Box>
    </DndProvider>
  );
};

export default HomePage;
