import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/byautomata.io/1.0.1/openapi.yaml',
  output: './src/byautomata-io/routes.ts',
  template: {},
  type: { output: './src/byautomata-io/types.ts' },
  client: { output: './src/byautomata-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/byautomata-io/rpc.ts', parseResponse: true },
  swr: { output: './src/byautomata-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/byautomata-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/byautomata-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/byautomata-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/byautomata-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/byautomata-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/byautomata-io/hooks/angular-query.ts' },
  docs: {
    output: './src/byautomata-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
