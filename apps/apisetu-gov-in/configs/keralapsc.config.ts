import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/keralapsc/3.0.0/openapi.yaml',
  output: './src/keralapsc/routes.ts',
  template: {},
  type: { output: './src/keralapsc/types.ts' },
  client: { output: './src/keralapsc/client.ts', baseUrl: '/' },
  rpc: { output: './src/keralapsc/rpc.ts', parseResponse: true },
  swr: { output: './src/keralapsc/hooks/swr.ts' },
  'tanstack-query': { output: './src/keralapsc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/keralapsc/hooks/preact-query.ts' },
  'solid-query': { output: './src/keralapsc/hooks/solid-query.ts' },
  'vue-query': { output: './src/keralapsc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/keralapsc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/keralapsc/hooks/angular-query.ts' },
  docs: {
    output: './src/keralapsc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
