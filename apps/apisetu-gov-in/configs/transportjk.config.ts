import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportjk/3.0.0/openapi.yaml',
  output: './src/transportjk/routes.ts',
  template: {},
  type: { output: './src/transportjk/types.ts' },
  client: { output: './src/transportjk/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportjk/rpc.ts', parseResponse: true },
  swr: { output: './src/transportjk/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportjk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportjk/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportjk/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportjk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportjk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportjk/hooks/angular-query.ts' },
  docs: {
    output: './src/transportjk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
