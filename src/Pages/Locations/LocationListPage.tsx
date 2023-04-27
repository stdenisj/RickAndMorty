import { Grid } from "@mui/material";
import { isMobile } from "../../Hooks/isMobile";
import { useMemo, useState } from "react"
import { LoadingPage } from "../../Components/LoadingPage";
import { LocationService } from "../../Services/Locations/LocationService";
import { LocationListCard } from "./Components/LocationListCard";

export function LocationListPage(){
    const mobile = isMobile();

    const [pageNumber, setPageNumber] = useState(1)
    const { loading, data } = LocationService.getLocations(pageNumber);
    const locationData = useMemo(() => data ? data!.locations!.results! : null, [data, loading])

    if(loading)
        return <LoadingPage />

    return (
        <Grid container sx={{ p: mobile ? 2 : 1 }} justifyContent={mobile ? "center" : "normal"} spacing={2}>
            { locationData && locationData.map(l => <LocationListCard key={l!.name!} name={l?.name!} dimension={l?.dimension!} id={l?.id!} />)}
        </Grid>
    )
}