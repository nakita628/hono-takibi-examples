import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/swavlambancard/3.0.0/openapi.yaml',
  output: './src/swavlambancard/routes.ts',
  template: {},
  type: { output: './src/swavlambancard/types.ts' },
  client: { output: './src/swavlambancard/client.ts', baseUrl: '/' },
  rpc: { output: './src/swavlambancard/rpc.ts', parseResponse: true },
  swr: { output: './src/swavlambancard/hooks/swr.ts' },
  'tanstack-query': { output: './src/swavlambancard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/swavlambancard/hooks/preact-query.ts' },
  'solid-query': { output: './src/swavlambancard/hooks/solid-query.ts' },
  'vue-query': { output: './src/swavlambancard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/swavlambancard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/swavlambancard/hooks/angular-query.ts' },
  docs: {
    output: './src/swavlambancard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
