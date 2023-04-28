import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { routes } from "../App";
import { useNavigate } from "react-router";
  
  export function CharacterListCard(props: { name: string, image: string, id: string }) {
    const { name, image, id } = props;
    const navigate = useNavigate();
  
    return (
      <Grid item key={name + id} xs={12} sm={6} md={4} lg={3} onClick={() => navigate(routes.resolve.charactersDetailPage(id))}>
          <Card>
              <CardMedia image={image} component="img" width={300} height={300} />
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
                      {name}
                  </Typography>
              </CardContent>
          </Card>
      </Grid>
    );
  }