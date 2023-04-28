import { Grid } from "@mui/material";
import { isMobile } from "../../Hooks/isMobile";
import { CharacterListCard } from "../../Components/CharacterListCard";
import { LoadingPage } from "../../Components/LoadingPage";
import { useAppData } from "../../Providers/AppDataProvider";

export function CharacterListPage(){
    const mobile = isMobile();
    const { charactersLoading, characters} = useAppData();

    if(charactersLoading)
        return <LoadingPage />

    return (
        <Grid container sx={{ p: mobile ? 2 : 1 }} justifyContent={mobile ? "center" : "normal"} spacing={2}>
            { characters.map(c => <CharacterListCard key={c!.name!} name={c!.name!} id={c!.id!} image={c!.image!} />)}
        </Grid>
    )
}