import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mcimindia/3.0.0/openapi.yaml',
  output: './src/mcimindia/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mcimindia/types.ts' },
  client: { output: './src/mcimindia/client.ts', baseUrl: '/' },
  rpc: { output: './src/mcimindia/rpc.ts', parseResponse: true },
  swr: { output: './src/mcimindia/hooks/swr.ts' },
  'tanstack-query': { output: './src/mcimindia/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mcimindia/hooks/preact-query.ts' },
  'solid-query': { output: './src/mcimindia/hooks/solid-query.ts' },
  'vue-query': { output: './src/mcimindia/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mcimindia/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mcimindia/hooks/angular-query.ts' },
  docs: {
    output: './src/mcimindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
