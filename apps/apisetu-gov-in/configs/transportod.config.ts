import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportod/3.0.0/openapi.yaml',
  output: './src/transportod/routes.ts',
  template: {},
  type: { output: './src/transportod/types.ts' },
  client: { output: './src/transportod/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportod/rpc.ts', parseResponse: true },
  swr: { output: './src/transportod/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportod/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportod/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportod/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportod/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportod/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportod/hooks/angular-query.ts' },
  docs: {
    output: './src/transportod/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
