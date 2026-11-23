import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/isendpro.com/1.1.1/openapi.yaml',
  output: './src/isendpro/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/isendpro/types.ts' },
  client: { output: './src/isendpro/client.ts', baseUrl: '/' },
  rpc: { output: './src/isendpro/rpc.ts', parseResponse: true },
  swr: { output: './src/isendpro/hooks/swr.ts' },
  'tanstack-query': { output: './src/isendpro/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/isendpro/hooks/preact-query.ts' },
  'solid-query': { output: './src/isendpro/hooks/solid-query.ts' },
  'vue-query': { output: './src/isendpro/hooks/vue-query.ts' },
  'svelte-query': { output: './src/isendpro/hooks/svelte-query.ts' },
  'angular-query': { output: './src/isendpro/hooks/angular-query.ts' },
  docs: {
    output: './src/isendpro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
