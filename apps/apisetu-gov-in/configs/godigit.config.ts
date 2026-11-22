import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/godigit/3.0.0/openapi.yaml',
  output: './src/godigit/routes.ts',
  template: {},
  type: { output: './src/godigit/types.ts' },
  client: { output: './src/godigit/client.ts', baseUrl: '/' },
  rpc: { output: './src/godigit/rpc.ts', parseResponse: true },
  swr: { output: './src/godigit/hooks/swr.ts' },
  'tanstack-query': { output: './src/godigit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/godigit/hooks/preact-query.ts' },
  'solid-query': { output: './src/godigit/hooks/solid-query.ts' },
  'vue-query': { output: './src/godigit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/godigit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/godigit/hooks/angular-query.ts' },
  docs: {
    output: './src/godigit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
