import { Grid } from "@mui/material";
import { isMobile } from "../../Hooks/isMobile";
import { CharacterService } from "../../Services/Characters/CharacterService";
import { useMemo, useState } from "react"
import { CharacterListCard } from "../../Components/CharacterListCard";
import { LoadingPage } from "../../Components/LoadingPage";

export function CharacterListPage(){
    const mobile = isMobile();

    const [pageNumber, setPageNumber] = useState(1)
    const { loading, data } = CharacterService.getCharacters(pageNumber);
    const characterData = useMemo(() => data ? data!.characters!.results! : null, [data, loading])

    if(loading)
        return <LoadingPage />

    return (
        <Grid container sx={{ p: mobile ? 2 : 1 }} justifyContent={mobile ? "center" : "normal"} spacing={2}>
            { characterData && characterData.map(c => <CharacterListCard key={c!.name!} name={c!.name!} id={c!.id!} image={c!.image!} />)}
        </Grid>
    )
}