import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bajajallianz/3.0.0/openapi.yaml',
  output: './src/bajajallianz/routes.ts',
  template: {},
  type: { output: './src/bajajallianz/types.ts' },
  client: { output: './src/bajajallianz/client.ts', baseUrl: '/' },
  rpc: { output: './src/bajajallianz/rpc.ts', parseResponse: true },
  swr: { output: './src/bajajallianz/hooks/swr.ts' },
  'tanstack-query': { output: './src/bajajallianz/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bajajallianz/hooks/preact-query.ts' },
  'solid-query': { output: './src/bajajallianz/hooks/solid-query.ts' },
  'vue-query': { output: './src/bajajallianz/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bajajallianz/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bajajallianz/hooks/angular-query.ts' },
  docs: {
    output: './src/bajajallianz/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
