import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/negd/3.0.0/openapi.yaml',
  output: './src/negd/routes.ts',
  template: {},
  type: { output: './src/negd/types.ts' },
  client: { output: './src/negd/client.ts', baseUrl: '/' },
  rpc: { output: './src/negd/rpc.ts', parseResponse: true },
  swr: { output: './src/negd/hooks/swr.ts' },
  'tanstack-query': { output: './src/negd/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/negd/hooks/preact-query.ts' },
  'solid-query': { output: './src/negd/hooks/solid-query.ts' },
  'vue-query': { output: './src/negd/hooks/vue-query.ts' },
  'svelte-query': { output: './src/negd/hooks/svelte-query.ts' },
  'angular-query': { output: './src/negd/hooks/angular-query.ts' },
  docs: {
    output: './src/negd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
