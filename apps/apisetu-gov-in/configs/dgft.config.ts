import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dgft/3.0.0/openapi.yaml',
  output: './src/dgft/routes.ts',
  template: {},
  type: { output: './src/dgft/types.ts' },
  client: { output: './src/dgft/client.ts', baseUrl: '/' },
  rpc: { output: './src/dgft/rpc.ts', parseResponse: true },
  swr: { output: './src/dgft/hooks/swr.ts' },
  'tanstack-query': { output: './src/dgft/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dgft/hooks/preact-query.ts' },
  'solid-query': { output: './src/dgft/hooks/solid-query.ts' },
  'vue-query': { output: './src/dgft/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dgft/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dgft/hooks/angular-query.ts' },
  docs: {
    output: './src/dgft/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
