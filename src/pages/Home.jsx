import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <>
      <Grid container spacing={2} display={"flex"}>
        <Grid item xs={8}>
          <Stack spacing={2} direction={"row"}>
            <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent></CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent></CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <Box height={20}  />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card sx={{ height: 60 + "vh" }}>
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 60 + "vh" }}>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
