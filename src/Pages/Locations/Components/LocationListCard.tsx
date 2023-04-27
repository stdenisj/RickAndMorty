import {
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
import { routes } from "../../../App";
  import { useNavigate } from "react-router";
  
  export function LocationListCard(props: { name: string, dimension: string, id: string }) {
    const { name, dimension, id } = props;
    const navigate = useNavigate();
  
    return (
      <Grid item key={name + id} xs={12} sm={6} md={4} lg={3} onClick={() => navigate(routes.resolve.locationsDetailPage(id))}>
          <Card>
              <CardContent>
                  <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                      }}
                  >
                     Planet: {name}
                  </Typography>
                  <Typography
                      gutterBottom
                      sx={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                      }}
                  >
                      Dimension: {dimension}
                  </Typography>
              </CardContent>
          </Card>
      </Grid>
    );
  }