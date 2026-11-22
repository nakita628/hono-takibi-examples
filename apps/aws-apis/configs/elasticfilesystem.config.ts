import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticfilesystem/2015-02-01/openapi.yaml',
  output: './src/elasticfilesystem/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its tag or first
  // path segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/elasticfilesystem/types.ts' },
  client: { output: './src/elasticfilesystem/client.ts', baseUrl: '/' },
  rpc: { output: './src/elasticfilesystem/rpc.ts', parseResponse: true },
  swr: { output: './src/elasticfilesystem/hooks/swr.ts' },
  'tanstack-query': { output: './src/elasticfilesystem/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elasticfilesystem/hooks/preact-query.ts' },
  'solid-query': { output: './src/elasticfilesystem/hooks/solid-query.ts' },
  'vue-query': { output: './src/elasticfilesystem/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elasticfilesystem/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elasticfilesystem/hooks/angular-query.ts' },
  docs: {
    output: './src/elasticfilesystem/api.md',
    curl: true,
    baseUrl: 'https://elasticfilesystem.us-east-1.amazonaws.com',
  },
})
