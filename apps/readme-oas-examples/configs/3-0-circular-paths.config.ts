import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/circular-paths.yaml',
  output: './src/3-0-circular-paths/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-circular-paths/types.ts' },
  client: { output: './src/3-0-circular-paths/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-circular-paths/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-circular-paths/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-circular-paths/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-circular-paths/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-circular-paths/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-circular-paths/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-circular-paths/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-circular-paths/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-circular-paths/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
