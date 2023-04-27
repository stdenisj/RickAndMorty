import { Card, Grid, Typography } from "@mui/material";
import { Location } from "../../../Services/Server/Schema/graphql";

export function LocationDetailCard(props: {location: Location}){
    const { location } = props;

    return (
        <Grid item xs={12} component={Card} sx={{display: "flex"}}>
            <Grid item sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5">
                    Name: {location.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Dimension: {location.dimension}
                </Typography>
            </Grid>
        </Grid>
    )
}