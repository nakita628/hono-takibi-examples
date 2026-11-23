import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/request-examples.yaml',
  output: './src/3-0-request-examples/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-request-examples/types.ts' },
  client: { output: './src/3-0-request-examples/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-request-examples/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-request-examples/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-request-examples/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-request-examples/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-request-examples/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-request-examples/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-request-examples/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-request-examples/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-request-examples/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
