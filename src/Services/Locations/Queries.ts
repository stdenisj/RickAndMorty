import { TypedDocumentNode, gql } from "@apollo/client";
import { Location, Locations, QueryLocationArgs, QueryLocationsArgs } from "../Server/Schema/graphql";

export const Get_Locations: TypedDocumentNode<{ locations: Locations}, QueryLocationsArgs> = gql`
    query GetLocations($page: Int!, $filter: FilterLocation)
    {
        locations(page: $page, filter: $filter)
        {
            results {
                id
                name
                dimension
            }
        }
    }
`;

export const Get_Location: TypedDocumentNode<{location: Location}, QueryLocationArgs> = gql`
    query GetLocation($id: ID!)
    {
        location(id: $id)
        {
            name
            dimension
            residents {
                id
                name
                image
            }
        }
    }
`;
