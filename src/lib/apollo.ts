import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4q3g4o52tya01xshulzftw2/master",
    cache: new InMemoryCache()
})
