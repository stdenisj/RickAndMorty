import { CharacterService } from "../Services/Characters/CharacterService";
import { LocationService } from "../Services/Locations/LocationService";
import { Character, Location } from "../Services/Server/Schema/graphql";
import { PropsWithChildren, createContext, useContext } from "react";

interface AppDataContext {
    charactersLoading: boolean;
    characters: Character[];
    locationsLoading: boolean;
    locations: Location[];
}

const AppDataReactContext = createContext<AppDataContext>({} as any);

export function useAppData() {
	return useContext(AppDataReactContext);
}

export function AppDataProvider(props: PropsWithChildren){
    const { loading: charactersLoading, data: characterData } = CharacterService.getCharacters(1);
    const { loading: locationsLoading, data: locationData } = LocationService.getLocations(1);

    return (
        <AppDataReactContext.Provider value={{
            charactersLoading,
            characters: characterData ? characterData.characters!.results! as Character[] : [],
            locationsLoading: locationsLoading,
            locations: locationData ? locationData.locations!.results! as Location[] : []
        }}>
            {props.children}
        </AppDataReactContext.Provider>
    )


    
}
