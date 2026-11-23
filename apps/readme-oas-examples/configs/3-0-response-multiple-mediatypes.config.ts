import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/response-multiple-mediatypes.yaml',
  output: './src/3-0-response-multiple-mediatypes/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-response-multiple-mediatypes/types.ts' },
  client: { output: './src/3-0-response-multiple-mediatypes/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-response-multiple-mediatypes/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-response-multiple-mediatypes/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-response-multiple-mediatypes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-response-multiple-mediatypes/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-response-multiple-mediatypes/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-response-multiple-mediatypes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-response-multiple-mediatypes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-response-multiple-mediatypes/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-response-multiple-mediatypes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
