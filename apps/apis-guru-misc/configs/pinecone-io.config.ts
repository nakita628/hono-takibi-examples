import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pinecone.io/20230401.1/openapi.yaml',
  output: './src/pinecone-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pinecone-io/types.ts' },
  client: { output: './src/pinecone-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/pinecone-io/rpc.ts', parseResponse: true },
  swr: { output: './src/pinecone-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/pinecone-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pinecone-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/pinecone-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/pinecone-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pinecone-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pinecone-io/hooks/angular-query.ts' },
  docs: {
    output: './src/pinecone-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
