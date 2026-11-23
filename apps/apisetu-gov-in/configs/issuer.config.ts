import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/issuer/3.0.0/openapi.yaml',
  output: './src/issuer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/issuer/types.ts' },
  client: { output: './src/issuer/client.ts', baseUrl: '/' },
  rpc: { output: './src/issuer/rpc.ts', parseResponse: true },
  swr: { output: './src/issuer/hooks/swr.ts' },
  'tanstack-query': { output: './src/issuer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/issuer/hooks/preact-query.ts' },
  'solid-query': { output: './src/issuer/hooks/solid-query.ts' },
  'vue-query': { output: './src/issuer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/issuer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/issuer/hooks/angular-query.ts' },
  docs: {
    output: './src/issuer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
