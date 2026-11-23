import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/application/1.0.2/openapi.yaml',
  output: './src/application/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/application/types.ts' },
  client: { output: './src/application/client.ts', baseUrl: '/' },
  rpc: { output: './src/application/rpc.ts', parseResponse: true },
  swr: { output: './src/application/hooks/swr.ts' },
  'tanstack-query': { output: './src/application/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/application/hooks/preact-query.ts' },
  'solid-query': { output: './src/application/hooks/solid-query.ts' },
  'vue-query': { output: './src/application/hooks/vue-query.ts' },
  'svelte-query': { output: './src/application/hooks/svelte-query.ts' },
  'angular-query': { output: './src/application/hooks/angular-query.ts' },
  docs: {
    output: './src/application/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
