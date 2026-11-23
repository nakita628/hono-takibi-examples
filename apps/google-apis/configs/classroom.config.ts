import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/classroom/v1/openapi.yaml',
  output: './src/classroom/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/classroom/types.ts' },
  client: { output: './src/classroom/client.ts', baseUrl: '/' },
  rpc: { output: './src/classroom/rpc.ts', parseResponse: true },
  swr: { output: './src/classroom/hooks/swr.ts' },
  'tanstack-query': { output: './src/classroom/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/classroom/hooks/preact-query.ts' },
  'solid-query': { output: './src/classroom/hooks/solid-query.ts' },
  'vue-query': { output: './src/classroom/hooks/vue-query.ts' },
  'svelte-query': { output: './src/classroom/hooks/svelte-query.ts' },
  'angular-query': { output: './src/classroom/hooks/angular-query.ts' },
  docs: {
    output: './src/classroom/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
