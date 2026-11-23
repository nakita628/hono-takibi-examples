import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/crm/9.3.0/openapi.yaml',
  output: './src/crm/routes.ts',
  template: {},
  type: { output: './src/crm/types.ts' },
  client: { output: './src/crm/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm/rpc.ts', parseResponse: true },
  swr: { output: './src/crm/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm/hooks/angular-query.ts' },
  docs: {
    output: './src/crm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
