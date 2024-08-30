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
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
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
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap={1}
            >
              <Typography
                variant="body1"
                component="div"
              >
                Set Alert
              </Typography>
              <Switch color="success" />
            </Box>
          </Grid>
        </Grid>
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
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Favorite sx={{ fontSize: 40, color: "#4caf50" }} />
              <Box>
                <Typography variant="h6">Gaming UI Designer</Typography>
                <Typography variant="body2">Rock Star Games</Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              mt={1}
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
              mt={1}
            >
              <DateRange color="action" />
              <Typography
                variant="body2"
                color="textSecondary"
              >
                10 days ago
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  border: "2px solid #4caf50",
                  padding: 2,
                }}
              >
                <IconButton>
                  <Favorite color="success" />
                </IconButton>
              </Box>

              <Typography
                variant="h6"
                mt={2}
              >
                Job Preferences
              </Typography>
              <Grid
                container
                spacing={1}
                mt={1}
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <Card
                    sx={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #4caf50",
                      padding: 1,
                    }}
                  >
                    <Typography variant="body2">
                      0 - 3 years experience
                    </Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <Card
                    sx={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #4caf50",
                      padding: 1,
                    }}
                  >
                    <Typography variant="body2">Full Time</Typography>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <Card
                    sx={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #4caf50",
                      padding: 1,
                    }}
                  >
                    <Typography variant="body2">Remote</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #4caf50",
            marginTop: 2,
            paddingTop: 2,
          }}
        />

        <Box
          sx={{
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
