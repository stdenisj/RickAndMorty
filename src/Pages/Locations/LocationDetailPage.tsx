import { Button, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { isMobile } from "../../Hooks/isMobile";
import { LoadingPage } from "../../Components/LoadingPage";
import { useMemo } from "react";
import { LocationService } from "../../Services/Locations/LocationService";
import { LocationDetailCard } from "./Components/LocationDetailCard";
import { CharacterListCard } from "../../Components/CharacterListCard";
import { GridGrow } from "../../Components/GridGrow";

export function LocationDetailPage(){
    const mobile = isMobile();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string}>();
    const { loading, data } = LocationService.getLocation(id!);
    const location = useMemo(() => data ? data.location : null, [loading, data])

    if(loading)
        return <LoadingPage />

    return (
        <Grid container sx={{ height: 1/1, overflowY: "hidden" }}>
            <Grid item xs={12} sx={{ height: "8%"}} >
                <Button variant="text" onClick={() => navigate(-1)}>back</Button>
            </Grid>
            <Grid container item sx={{ height: "20% ", mb: 2}} justifyContent={mobile ? "center" : "normal"}>
                {location && <LocationDetailCard location={location} />}
            </Grid>
            {location && location.residents && 
                <>
                    <Grid item sx={{ height: "69%", overflowY: "scroll"}} container justifyContent={mobile ? "center" : "normal"} spacing={2}>
                        {location.residents.map(r => <CharacterListCard id={r!.id!} name={r!.name!} image={r!.image!} />)}
                    </Grid>
                </>
            }
        </Grid>
    );
}