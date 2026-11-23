import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/circular.yaml',
  output: './src/3-0-circular/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-circular/types.ts' },
  client: { output: './src/3-0-circular/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-circular/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-circular/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-circular/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-circular/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-circular/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-circular/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-circular/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-circular/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-circular/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
