import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/CCF/main/doc/schemas/app_openapi.json',
  output: './src/app/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/app/types.ts' },
  client: { output: './src/app/client.ts', baseUrl: '/' },
  rpc: { output: './src/app/rpc.ts', parseResponse: true },
  swr: { output: './src/app/hooks/swr.ts' },
  'tanstack-query': { output: './src/app/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/app/hooks/preact-query.ts' },
  'solid-query': { output: './src/app/hooks/solid-query.ts' },
  'vue-query': { output: './src/app/hooks/vue-query.ts' },
  'svelte-query': { output: './src/app/hooks/svelte-query.ts' },
  'angular-query': { output: './src/app/hooks/angular-query.ts' },
  docs: {
    output: './src/app/api.md',
    curl: true,
    baseUrl: 'https://localhost:8000',
  },
})
