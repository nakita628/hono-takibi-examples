import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/response-examples.yaml',
  output: './src/3-0-response-examples/routes.ts',
  template: {},
  type: { output: './src/3-0-response-examples/types.ts' },
  client: { output: './src/3-0-response-examples/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-response-examples/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-response-examples/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-response-examples/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-response-examples/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-response-examples/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-response-examples/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-response-examples/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-response-examples/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-response-examples/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
