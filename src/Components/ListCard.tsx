import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Skeleton,
    Typography,
  } from "@mui/material";
import { Maybe } from "../__generated__/graphql";
  import { useNavigate } from "react-router";
  
  export function ListCard(props: { name?: Maybe<string>, image?: Maybe<string>, id?: number, loading: boolean }) {
    const { loading, name, image, id } = props;
    const navigate = useNavigate();
  
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            {loading 
            ? <Skeleton width={300} height={300}/>
            : <CardMedia image={image!} component="img" width={300} />
        }
          <CardContent>
            {loading
                ? <Skeleton />
                :
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
            }
          </CardContent>
        </Card>
      </Grid>
    );
  }