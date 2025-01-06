// src/ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Apollo Client yapılandırmasını yapıyoruz
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // GraphQL endpoint'i buraya girin
  cache: new InMemoryCache(),
});

export default client;
