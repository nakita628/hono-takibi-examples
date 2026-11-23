import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/elasticache/2015-02-02/openapi.yaml',
  output: './src/elasticache/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/elasticache/types.ts' },
  client: { output: './src/elasticache/client.ts', baseUrl: '/' },
  rpc: { output: './src/elasticache/rpc.ts', parseResponse: true },
  swr: { output: './src/elasticache/hooks/swr.ts' },
  'tanstack-query': { output: './src/elasticache/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elasticache/hooks/preact-query.ts' },
  'solid-query': { output: './src/elasticache/hooks/solid-query.ts' },
  'vue-query': { output: './src/elasticache/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elasticache/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elasticache/hooks/angular-query.ts' },
  docs: {
    output: './src/elasticache/api.md',
    curl: true,
    baseUrl: 'https://elasticache.us-east-1.amazonaws.com',
  },
})
