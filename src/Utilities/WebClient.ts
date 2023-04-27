import { ApolloClient, ApolloLink, FetchResult, HttpLink, InMemoryCache, from } from "@apollo/client";
import { GraphQLError } from "graphql";
import { onError } from "@apollo/client/link/error";

type ErrorResponse = Omit<FetchResult, "data" | "errors"> & { errors: readonly GraphQLError[], error: true}
type SuccessResponse = Omit<FetchResult, "errors" | "data"> & { data: NonNullable<Record<string, any>>, success: true }

const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });

export const formatResponse = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    console.log(`response`, response)
    console.log(`operation`, operation)
    if(response.data){
      const typedResponse:SuccessResponse = { data: response.data!, success: true };
      return typedResponse;
    }

    if(response.errors){
      const typedResponse:ErrorResponse = { errors: response.errors!, error: true}
      return typedResponse
    }
  
    return response;
  });
});

export const WebClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});