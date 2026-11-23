import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportuk/3.0.0/openapi.yaml',
  output: './src/transportuk/routes.ts',
  template: {},
  type: { output: './src/transportuk/types.ts' },
  client: { output: './src/transportuk/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportuk/rpc.ts', parseResponse: true },
  swr: { output: './src/transportuk/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportuk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportuk/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportuk/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportuk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportuk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportuk/hooks/angular-query.ts' },
  docs: {
    output: './src/transportuk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
