import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networksecurity/v1beta1/openapi.yaml',
  output: './src/networksecurity/routes.ts',
  template: {},
  type: { output: './src/networksecurity/types.ts' },
  client: { output: './src/networksecurity/client.ts', baseUrl: '/' },
  rpc: { output: './src/networksecurity/rpc.ts', parseResponse: true },
  swr: { output: './src/networksecurity/hooks/swr.ts' },
  'tanstack-query': { output: './src/networksecurity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/networksecurity/hooks/preact-query.ts' },
  'solid-query': { output: './src/networksecurity/hooks/solid-query.ts' },
  'vue-query': { output: './src/networksecurity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/networksecurity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/networksecurity/hooks/angular-query.ts' },
  docs: {
    output: './src/networksecurity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
