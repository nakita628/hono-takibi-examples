import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/response-http-behavior.yaml',
  output: './src/3-0-response-http-behavior/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-response-http-behavior/types.ts' },
  client: { output: './src/3-0-response-http-behavior/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-response-http-behavior/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-response-http-behavior/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-response-http-behavior/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-response-http-behavior/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-response-http-behavior/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-response-http-behavior/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-response-http-behavior/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-response-http-behavior/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-response-http-behavior/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
