import { useQuery } from "@apollo/client";
import { Get_Character, Get_Characters } from "./Queries";

export const CharacterService = {
    getCharacters: (page: number) => useQuery(Get_Characters, { variables: { page}}),
    getCharacter: (id: string) => useQuery(Get_Character, { variables: { id }})
}