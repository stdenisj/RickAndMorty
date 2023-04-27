import { Button, Grid } from "@mui/material";
import { CharacterService } from "../../Services/Characters/CharacterService";
import { useNavigate, useParams } from "react-router-dom";
import { isMobile } from "../../Hooks/isMobile";
import { LoadingPage } from "../../Components/LoadingPage";
import { CharacterDetailCard } from "./Components/CharacterDetailCard";
import { useMemo } from "react";

export function CharacterDetailPage(){
    const mobile = isMobile();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string}>();
    const { loading, data } = CharacterService.getCharacter(id!);
    const character = useMemo(() => data ? data.character : null, [loading, data])

    if(loading)
        return <LoadingPage />

    return (
        <Grid container sx={{ pt: mobile ? 2 : 0}} justifyContent={mobile ? "center" : "normal"}>
            <Grid item xs={12}>
                <Button variant="text" onClick={() => navigate(-1)}>back</Button>
            </Grid>
            {character && <CharacterDetailCard character={character} />}
        </Grid>
    );
}