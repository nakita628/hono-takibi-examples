import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportmz/3.0.0/openapi.yaml',
  output: './src/transportmz/routes.ts',
  template: {},
  type: { output: './src/transportmz/types.ts' },
  client: { output: './src/transportmz/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportmz/rpc.ts', parseResponse: true },
  swr: { output: './src/transportmz/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportmz/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportmz/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportmz/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportmz/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportmz/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportmz/hooks/angular-query.ts' },
  docs: {
    output: './src/transportmz/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
