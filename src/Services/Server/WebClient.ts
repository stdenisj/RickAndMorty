import { ApolloClient, InMemoryCache } from "@apollo/client";

export const WebClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});