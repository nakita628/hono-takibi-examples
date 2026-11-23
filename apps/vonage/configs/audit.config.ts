import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/audit/1.0.4/openapi.yaml',
  output: './src/audit/routes.ts',
  template: {},
  type: { output: './src/audit/types.ts' },
  client: { output: './src/audit/client.ts', baseUrl: '/' },
  rpc: { output: './src/audit/rpc.ts', parseResponse: true },
  swr: { output: './src/audit/hooks/swr.ts' },
  'tanstack-query': { output: './src/audit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/audit/hooks/preact-query.ts' },
  'solid-query': { output: './src/audit/hooks/solid-query.ts' },
  'vue-query': { output: './src/audit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/audit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/audit/hooks/angular-query.ts' },
  docs: {
    output: './src/audit/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
