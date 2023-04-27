import { TypedDocumentNode, gql } from "@apollo/client";
import { Character, Characters, QueryCharacterArgs, QueryCharactersArgs } from "../Server/Schema/graphql";

export const Get_Characters: TypedDocumentNode<{ characters: Characters}, QueryCharactersArgs> = gql`
    query GetCharacters($page: Int!, $filter: FilterCharacter)
    {
        characters(page: $page, filter: $filter)
        {
            results {
                id
                name
                image
            }
        }
    }
`;

export const Get_Character: TypedDocumentNode<{character: Character}, QueryCharacterArgs> = gql`
    query GetCharacter($id: ID!)
    {
        character(id: $id)
        {
            name
            species
            gender
            image
            origin {
                id
                name
              }
              location {
                id
                name
              }
        }
    }
`;
