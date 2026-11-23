import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kiadb/3.0.0/openapi.yaml',
  output: './src/kiadb/routes.ts',
  template: {},
  type: { output: './src/kiadb/types.ts' },
  client: { output: './src/kiadb/client.ts', baseUrl: '/' },
  rpc: { output: './src/kiadb/rpc.ts', parseResponse: true },
  swr: { output: './src/kiadb/hooks/swr.ts' },
  'tanstack-query': { output: './src/kiadb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kiadb/hooks/preact-query.ts' },
  'solid-query': { output: './src/kiadb/hooks/solid-query.ts' },
  'vue-query': { output: './src/kiadb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kiadb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kiadb/hooks/angular-query.ts' },
  docs: {
    output: './src/kiadb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
