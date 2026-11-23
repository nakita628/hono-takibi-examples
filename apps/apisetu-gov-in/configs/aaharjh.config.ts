import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aaharjh/3.0.0/openapi.yaml',
  output: './src/aaharjh/routes.ts',
  template: {},
  type: { output: './src/aaharjh/types.ts' },
  client: { output: './src/aaharjh/client.ts', baseUrl: '/' },
  rpc: { output: './src/aaharjh/rpc.ts', parseResponse: true },
  swr: { output: './src/aaharjh/hooks/swr.ts' },
  'tanstack-query': { output: './src/aaharjh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aaharjh/hooks/preact-query.ts' },
  'solid-query': { output: './src/aaharjh/hooks/solid-query.ts' },
  'vue-query': { output: './src/aaharjh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aaharjh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aaharjh/hooks/angular-query.ts' },
  docs: {
    output: './src/aaharjh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
