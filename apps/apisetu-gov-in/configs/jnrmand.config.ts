import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jnrmand/3.0.0/openapi.yaml',
  output: './src/jnrmand/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/jnrmand/types.ts' },
  client: { output: './src/jnrmand/client.ts', baseUrl: '/' },
  rpc: { output: './src/jnrmand/rpc.ts', parseResponse: true },
  swr: { output: './src/jnrmand/hooks/swr.ts' },
  'tanstack-query': { output: './src/jnrmand/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jnrmand/hooks/preact-query.ts' },
  'solid-query': { output: './src/jnrmand/hooks/solid-query.ts' },
  'vue-query': { output: './src/jnrmand/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jnrmand/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jnrmand/hooks/angular-query.ts' },
  docs: {
    output: './src/jnrmand/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
