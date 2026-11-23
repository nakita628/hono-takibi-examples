import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/conversation/2.0.1/openapi.yaml',
  output: './src/conversation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/conversation/types.ts' },
  client: { output: './src/conversation/client.ts', baseUrl: '/' },
  rpc: { output: './src/conversation/rpc.ts', parseResponse: true },
  swr: { output: './src/conversation/hooks/swr.ts' },
  'tanstack-query': { output: './src/conversation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conversation/hooks/preact-query.ts' },
  'solid-query': { output: './src/conversation/hooks/solid-query.ts' },
  'vue-query': { output: './src/conversation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conversation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conversation/hooks/angular-query.ts' },
  docs: {
    output: './src/conversation/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
