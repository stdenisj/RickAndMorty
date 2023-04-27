import { Card, Grid, Typography } from "@mui/material";
import { Character } from "../../../Services/Server/Schema/graphql";
import { Link } from "react-router-dom";
import { routes } from "../../../App";
import { isMobile } from "../../../Hooks/isMobile";

export function CharacterDetailCard(props: {character: Character}){
    const mobile = isMobile();
    const { character } = props;

    return (
        <Grid container item xs={12} md={8} component={Card} sx={{height: !mobile ? 300 : undefined, display: "flex"}}>
            <Grid item>
                <img 
                    src={character.image!}
                    height={300}
                    width={300} 
                    />
            </Grid>
            <Grid item  sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5">
                    Name: {character.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Species: {character.species}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Gender: {character.gender}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {"Planet of origin: "}
                    <Link to={routes.resolve.locationsDetailPage(character.origin!.id!)}>
                        {character.origin!.name}
                    </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {"Last known location: "}
                    <Link to={routes.resolve.locationsDetailPage(character.location!.id!)}>
                        {character.location!.name}
                    </Link>
                </Typography>

            </Grid>
        </Grid>
    )
}