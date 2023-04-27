import { TypedDocumentNode, gql, useQuery } from "@apollo/client";
import { Characters, QueryCharactersArgs } from "__generated__/graphql";

const Get_Characters: TypedDocumentNode<Characters, QueryCharactersArgs> = gql`
    query GetCharacters($page: Int!, $filter: FilterCharacter)
    {
        characters(page: $page, filter: $filter) {
            results {
            id
            name
            image
            }
        }
    }
`;


export const CharacterService = {
    getCharacters: (page: number) => useQuery(Get_Characters, { variables: { page: page}})
}