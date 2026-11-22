import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bhavishya/3.0.0/openapi.yaml',
  output: './src/bhavishya/routes.ts',
  template: {},
  type: { output: './src/bhavishya/types.ts' },
  client: { output: './src/bhavishya/client.ts', baseUrl: '/' },
  rpc: { output: './src/bhavishya/rpc.ts', parseResponse: true },
  swr: { output: './src/bhavishya/hooks/swr.ts' },
  'tanstack-query': { output: './src/bhavishya/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bhavishya/hooks/preact-query.ts' },
  'solid-query': { output: './src/bhavishya/hooks/solid-query.ts' },
  'vue-query': { output: './src/bhavishya/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bhavishya/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bhavishya/hooks/angular-query.ts' },
  docs: {
    output: './src/bhavishya/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
