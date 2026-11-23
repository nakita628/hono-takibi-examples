import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getaddressmatch/1.0.0/openapi.yaml',
  output: './src/getaddressmatch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getaddressmatch/types.ts' },
  client: { output: './src/getaddressmatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/getaddressmatch/rpc.ts', parseResponse: true },
  swr: { output: './src/getaddressmatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/getaddressmatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getaddressmatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/getaddressmatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/getaddressmatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getaddressmatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getaddressmatch/hooks/angular-query.ts' },
  docs: {
    output: './src/getaddressmatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
