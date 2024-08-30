import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        padding: "10px 15px",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontSize: isMobile ? "18px" : "24px",
            color: "white",
            marginRight: isMobile ? "10px" : "120px",
          }}
        >
          i<span style={{ color: "green" }}>Z</span>AM
        </div>

        {isMobile ? (
          <>
            {showSearch ? (
              <TextField
                placeholder="Search by name, jobs"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          backgroundColor: "green",
                          padding: "4px",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <SearchIcon
                          style={{ color: "white", fontSize: "16px" }}
                        />
                      </Box>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowSearch(false)}>
                        <CloseIcon style={{ color: "black" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "white",
                    borderRadius: "10px",
                    paddingLeft: "10px",
                    height: "40px",
                    width: "200px",
                  },
                }}
                sx={{ marginTop: 1 }}
              />
            ) : (
              <IconButton
                onClick={handleSearchToggle}
                sx={{ color: "white" }}
              >
                <SearchIcon />
              </IconButton>
            )}
          </>
        ) : (
          <TextField
            placeholder="Search by name, jobs"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      backgroundColor: "green",
                      padding: "5px",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <SearchIcon style={{ color: "white" }} />
                  </Box>
                </InputAdornment>
              ),
              style: {
                backgroundColor: "white",
                borderRadius: "10px",
                paddingLeft: "10px",
                height: "50px",
              },
            }}
            sx={{ width: "400px" }}
          />
        )}
      </div>

      {isMobile ? (
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          flexDirection="row"
          mt={1}
        >
          <IconButton sx={{ color: "white" }}>
            <HomeIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <WorkIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <LoginIcon />
          </IconButton>
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          gap={6}
          flexDirection="row"
        >
          <Box textAlign="center">
            <IconButton sx={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
            <Typography
              variant="body2"
              sx={{ color: "white" }}
            >
              Home
            </Typography>
          </Box>

          <Box textAlign="center">
            <IconButton sx={{ color: "white" }}>
              <WorkIcon />
            </IconButton>
            <Typography
              variant="body2"
              sx={{ color: "white" }}
            >
              Jobs
            </Typography>
          </Box>
        </Box>
      )}
    </header>
  );
};

export default Header;
