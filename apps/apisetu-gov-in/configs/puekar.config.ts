import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/puekar/3.0.0/openapi.yaml',
  output: './src/puekar/routes.ts',
  template: {},
  type: { output: './src/puekar/types.ts' },
  client: { output: './src/puekar/client.ts', baseUrl: '/' },
  rpc: { output: './src/puekar/rpc.ts', parseResponse: true },
  swr: { output: './src/puekar/hooks/swr.ts' },
  'tanstack-query': { output: './src/puekar/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/puekar/hooks/preact-query.ts' },
  'solid-query': { output: './src/puekar/hooks/solid-query.ts' },
  'vue-query': { output: './src/puekar/hooks/vue-query.ts' },
  'svelte-query': { output: './src/puekar/hooks/svelte-query.ts' },
  'angular-query': { output: './src/puekar/hooks/angular-query.ts' },
  docs: {
    output: './src/puekar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
