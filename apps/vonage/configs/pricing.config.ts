import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/pricing/0.0.3/openapi.yaml',
  output: './src/pricing/routes.ts',
  template: {},
  type: { output: './src/pricing/types.ts' },
  client: { output: './src/pricing/client.ts', baseUrl: '/' },
  rpc: { output: './src/pricing/rpc.ts', parseResponse: true },
  swr: { output: './src/pricing/hooks/swr.ts' },
  'tanstack-query': { output: './src/pricing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pricing/hooks/preact-query.ts' },
  'solid-query': { output: './src/pricing/hooks/solid-query.ts' },
  'vue-query': { output: './src/pricing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pricing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pricing/hooks/angular-query.ts' },
  docs: {
    output: './src/pricing/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
