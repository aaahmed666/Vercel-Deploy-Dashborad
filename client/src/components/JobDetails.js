"use client";
import React from "react";
import { Grid, Card, Typography, Box, IconButton, Switch } from "@mui/material";
import { LocationOn, DateRange, Favorite } from "@mui/icons-material";

const JobDetails = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card
        sx={{
          backgroundColor: "#e0f7e0",
          border: "1px solid #4caf50",
          padding: 2,
          marginBottom: 2,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Favorite sx={{ fontSize: 40, color: "#4caf50" }} />
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                >
                  UI Designer in Egypt
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  70 job positions
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Typography variant="body1">Set Alert</Typography>
              <Switch color="success" />
            </Box>
          </Box>
        </Box>
      </Card>

      <Card
        sx={{
          backgroundColor: "#ffffff",
          border: "1px solid #4caf50",
          padding: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Favorite color="action" />
                <Box>
                  <Typography variant="h6">Gaming UI Designer</Typography>
                  <Typography variant="body2">Rock Star Games</Typography>
                </Box>
              </Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  border: "2px solid #4caf50",
                }}
              >
                <Favorite sx={{ color: "#4caf50" }} />
              </IconButton>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              mt={2}
              gap={2}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={1}
              >
                <LocationOn color="action" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  Mansoura
                </Typography>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                gap={1}
              >
                <DateRange color="action" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  10 days ago
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={2}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                gap={2}
              >
                <Card
                  sx={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #4caf50",
                    padding: 1,
                    textAlign: "center",
                    minWidth: "fit-content",
                    flexShrink: 0,
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="body2">
                    0 - 3 years experience
                  </Typography>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #4caf50",
                    padding: 1,
                    textAlign: "center",
                    minWidth: "fit-content",
                    flexShrink: 0,
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="body2">Full Time</Typography>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #4caf50",
                    padding: 1,
                    textAlign: "center",
                    minWidth: "fit-content",
                    flexShrink: 0,
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="body2">Remote</Typography>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #4caf50",
            marginTop: 2,
            paddingTop: 2,
          }}
        >
          <Typography variant="body2">
            Creative/Design - IT / Software Development - Gaming
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default JobDetails;
