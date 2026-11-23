import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getzipinfo/1.0.0/openapi.yaml',
  output: './src/getzipinfo/routes.ts',
  template: {},
  type: { output: './src/getzipinfo/types.ts' },
  client: { output: './src/getzipinfo/client.ts', baseUrl: '/' },
  rpc: { output: './src/getzipinfo/rpc.ts', parseResponse: true },
  swr: { output: './src/getzipinfo/hooks/swr.ts' },
  'tanstack-query': { output: './src/getzipinfo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getzipinfo/hooks/preact-query.ts' },
  'solid-query': { output: './src/getzipinfo/hooks/solid-query.ts' },
  'vue-query': { output: './src/getzipinfo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getzipinfo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getzipinfo/hooks/angular-query.ts' },
  docs: {
    output: './src/getzipinfo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
