import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getweathercity/1.0.0/openapi.yaml',
  output: './src/getweathercity/routes.ts',
  template: {},
  type: { output: './src/getweathercity/types.ts' },
  client: { output: './src/getweathercity/client.ts', baseUrl: '/' },
  rpc: { output: './src/getweathercity/rpc.ts', parseResponse: true },
  swr: { output: './src/getweathercity/hooks/swr.ts' },
  'tanstack-query': { output: './src/getweathercity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getweathercity/hooks/preact-query.ts' },
  'solid-query': { output: './src/getweathercity/hooks/solid-query.ts' },
  'vue-query': { output: './src/getweathercity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getweathercity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getweathercity/hooks/angular-query.ts' },
  docs: {
    output: './src/getweathercity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
