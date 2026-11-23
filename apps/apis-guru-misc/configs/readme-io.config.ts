import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/readme.io/2.0.0/openapi.yaml',
  output: './src/readme-io/routes.ts',
  template: {},
  type: { output: './src/readme-io/types.ts' },
  client: { output: './src/readme-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/readme-io/rpc.ts', parseResponse: true },
  swr: { output: './src/readme-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/readme-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/readme-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/readme-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/readme-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/readme-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/readme-io/hooks/angular-query.ts' },
  docs: {
    output: './src/readme-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
