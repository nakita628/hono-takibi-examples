import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/niesbud/3.0.0/openapi.yaml',
  output: './src/niesbud/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/niesbud/types.ts' },
  client: { output: './src/niesbud/client.ts', baseUrl: '/' },
  rpc: { output: './src/niesbud/rpc.ts', parseResponse: true },
  swr: { output: './src/niesbud/hooks/swr.ts' },
  'tanstack-query': { output: './src/niesbud/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/niesbud/hooks/preact-query.ts' },
  'solid-query': { output: './src/niesbud/hooks/solid-query.ts' },
  'vue-query': { output: './src/niesbud/hooks/vue-query.ts' },
  'svelte-query': { output: './src/niesbud/hooks/svelte-query.ts' },
  'angular-query': { output: './src/niesbud/hooks/angular-query.ts' },
  docs: {
    output: './src/niesbud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
