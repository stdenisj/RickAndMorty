import { useQuery } from "@apollo/client";
import { Get_Location, Get_Locations } from "./Queries";

export const LocationService = {
    getLocations: (page: number) => useQuery(Get_Locations, { variables: { page}}),
    getLocation: (id: string) => useQuery(Get_Location, { variables: { id }})
}