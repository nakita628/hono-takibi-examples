import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/CCF/main/doc/schemas/gov_openapi.json',
  output: './src/gov/routes.ts',
  template: {},
  type: { output: './src/gov/types.ts' },
  client: { output: './src/gov/client.ts', baseUrl: '/' },
  rpc: { output: './src/gov/rpc.ts', parseResponse: true },
  swr: { output: './src/gov/hooks/swr.ts' },
  'tanstack-query': { output: './src/gov/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gov/hooks/preact-query.ts' },
  'solid-query': { output: './src/gov/hooks/solid-query.ts' },
  'vue-query': { output: './src/gov/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gov/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gov/hooks/angular-query.ts' },
  docs: {
    output: './src/gov/api.md',
    curl: true,
    baseUrl: 'https://localhost:8000',
  },
})
