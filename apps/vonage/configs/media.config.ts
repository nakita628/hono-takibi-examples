import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/media/1.0.2/openapi.yaml',
  output: './src/media/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/media/types.ts' },
  client: { output: './src/media/client.ts', baseUrl: '/' },
  rpc: { output: './src/media/rpc.ts', parseResponse: true },
  swr: { output: './src/media/hooks/swr.ts' },
  'tanstack-query': { output: './src/media/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/media/hooks/preact-query.ts' },
  'solid-query': { output: './src/media/hooks/solid-query.ts' },
  'vue-query': { output: './src/media/hooks/vue-query.ts' },
  'svelte-query': { output: './src/media/hooks/svelte-query.ts' },
  'angular-query': { output: './src/media/hooks/angular-query.ts' },
  docs: {
    output: './src/media/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
