import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jharsewa/3.0.0/openapi.yaml',
  output: './src/jharsewa/routes.ts',
  template: {},
  type: { output: './src/jharsewa/types.ts' },
  client: { output: './src/jharsewa/client.ts', baseUrl: '/' },
  rpc: { output: './src/jharsewa/rpc.ts', parseResponse: true },
  swr: { output: './src/jharsewa/hooks/swr.ts' },
  'tanstack-query': { output: './src/jharsewa/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/jharsewa/hooks/preact-query.ts' },
  'solid-query': { output: './src/jharsewa/hooks/solid-query.ts' },
  'vue-query': { output: './src/jharsewa/hooks/vue-query.ts' },
  'svelte-query': { output: './src/jharsewa/hooks/svelte-query.ts' },
  'angular-query': { output: './src/jharsewa/hooks/angular-query.ts' },
  docs: {
    output: './src/jharsewa/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
