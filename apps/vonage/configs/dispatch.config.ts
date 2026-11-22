import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/dispatch/0.3.4/openapi.yaml',
  output: './src/dispatch/routes.ts',
  template: {},
  type: { output: './src/dispatch/types.ts' },
  client: { output: './src/dispatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/dispatch/rpc.ts', parseResponse: true },
  swr: { output: './src/dispatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/dispatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dispatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/dispatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/dispatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dispatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dispatch/hooks/angular-query.ts' },
  docs: {
    output: './src/dispatch/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
