import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fraudlabspro.com/fraud-detection/1.1/openapi.yaml',
  output: './src/fraudlabspro-fraud-detection/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fraudlabspro-fraud-detection/types.ts' },
  client: { output: './src/fraudlabspro-fraud-detection/client.ts', baseUrl: '/' },
  rpc: { output: './src/fraudlabspro-fraud-detection/rpc.ts', parseResponse: true },
  swr: { output: './src/fraudlabspro-fraud-detection/hooks/swr.ts' },
  'tanstack-query': { output: './src/fraudlabspro-fraud-detection/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fraudlabspro-fraud-detection/hooks/preact-query.ts' },
  'solid-query': { output: './src/fraudlabspro-fraud-detection/hooks/solid-query.ts' },
  'vue-query': { output: './src/fraudlabspro-fraud-detection/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fraudlabspro-fraud-detection/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fraudlabspro-fraud-detection/hooks/angular-query.ts' },
  docs: {
    output: './src/fraudlabspro-fraud-detection/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
