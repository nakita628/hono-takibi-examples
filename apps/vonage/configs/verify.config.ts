import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/verify/1.2.4/openapi.yaml',
  output: './src/verify/routes.ts',
  template: {},
  type: { output: './src/verify/types.ts' },
  client: { output: './src/verify/client.ts', baseUrl: '/' },
  rpc: { output: './src/verify/rpc.ts', parseResponse: true },
  swr: { output: './src/verify/hooks/swr.ts' },
  'tanstack-query': { output: './src/verify/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/verify/hooks/preact-query.ts' },
  'solid-query': { output: './src/verify/hooks/solid-query.ts' },
  'vue-query': { output: './src/verify/hooks/vue-query.ts' },
  'svelte-query': { output: './src/verify/hooks/svelte-query.ts' },
  'angular-query': { output: './src/verify/hooks/angular-query.ts' },
  docs: {
    output: './src/verify/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
