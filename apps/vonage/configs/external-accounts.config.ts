import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/external-accounts/0.1.5/openapi.yaml',
  output: './src/external-accounts/routes.ts',
  template: {},
  type: { output: './src/external-accounts/types.ts' },
  client: { output: './src/external-accounts/client.ts', baseUrl: '/' },
  rpc: { output: './src/external-accounts/rpc.ts', parseResponse: true },
  swr: { output: './src/external-accounts/hooks/swr.ts' },
  'tanstack-query': { output: './src/external-accounts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/external-accounts/hooks/preact-query.ts' },
  'solid-query': { output: './src/external-accounts/hooks/solid-query.ts' },
  'vue-query': { output: './src/external-accounts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/external-accounts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/external-accounts/hooks/angular-query.ts' },
  docs: {
    output: './src/external-accounts/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
