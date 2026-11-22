import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clickup.com/1.0.0/openapi.yaml',
  output: './src/clickup/routes.ts',
  template: {},
  type: { output: './src/clickup/types.ts' },
  client: { output: './src/clickup/client.ts', baseUrl: '/' },
  rpc: { output: './src/clickup/rpc.ts', parseResponse: true },
  swr: { output: './src/clickup/hooks/swr.ts' },
  'tanstack-query': { output: './src/clickup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clickup/hooks/preact-query.ts' },
  'solid-query': { output: './src/clickup/hooks/solid-query.ts' },
  'vue-query': { output: './src/clickup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clickup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clickup/hooks/angular-query.ts' },
  docs: {
    output: './src/clickup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
