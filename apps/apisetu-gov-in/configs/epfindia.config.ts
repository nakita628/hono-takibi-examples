import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/epfindia/3.0.0/openapi.yaml',
  output: './src/epfindia/routes.ts',
  template: {},
  type: { output: './src/epfindia/types.ts' },
  client: { output: './src/epfindia/client.ts', baseUrl: '/' },
  rpc: { output: './src/epfindia/rpc.ts', parseResponse: true },
  swr: { output: './src/epfindia/hooks/swr.ts' },
  'tanstack-query': { output: './src/epfindia/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/epfindia/hooks/preact-query.ts' },
  'solid-query': { output: './src/epfindia/hooks/solid-query.ts' },
  'vue-query': { output: './src/epfindia/hooks/vue-query.ts' },
  'svelte-query': { output: './src/epfindia/hooks/svelte-query.ts' },
  'angular-query': { output: './src/epfindia/hooks/angular-query.ts' },
  docs: {
    output: './src/epfindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
