import { Grid } from "@mui/material";
import { isMobile } from "../../Hooks/isMobile";
import { LoadingPage } from "../../Components/LoadingPage";
import { LocationListCard } from "./Components/LocationListCard";
import { useAppData } from "../../Providers/AppDataProvider";

export function LocationListPage(){
    const mobile = isMobile();
    const { locationsLoading, locations: Locations} = useAppData();

    if(locationsLoading)
        return <LoadingPage />

    return (
        <Grid container sx={{ p: mobile ? 2 : 1 }} justifyContent={mobile ? "center" : "normal"} spacing={2}>
            { Locations.map(l => <LocationListCard key={l!.name!} name={l?.name!} dimension={l?.dimension!} id={l?.id!} />)}
        </Grid>
    )
}