import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mbose/3.0.0/openapi.yaml',
  output: './src/mbose/routes.ts',
  template: {},
  type: { output: './src/mbose/types.ts' },
  client: { output: './src/mbose/client.ts', baseUrl: '/' },
  rpc: { output: './src/mbose/rpc.ts', parseResponse: true },
  swr: { output: './src/mbose/hooks/swr.ts' },
  'tanstack-query': { output: './src/mbose/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mbose/hooks/preact-query.ts' },
  'solid-query': { output: './src/mbose/hooks/solid-query.ts' },
  'vue-query': { output: './src/mbose/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mbose/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mbose/hooks/angular-query.ts' },
  docs: {
    output: './src/mbose/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
